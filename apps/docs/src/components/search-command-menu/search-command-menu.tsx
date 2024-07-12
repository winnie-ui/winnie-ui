import { useCallback, useEffect, useRef, useState } from "react";
import {
  Button,
  Dialog,
  DialogTrigger,
  Modal,
  ModalOverlay,
} from "react-aria-components";

import { Command } from "cmdk";
import Flexsearch from "flexsearch";
import { Sparkles } from "lucide-react";
import { Search } from "lucide-react";
import {
  type CollectionResponse,
  type ContentResponse,
} from "~/types/collections";

import { getMarkedDescription, getMarkedTitle } from "./utils";

import "./search-command-menu.css";

export function SearchCommandMenu() {
  /**
   * creates a new flexsearch index
   */
  const index = useRef(new Flexsearch.Index({ tokenize: "reverse" }));

  /**
   * tracks the open state of the search command menu
   */
  const [open, setOpen] = useState(false);

  /**
   * tracks the index id to the content
   */
  const [store, setStore] = useState<Map<number, ContentResponse>>(new Map());

  /**
   * tracks the currently matching items of the search
   */
  const [items, setItems] = useState<
    {
      id: ContentResponse["id"];
      title: ContentResponse["title"];
      description: ContentResponse["description"];
      href: ContentResponse["href"];
      excerpt?: string;
    }[]
  >([]);

  /**
   * tracks the current search term
   */
  const [searchTerm, setSearchTerm] = useState("");

  /**
   * searches for the query in the indexes and maps the index to the content
   */
  const handleSearch = useCallback(
    (search: string) => {
      // escape the query
      const query = search.replace(/[-[\]{}()*+?.,\\^$|#\s]/g, "\\$&");
      const matchingIds = index.current.search(query);
      const items = [];

      for (const id of matchingIds) {
        const content = store.get(id as number);
        if (content) {
          const markedTitle = getMarkedTitle(content.title, search);
          const markedDescription = getMarkedDescription(
            content.body
              // Note: this is far from the most performant way to do this. But for now it is fine
              // Also, cheers to GPT lol, regex stinx.
              // prettier-ignore
              .replace(/\[([^\]]+)\]\(([^)]+)\)/g, "$1 - $2") // replace any braces from markdown and preserve the link text
              .replace(/^import.*\n/gm, "") // replace any import lines with a blank string
              .replace(/^\|.*\|$/gm, (line) => line.replace(/\|/g, "")) // Remove all | characters in lines starting and ending with |
              .replace(/^\s*[-:]+\s*[-:|\s]*$/gm, "") // Remove lines that are just dashes or column separators
              .replace(/<[^>]+>/g, ""), // replace any jsx with a blank string
            search,
          );
          items.push({
            id: content.id,
            title: markedTitle ?? content.title,
            description: markedDescription ?? content.description,
            href: content.href,
          });
        }
      }
      setItems(items);
      setSearchTerm(search);
    },
    [index, store],
  );

  /**
   * opens the search command menu when the specified keyboard shortcut has
   * been pressed
   */
  const handleKeydown = useCallback((e: KeyboardEvent) => {
    if ((e.metaKey && e.key === "k") || e.key === "/") {
      e.preventDefault();
      setOpen(true);
    }
  }, []);

  /**
   * handles resetting the search command menu
   */
  const reset = useCallback(() => {
    setSearchTerm("");
    setItems([]);
  }, []);

  /**
   * navigates to the item href route based on the selection
   */
  const handleItemSelect = useCallback(
    (href: string) => {
      // This is a hacky way to make sure that we still trigger a view
      // transition. If we try to us something like `window.location.href = href`
      // the result is a bunch of jank from a full page reload, and we completely
      // bypass the view transition lifecycle. So instead we are programmitcally
      // click the anchor tag to remain in the lifecycle
      (
        document
          .querySelector("[cmdk-root]")
          ?.querySelector(`a[href='${href}']`) as HTMLAnchorElement
      )?.click();
      setOpen(false);
      reset();
    },
    [reset],
  );

  /**
   * handles resetting the search command menu when the dialog closes
   */
  const handleOnOpenChange = useCallback(
    (open: boolean) => {
      if (!open) {
        reset();
      }

      setOpen(open);
    },
    [reset],
  );

  /**
   * fetches content collections and listens to window keydown event
   * for keyboard shortcut
   */
  useEffect(() => {
    /**
     * fetches static content collections from the endpoint
     * and creates indexes for searching
     */
    async function getContent() {
      const response = await fetch("/css/docs/content.json");
      const responseJson = (await response.json()) as CollectionResponse;

      const store = new Map();

      for (const page of responseJson.collection) {
        index.current.add(
          page.id,
          `${page.title} ${page.description} ${page.body}`,
        );
        store.set(page.id, page);
      }

      setStore(store);
    }

    getContent();
    document.addEventListener("keydown", handleKeydown);

    return () => {
      document.removeEventListener("keydown", handleKeydown);
    };
  }, [index]);

  return (
    <DialogTrigger isOpen={open} onOpenChange={handleOnOpenChange}>
      <Button className="search-trigger">
        <div className="search-trigger-text-container">
          <Search />
          <span className="search-trigger-text">Search docs...</span>
        </div>
        <kbd className="search-trigger-kbd">/</kbd>
      </Button>
      <ModalOverlay className="search-modal-overlay" isDismissable>
        <Modal className="search-modal">
          <Dialog className="search-dialog">
            <Command className="search-command-menu" shouldFilter={false}>
              <div className="search-command-menu-input-container">
                <Search />
                <Command.Input
                  value={searchTerm}
                  onValueChange={handleSearch}
                  autoFocus
                  className="search-command-menu-input"
                  placeholder="Search docs or ask a question..."
                />
              </div>
              {searchTerm === "" ? (
                <Command.List />
              ) : (
                <Command.List className="search-command-menu-list">
                  <>
                    <Command.Empty className="search-command-menu-empty">
                      <Search />
                      <div className="search-command-menu-empty-title">
                        No docs found
                      </div>
                      <div className="search-command-menu-empty-description">
                        We couldn't find docs with text matching "{searchTerm}"
                      </div>
                    </Command.Empty>
                    <Command.Item
                      value="ai"
                      className="search-command-menu-item ai"
                    >
                      <Sparkles />
                      Ask Winnie AI:{" "}
                      <span className="ai-search-term">{searchTerm}</span>
                    </Command.Item>
                    {items.map((item) => {
                      return (
                        <Command.Item
                          key={item.id}
                          onSelect={() => {
                            handleItemSelect(item.href);
                          }}
                          asChild
                        >
                          <a
                            href={item.href}
                            className="search-command-menu-item"
                          >
                            <span
                              className="search-command-menu-item-title"
                              dangerouslySetInnerHTML={{ __html: item.title }}
                            />
                            <span
                              className="search-command-menu-item-description"
                              dangerouslySetInnerHTML={{
                                __html: item.description,
                              }}
                            />
                          </a>
                        </Command.Item>
                      );
                    })}
                  </>
                </Command.List>
              )}
            </Command>
          </Dialog>
        </Modal>
      </ModalOverlay>
    </DialogTrigger>
  );
}
