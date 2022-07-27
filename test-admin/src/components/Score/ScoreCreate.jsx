import { DateInput, Create, NumberInput, SimpleForm, TextInput } from 'react-admin';

export const ScoreEdit = props => (
    <Create {...props}>
        <SimpleForm>
            <TextInput source="id" />
            <TextInput source="locaux" />
            <NumberInput source="score_locaux" />
            <TextInput source="visiteurs" />
            <NumberInput source="score_visiteurs" />
            <DateInput source="created_at" />
            <DateInput source="updated_at" />
            <TextInput source="division" />
            <TextInput source="equipe" />
            <TextInput source="categorie" />
        </SimpleForm>
    </Create>
);

