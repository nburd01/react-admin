import * as React from "react";
import { Admin, Resource, ListGuesser } from 'react-admin';
import jsonServerProvider from 'ra-data-json-server';
import { fetchUtils } from 'ra-core';
import simpleRestProvider from 'ra-data-simple-rest';


const App = () => (
    <Admin dataProvider={simpleRestProvider('http://localhost:3000', fetchUtils.fetchJson, 'X-Total-Count')}>
        <Resource name="posts" list={ListGuesser} />
    </Admin>
);

export default App;

