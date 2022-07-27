import React from "react";
import { Admin, Resource, ListGuesser, EditGuesser} from "react-admin";
import jsonServerProvider from "ra-data-json-server";
import { PostEdit } from "./components/Post/PostEdit";
import { PostList } from "./components/Post/PostList";
import { PostCreate } from "./components/Post/PostCreate";
import { UserList } from "./components/User/UserList";


const App = () => (
  <Admin
    dataProvider={jsonServerProvider("http://localhost:3000")}
  >
    <Resource name="posts" list={PostList} edit={PostEdit} create={PostCreate}  />
    <Resource name="users" list={UserList} edit={EditGuesser} create={PostCreate}  />
    <Resource name="disciplines" list={ListGuesser} edit={EditGuesser} create={PostCreate}  />
    <Resource name="tags" list={ListGuesser} edit={EditGuesser} create={PostCreate}  />
    <Resource name="scores" list={ListGuesser} edit={EditGuesser} create={PostCreate}  />
    <Resource name="comments" list={ListGuesser} edit={EditGuesser} create={PostCreate}  />
  </Admin>
);

export default App;