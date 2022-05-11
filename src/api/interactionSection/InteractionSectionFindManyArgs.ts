import { InteractionSectionWhereInput } from "./InteractionSectionWhereInput";
import { InteractionSectionOrderByInput } from "./InteractionSectionOrderByInput";

export type InteractionSectionFindManyArgs = {
  where?: InteractionSectionWhereInput;
  orderBy?: Array<InteractionSectionOrderByInput>;
  skip?: number;
  take?: number;
};
