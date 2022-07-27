import { Datagrid, DateField, List, TextField } from 'react-admin';

export const DisciplineList = () => (
    <List>
        <Datagrid rowClick="edit">
            <TextField source="id" />
            <TextField source="name" />
            <TextField source="description" />
            <DateField source="created_at" />
            <DateField source="updated_at" />
            <TextField source="img_url" />
            <TextField source="discipline_img" />
            <TextField source="discipline_root" />
        </Datagrid>
    </List>
);