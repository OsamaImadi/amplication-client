import { SortOrder } from "../../util/SortOrder";

export type HomeArticleOrderByInput = {
  createdAt?: SortOrder;
  description?: SortOrder;
  favourite?: SortOrder;
  id?: SortOrder;
  name?: SortOrder;
  picture?: SortOrder;
  updatedAt?: SortOrder;
};
