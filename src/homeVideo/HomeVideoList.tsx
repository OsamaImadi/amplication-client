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

export const HomeVideoList = (props: ListProps): React.ReactElement => {
  return (
    <List
      {...props}
      bulkActionButtons={false}
      title={"homeVideos"}
      perPage={50}
      pagination={<Pagination />}
    >
      <Datagrid rowClick="show">
        <DateField source="createdAt" label="Created At" />
        <TextField label="description" source="description" />
        <TextField label="endThumbnail" source="endThumbnail" />
        <BooleanField label="favourite" source="favourite" />
        <TextField label="ID" source="id" />
        <TextField label="name" source="name" />
        <TextField label="thumbnail" source="thumbnail" />
        <DateField source="updatedAt" label="Updated At" />
        <TextField label="videoUrl" source="videoUrl" />
      </Datagrid>
    </List>
  );
};
