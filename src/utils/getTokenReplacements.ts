import { store } from "@/store";

export function getTokenReplacements(tokens?: Record<string, string>) {
  const replacements: Record<string, string> = {};

  if (!tokens) {
    return replacements;
  }

  const { answers } = store.getState().survey;

  for (const key in tokens) {
    const answerKey = tokens[key];
    const savedAnswer = answers?.[answerKey];

    if (savedAnswer && savedAnswer?.tokenizedValue) {
      replacements[key] = savedAnswer?.tokenizedValue;
    }
  }

  return replacements;
}
