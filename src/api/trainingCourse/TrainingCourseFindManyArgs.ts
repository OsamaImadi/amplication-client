import { TrainingCourseWhereInput } from "./TrainingCourseWhereInput";
import { TrainingCourseOrderByInput } from "./TrainingCourseOrderByInput";

export type TrainingCourseFindManyArgs = {
  where?: TrainingCourseWhereInput;
  orderBy?: Array<TrainingCourseOrderByInput>;
  skip?: number;
  take?: number;
};
