import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";

export type InteractionSectionWhereInput = {
  description?: StringNullableFilter;
  favourite?: StringNullableFilter;
  id?: StringFilter;
  picture?: StringNullableFilter;
  pictureTitle?: StringNullableFilter;
};
