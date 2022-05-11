import { SortOrder } from "../../util/SortOrder";

export type TrainingCourseOrderByInput = {
  createdAt?: SortOrder;
  description?: SortOrder;
  favourite?: SortOrder;
  id?: SortOrder;
  picture?: SortOrder;
  pictureTitle?: SortOrder;
  trainerName?: SortOrder;
  updatedAt?: SortOrder;
};
