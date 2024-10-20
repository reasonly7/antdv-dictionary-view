import { get } from "./request";

const prefix = "/dictionary";

export type CategoryItem = {
  category: string;
  count: string;
};

export const dictionaryApi = {
  getCategories() {
    return get<CategoryItem[]>(prefix);
  },
};
