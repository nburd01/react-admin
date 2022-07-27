import { DateInput, Create, SimpleForm, TextInput } from 'react-admin';

export const TagEdit = props => (
    <Create {...props}>
        <SimpleForm>
            <TextInput source="id" />
            <TextInput source="name" />
            <DateInput source="created_at" />
            <DateInput source="updated_at" />
        </SimpleForm>
        </Create>
);
