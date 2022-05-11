import * as React from "react";
import { Edit, SimpleForm, EditProps, TextInput } from "react-admin";

export const InteractionSectionEdit = (
  props: EditProps
): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <TextInput label="description" multiline source="description" />
        <TextInput label="favourite" source="favourite" />
        <TextInput label="picture" source="picture" />
        <TextInput label="pictureTitle" source="pictureTitle" />
      </SimpleForm>
    </Edit>
  );
};
