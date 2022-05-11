import { SortOrder } from "../../util/SortOrder";

export type HomeVideoOrderByInput = {
  createdAt?: SortOrder;
  description?: SortOrder;
  endThumbnail?: SortOrder;
  favourite?: SortOrder;
  id?: SortOrder;
  name?: SortOrder;
  thumbnail?: SortOrder;
  updatedAt?: SortOrder;
  videoUrl?: SortOrder;
};
