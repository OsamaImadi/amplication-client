import * as React from "react";
import {
  Edit,
  SimpleForm,
  EditProps,
  TextInput,
  BooleanInput,
} from "react-admin";

export const HomeVideoEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <TextInput label="description" multiline source="description" />
        <TextInput label="endThumbnail" source="endThumbnail" />
        <BooleanInput label="favourite" source="favourite" />
        <TextInput label="name" source="name" />
        <TextInput label="thumbnail" source="thumbnail" />
        <TextInput label="videoUrl" source="videoUrl" />
      </SimpleForm>
    </Edit>
  );
};
