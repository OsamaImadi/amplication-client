import { TrainingCourse as TTrainingCourse } from "../api/trainingCourse/TrainingCourse";

export const TRAININGCOURSE_TITLE_FIELD = "trainerName";

export const TrainingCourseTitle = (record: TTrainingCourse): string => {
  return record.trainerName || record.id;
};
