import { get, PaginateData } from "./request";

const prefix = "/dictionary";

export type DictionaryItem = {
  id: number;
  category: string;
  description: null | string;
  enable: boolean;
  key: string;
  value: string;
};

export const dictionaryApi = {
  query() {
    return get<PaginateData<DictionaryItem>>(prefix);
  },
};
