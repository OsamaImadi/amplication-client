import { HomeInfographic as THomeInfographic } from "../api/homeInfographic/HomeInfographic";

export const HOMEINFOGRAPHIC_TITLE_FIELD = "title";

export const HomeInfographicTitle = (record: THomeInfographic): string => {
  return record.title || record.id;
};
