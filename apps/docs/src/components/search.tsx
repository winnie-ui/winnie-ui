import {
  type ChangeEvent,
  useCallback,
  useEffect,
  useRef,
  useState,
} from "react";

import Flexsearch from "flexsearch";
import {
  type CollectionResponse,
  type ContentResponse,
} from "~/types/collections";

import "./search.css";

export function Search() {
  /**
   * creates a new flexsearch index
   */
  const index = useRef(new Flexsearch.Index({ tokenize: "reverse" }));

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
    (e: ChangeEvent<HTMLInputElement>) => {
      const query = e.target.value.replace(/[-[\]{}()*+?.,\\^$|#\s]/g, "\\$&");

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
    if ((e.metaKey && e.key === "k") || (e.metaKey && e.key === "/")) {
      console.log("Asdfasdf");
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
      const response = await fetch("/css/content.json");
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
    <div className="search">
      <input onChange={handleSearch} />
      <ul>
        {items.map((item) => {
          return <li key={item.slug}>{item.title}</li>;
        })}
      </ul>
    </div>
  );
}
