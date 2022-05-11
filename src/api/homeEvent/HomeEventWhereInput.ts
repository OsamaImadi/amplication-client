import { StringNullableFilter } from "../../util/StringNullableFilter";
import { BooleanNullableFilter } from "../../util/BooleanNullableFilter";
import { StringFilter } from "../../util/StringFilter";

export type HomeEventWhereInput = {
  description?: StringNullableFilter;
  favourite?: BooleanNullableFilter;
  id?: StringFilter;
  name?: StringNullableFilter;
  picture?: StringNullableFilter;
};
