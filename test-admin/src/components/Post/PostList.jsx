import { Datagrid, DateField, List, ReferenceField, TextField } from 'react-admin';

export const PostList = () => (
    <List>
        <Datagrid rowClick="edit">
            <TextField source="id" />
            <TextField source="title" />
            <TextField source="content" />
            <DateField source="created_at" />
            <DateField source="updated_at" />
            <ReferenceField source="user_id" reference="users"><TextField source="id" /></ReferenceField>
            <ReferenceField source="tag_id" reference="tags"><TextField source="id" /></ReferenceField>
            <TextField source="post_url" />
        </Datagrid>
    </List>
);