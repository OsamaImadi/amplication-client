import { HomeVideo as THomeVideo } from "../api/homeVideo/HomeVideo";

export const HOMEVIDEO_TITLE_FIELD = "name";

export const HomeVideoTitle = (record: THomeVideo): string => {
  return record.name || record.id;
};
