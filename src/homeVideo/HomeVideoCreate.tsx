import * as React from "react";
import {
  Create,
  SimpleForm,
  CreateProps,
  TextInput,
  BooleanInput,
} from "react-admin";

export const HomeVideoCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <TextInput label="description" multiline source="description" />
        <TextInput label="endThumbnail" source="endThumbnail" />
        <BooleanInput label="favourite" source="favourite" />
        <TextInput label="name" source="name" />
        <TextInput label="thumbnail" source="thumbnail" />
        <TextInput label="videoUrl" source="videoUrl" />
      </SimpleForm>
    </Create>
  );
};
