export const replaceTitleWithTokenizedValues = (title: string, replacements?: Record<string, string>) => {
  if (!replacements || !Object.keys(replacements).length) return title;

  return title.replace(/\{(.*?)\}/g, (_, token) => replacements[token] || token);
};
