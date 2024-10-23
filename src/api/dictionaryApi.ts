import { get, PaginateData, patch, post, QueryParams } from "./request";

const prefix = "/dictionary";

export type DictionaryItem = {
  id: number;
  category: string;
  description: null | string;
  enable: boolean;
  key: string;
  value: string;
};

export type DictionaryCreateParams = {
  category: string;
  key: string;
  value: string;
  enable: boolean;
  description?: string;
  order?: number;
};

export type DictionaryUpdateParams = Partial<DictionaryCreateParams>;

export const dictionaryApi = {
  query(params: QueryParams) {
    return get<PaginateData<DictionaryItem>>(prefix, { params });
  },
  create(params: DictionaryCreateParams) {
    return post<boolean>(prefix, params);
  },
  update(params: DictionaryUpdateParams) {
    return patch<boolean>(prefix, params);
  },
};
