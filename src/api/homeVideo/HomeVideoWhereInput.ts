import { StringNullableFilter } from "../../util/StringNullableFilter";
import { BooleanNullableFilter } from "../../util/BooleanNullableFilter";
import { StringFilter } from "../../util/StringFilter";

export type HomeVideoWhereInput = {
  description?: StringNullableFilter;
  endThumbnail?: StringNullableFilter;
  favourite?: BooleanNullableFilter;
  id?: StringFilter;
  name?: StringNullableFilter;
  thumbnail?: StringNullableFilter;
  videoUrl?: StringNullableFilter;
};
