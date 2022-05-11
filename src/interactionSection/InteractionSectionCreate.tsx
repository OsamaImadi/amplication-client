import * as React from "react";
import { Create, SimpleForm, CreateProps, TextInput } from "react-admin";

export const InteractionSectionCreate = (
  props: CreateProps
): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <TextInput label="description" multiline source="description" />
        <TextInput label="favourite" source="favourite" />
        <TextInput label="picture" source="picture" />
        <TextInput label="pictureTitle" source="pictureTitle" />
      </SimpleForm>
    </Create>
  );
};
