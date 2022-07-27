import { Datagrid, DateField, EmailField, List, TextField } from 'react-admin';

export const UserList = () => (
    <List>
        <Datagrid rowClick="edit">
            <TextField source="id" />
            <DateField source="first_name" />
            <DateField source="last_name" />
            <EmailField source="email" />
            <DateField source="created_at" />
            <DateField source="updated_at" />
            <TextField source="role" />
        </Datagrid>
    </List>
);