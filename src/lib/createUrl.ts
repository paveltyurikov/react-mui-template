const cleanPath = (path: string) => {
  const cleanPath = path.replace(/[/\s]+/gi, "");
  if (path.length !== cleanPath.length) {
    console.warn(`input path: ${path} has error symbols like space or / `);
  }
  return cleanPath;
};

const createUrl = (paths: string[]) => {
  return `/${paths.map((path) => cleanPath(String(path))).join("/")}/`;
};

export default createUrl;
