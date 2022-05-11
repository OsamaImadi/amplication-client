import { HomeBook as THomeBook } from "../api/homeBook/HomeBook";

export const HOMEBOOK_TITLE_FIELD = "name";

export const HomeBookTitle = (record: THomeBook): string => {
  return record.name || record.id;
};
