import { HomeArticle as THomeArticle } from "../api/homeArticle/HomeArticle";

export const HOMEARTICLE_TITLE_FIELD = "name";

export const HomeArticleTitle = (record: THomeArticle): string => {
  return record.name || record.id;
};
