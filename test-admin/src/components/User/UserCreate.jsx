import { DateInput, Create, SimpleForm, TextInput } from 'react-admin';

export const UserEdit = props => (
    <Create {...props}>
        <SimpleForm>
            <TextInput source="id" />
            <DateInput source="first_name" />
            <DateInput source="last_name" />
            <TextInput source="email" />
            <DateInput source="created_at" />
            <DateInput source="updated_at" />
            <TextInput source="role" />
        </SimpleForm>
    </Create>

);


