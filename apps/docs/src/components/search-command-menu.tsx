import { useCallback, useEffect, useRef, useState } from "react";
import {
  Dialog,
  DialogTrigger,
  Modal,
  ModalOverlay,
} from "react-aria-components";

import { Command } from "cmdk";
import Flexsearch from "flexsearch";
import {
  type CollectionResponse,
  type ContentResponse,
} from "~/types/collections";

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
  const [items, setItems] = useState<ContentResponse[]>([]);

  /**
   * searches for the query in the indexes and maps the index to the content
   */
  const handleSearch = useCallback(
    (search: string) => {
      const query = search.replace(/[-[\]{}()*+?.,\\^$|#\s]/g, "\\$&");

      const matchingIds = index.current.search(query);

      const items = [];

      for (const id of matchingIds) {
        const content = store.get(id as number);
        if (content) {
          items.push(content);
        }
      }
      setItems(items);
    },
    [index, store],
  );

  const handleKeydown = useCallback((e: KeyboardEvent) => {
    if ((e.metaKey && e.key === "k") || e.key === "/") {
      e.preventDefault();
      setOpen(true);
    }
  }, []);

  /**
   * fetches content collections and listens to window keydown event
   * for cmd + k
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
    <DialogTrigger isOpen={open} onOpenChange={setOpen}>
      <ModalOverlay className="search-modal-overlay" isDismissable>
        <Modal className="search-modal">
          <Dialog className="search-dialog">
            <Command className="search-command-menu" shouldFilter={false}>
              <Command.Input
                onValueChange={handleSearch}
                autoFocus
                className="search-command-menu-input"
                placeholder="Search docs..."
              />
              <Command.List className="search-command-menu-list">
                <Command.Empty>No results found.</Command.Empty>
                {items.map((item) => {
                  return (
                    <Command.Item
                      key={item.id}
                      className="search-command-menu-item"
                      onSelect={() => {
                        // This is a hacky way to make sure that we still trigger a view
                        // transition. If we try to us something like `window.location.href = href`
                        // the result is a bunch of jank from a full page reload, and we completely
                        // bypass the view transition lifecycle. So instead we are programmitcally
                        // click the anchor tag to remain in the lifecycle
                        setOpen(false);
                        (
                          document
                            .querySelector("[cmdk-root]")
                            ?.querySelector(
                              `a[href='${item.href}']`,
                            ) as HTMLAnchorElement
                        )?.click();
                      }}
                      asChild
                    >
                      <a href={item.href}>{item.title}</a>
                    </Command.Item>
                  );
                })}
              </Command.List>
            </Command>
          </Dialog>
        </Modal>
      </ModalOverlay>
    </DialogTrigger>
  );
}
