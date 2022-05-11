import { HomeEventWhereInput } from "./HomeEventWhereInput";
import { HomeEventOrderByInput } from "./HomeEventOrderByInput";

export type HomeEventFindManyArgs = {
  where?: HomeEventWhereInput;
  orderBy?: Array<HomeEventOrderByInput>;
  skip?: number;
  take?: number;
};
