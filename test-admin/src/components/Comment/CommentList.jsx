import { Datagrid, DateField, List, ReferenceField, TextField } from 'react-admin';

export const CommentList = () => (
    <List>
        <Datagrid rowClick="edit">
            <TextField source="id" />
            <TextField source="content" />
            <ReferenceField source="commentable_id" reference="commentables"><TextField source="id" /></ReferenceField>
            <TextField source="commentable_type" />
            <DateField source="created_at" />
            <DateField source="updated_at" />
            <ReferenceField source="user_id" reference="users"><TextField source="id" /></ReferenceField>
        </Datagrid>
    </List>
);