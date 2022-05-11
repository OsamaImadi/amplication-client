import { HomeJournalWhereInput } from "./HomeJournalWhereInput";
import { HomeJournalOrderByInput } from "./HomeJournalOrderByInput";

export type HomeJournalFindManyArgs = {
  where?: HomeJournalWhereInput;
  orderBy?: Array<HomeJournalOrderByInput>;
  skip?: number;
  take?: number;
};
