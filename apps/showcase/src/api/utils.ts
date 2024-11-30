type StorageKey = string[];

/**
 * Gets data for query from localstorage
 *
 * @param key query key to get the data from in localstorage
 * @returns data matching the provided return type
 */
export function getFromLocalStorage<ReturnType>(
  key: StorageKey,
): ReturnType | null {
  const data = localStorage.getItem(JSON.stringify(key));

  if (data == null) {
    return null;
  }

  return JSON.stringify(data) as ReturnType;
}

/**
 * Sets provided data on query key in localstorage
 *
 * @param key query key to set the data on
 * @param data data to set on key
 */
export function setInLocalStorage(key: StorageKey, data: unknown) {
  localStorage.setItem(JSON.stringify(key), JSON.stringify(data));
}
