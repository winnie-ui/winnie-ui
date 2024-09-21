/**
 * Parses an excerpt from the provided text with a predefined character padding
 * on either side of the matching search term
 *
 * @param text content to parse
 * @param searchTerm string to find in the text
 * @param [limit=1] the amount of excerpts to produce
 *
 * @returns an array of excerpts
 */
function getExcerpt(text: string, searchTerm: string, limit = 1) {
  const regex = new RegExp(searchTerm, "gi");
  const indexes = [];
  let matches = 0;
  let match: RegExpExecArray | null;

  // biome-ignore lint/suspicious/noAssignInExpressions: TODO: remove when monorepos are supported
  while ((match = regex.exec(text)) !== null && matches < limit) {
    indexes.push(match.index);
    matches++;
  }

  return indexes.map((index) => {
    const start = index - 40;
    const end = index + 60;
    return text.substring(start, end).trim();
  });
}

/**
 * Surrounds the search term string with a set of `mark` tags
 *
 * @param text content to parse
 * @param searchTerm string to surround with `mark` tags
 *
 * @returns undefined or an excerpt with the search term surrounded by `mark` tags
 */
export function getMarkedTitle(text: string, searchTerm: string) {
  const excerpt = getExcerpt(text, searchTerm)[0];

  if (excerpt) {
    return replaceTextWithMarker(excerpt, searchTerm);
  }
}

/**
 * Surrounds the search term string with a set of `mark` tags. Different from `getMarkedTitle`
 * since the excerpt is also padded with `...` ellipsis'.
 *
 * @param text content to parse
 * @param searchTerm string to surround with `mark` tags
 *
 * @returns undefined or an excerpt with the search term surrounded by `mark` tags
 */
export function getMarkedDescription(text: string, searchTerm: string) {
  const excerpt = getExcerpt(text, searchTerm)[0];

  if (excerpt) {
    return `...${replaceTextWithMarker(excerpt, searchTerm)}...`;
  }
}

/**
 * Surrounds the search term string with a set of `mark` tags
 *
 * @param text content to parse
 * @param searchTerm string to surround with `mark` tags
 *
 * @returns undefined or an excerpt with the search term surrounded by `mark` tags
 */
function replaceTextWithMarker(text: string, searchTerm: string) {
  const regex = new RegExp(searchTerm, "gi");
  return text.replaceAll(regex, (match) => `<mark>${match}</mark>`);
}
