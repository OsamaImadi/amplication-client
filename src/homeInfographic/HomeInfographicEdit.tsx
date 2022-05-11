import * as React from "react";
import {
  Edit,
  SimpleForm,
  EditProps,
  TextInput,
  BooleanInput,
} from "react-admin";

export const HomeInfographicEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <TextInput label="description" multiline source="description" />
        <BooleanInput label="favourite" source="favourite" />
        <TextInput label="picture" source="picture" />
        <TextInput label="title" source="title" />
      </SimpleForm>
    </Edit>
  );
};
