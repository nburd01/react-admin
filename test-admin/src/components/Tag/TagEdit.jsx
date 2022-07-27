import { DateInput, Edit, SimpleForm, TextInput } from 'react-admin';

export const TagEdit = () => (
    <Edit>
        <SimpleForm>
            <TextInput source="id" />
            <TextInput source="name" />
            <DateInput source="created_at" />
            <DateInput source="updated_at" />
        </SimpleForm>
    </Edit>
);