// check http prefix if not exist add it
export const checkHttpContentfulPrefix = (url: string | undefined) => {
  if (!url) {
    return "";
  }
  if (url.startsWith("http")) {
    return url;
  }
  return `http:${url}`;
};
