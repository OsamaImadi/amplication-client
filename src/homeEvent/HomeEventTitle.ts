import { HomeEvent as THomeEvent } from "../api/homeEvent/HomeEvent";

export const HOMEEVENT_TITLE_FIELD = "name";

export const HomeEventTitle = (record: THomeEvent): string => {
  return record.name || record.id;
};
