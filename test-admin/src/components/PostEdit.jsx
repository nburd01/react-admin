import * as React from "react";
import {
    // List,
    // Datagrid,
    // TextField,
    // ReferenceField,
    // EditButton,
    Edit,
    SimpleForm,
    ReferenceInput,
    SelectInput,
    TextInput,
} from 'react-admin';

export const PostEdit = () => (
    <Edit>
        <SimpleForm>
            <ReferenceInput source="userId" reference="users">
                <SelectInput optionText="id" />
            </ReferenceInput>
            <TextInput source="id" />
            <TextInput source="title" />
            <TextInput source="content" />
            <TextInput source="user" />
            <TextInput source="tag" />
            <TextInput source="post url " />
        </SimpleForm>
    </Edit>
);