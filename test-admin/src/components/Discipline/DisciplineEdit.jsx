import { DateInput, Edit, SimpleForm, TextInput } from 'react-admin';

export const DisciplineEdit = () => (
    <Edit>
        <SimpleForm>
            <TextInput source="id" />
            <TextInput source="name" />
            <TextInput source="description" />
            <DateInput source="created_at" />
            <DateInput source="updated_at" />
            <TextInput source="img_url" />
            <TextInput source="discipline_img" />
            <TextInput source="discipline_root" />
        </SimpleForm>
    </Edit>
);