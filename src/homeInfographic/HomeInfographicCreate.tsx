import * as React from "react";
import {
  Create,
  SimpleForm,
  CreateProps,
  TextInput,
  BooleanInput,
} from "react-admin";

export const HomeInfographicCreate = (
  props: CreateProps
): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <TextInput label="description" multiline source="description" />
        <BooleanInput label="favourite" source="favourite" />
        <TextInput label="picture" source="picture" />
        <TextInput label="title" source="title" />
      </SimpleForm>
    </Create>
  );
};
