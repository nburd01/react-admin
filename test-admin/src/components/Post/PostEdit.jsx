import { DateInput, Edit, ReferenceInput, SelectInput, SimpleForm, TextInput } from 'react-admin';

export const PostEdit = () => (
    <Edit>
        <SimpleForm>
            <TextInput source="id" />
            <TextInput source="title" />
            <TextInput source="content" />
            <DateInput source="created_at" />
            <DateInput source="updated_at" />
            <ReferenceInput source="user_id" reference="users"><SelectInput optionText="id" /></ReferenceInput>
            <ReferenceInput source="tag_id" reference="tags"><SelectInput optionText="id" /></ReferenceInput>
            <TextInput source="post_url" />
        </SimpleForm>
    </Edit>
);