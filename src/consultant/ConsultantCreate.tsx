import * as React from "react";
import { Create, SimpleForm, CreateProps, TextInput } from "react-admin";

export const ConsultantCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <TextInput label="email" source="email" type="email" />
        <TextInput label="first name" source="firstName" />
        <TextInput label="last name" source="lastName" />
        <TextInput label="Password" source="password" />
      </SimpleForm>
    </Create>
  );
};
