import * as React from "react";
import {
  List,
  Datagrid,
  ListProps,
  DateField,
  TextField,
  BooleanField,
} from "react-admin";
import Pagination from "../Components/Pagination";

export const HomeEventList = (props: ListProps): React.ReactElement => {
  return (
    <List
      {...props}
      bulkActionButtons={false}
      title={"homeEvents"}
      perPage={50}
      pagination={<Pagination />}
    >
      <Datagrid rowClick="show">
        <DateField source="createdAt" label="Created At" />
        <TextField label="description" source="description" />
        <BooleanField label="favourite" source="favourite" />
        <TextField label="ID" source="id" />
        <TextField label="name" source="name" />
        <TextField label="picture" source="picture" />
        <DateField source="updatedAt" label="Updated At" />
      </Datagrid>
    </List>
  );
};
