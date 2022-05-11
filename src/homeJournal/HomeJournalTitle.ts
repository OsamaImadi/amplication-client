import { HomeJournal as THomeJournal } from "../api/homeJournal/HomeJournal";

export const HOMEJOURNAL_TITLE_FIELD = "name";

export const HomeJournalTitle = (record: THomeJournal): string => {
  return record.name || record.id;
};
