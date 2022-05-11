import { StringNullableFilter } from "../../util/StringNullableFilter";
import { BooleanNullableFilter } from "../../util/BooleanNullableFilter";
import { StringFilter } from "../../util/StringFilter";

export type HomeInfographicWhereInput = {
  description?: StringNullableFilter;
  favourite?: BooleanNullableFilter;
  id?: StringFilter;
  picture?: StringNullableFilter;
  title?: StringNullableFilter;
};
