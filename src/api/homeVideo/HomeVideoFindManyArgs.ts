import { HomeVideoWhereInput } from "./HomeVideoWhereInput";
import { HomeVideoOrderByInput } from "./HomeVideoOrderByInput";

export type HomeVideoFindManyArgs = {
  where?: HomeVideoWhereInput;
  orderBy?: Array<HomeVideoOrderByInput>;
  skip?: number;
  take?: number;
};
