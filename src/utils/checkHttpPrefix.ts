// check http prefix if not exist add it
export const checkHttpContentfulPrefix = (url: string) => {
  if (url.startsWith("http")) {
    return url;
  }
  return `http:${url}`;
};
