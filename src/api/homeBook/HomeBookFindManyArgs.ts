import { HomeBookWhereInput } from "./HomeBookWhereInput";
import { HomeBookOrderByInput } from "./HomeBookOrderByInput";

export type HomeBookFindManyArgs = {
  where?: HomeBookWhereInput;
  orderBy?: Array<HomeBookOrderByInput>;
  skip?: number;
  take?: number;
};
