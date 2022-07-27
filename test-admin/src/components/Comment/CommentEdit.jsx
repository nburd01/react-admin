import { DateInput, Edit, ReferenceInput, SelectInput, SimpleForm, TextInput } from 'react-admin';

export const CommentEdit = () => (
    <Edit>
        <SimpleForm>
            <TextInput source="id" />
            <TextInput source="content" />
            {/* <ReferenceInput source="commentable_id" reference="commentables"><SelectInput optionText="id" /></ReferenceInput> */}
            <TextInput source="commentable_type" />
            <DateInput source="created_at" />
            <DateInput source="updated_at" />
            <ReferenceInput source="user_id" reference="users"><SelectInput optionText="id" /></ReferenceInput>
        </SimpleForm>
    </Edit>
);