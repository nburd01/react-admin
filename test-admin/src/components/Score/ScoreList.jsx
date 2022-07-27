import { Datagrid, DateField, List, NumberField, TextField } from 'react-admin';

export const ScoreList = () => (
    <List>
        <Datagrid rowClick="edit">
            <TextField source="id" />
            <TextField source="locaux" />
            <NumberField source="score_locaux" />
            <TextField source="visiteurs" />
            <NumberField source="score_visiteurs" />
            <DateField source="created_at" />
            <DateField source="updated_at" />
            <TextField source="division" />
            <TextField source="equipe" />
            <TextField source="categorie" />
        </Datagrid>
    </List>
);