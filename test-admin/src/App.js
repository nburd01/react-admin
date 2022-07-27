import React from "react";
import { Admin, Resource, ListGuesser} from "react-admin";
import jsonServerProvider from "ra-data-json-server";
import { PostEdit } from "./components/PostEdit";



const App = () => (
  <Admin
    dataProvider={jsonServerProvider("http://localhost:3000")}
  >
    {/* <Resource name="posts" list={ListGuesser} /> */}
    <Resource name="posts" list={ListGuesser} edit={PostEdit} />
    <Resource name="users" list={ListGuesser} />
    <Resource name="disciplines" list={ListGuesser} />
    <Resource name="tags" list={ListGuesser} />
    <Resource name="scores" list={ListGuesser} />
    <Resource name="comments" list={ListGuesser} />
  </Admin>
);

export default App;