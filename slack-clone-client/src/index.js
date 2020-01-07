


import ApolloClient,{ gql } from "apollo-boost";

import React from 'react';
import { render } from 'react-dom';

import { ApolloProvider, useQuery, useMutation } from '@apollo/react-hooks';

import Register from './routes/Register'
import  Nav from './routes/Nav'
import { BrowserRouter, Route, Switch } from "react-router-dom";

import 'semantic-ui-css/semantic.min.css';

const client = new ApolloClient({
  uri: 'http://localhost:4000/',
});

client
  .query({
    query: gql`
      {
        allUsers{
        id
        email
        }
      }
    `
  })
  .then(result => console.log(result));



const USERS = gql`
        {
          allUsers{
          id
          email
          }
        }
      `;

const CREATE_USER = gql`
mutation{
  createUser(username:"test1", email:"test@test.com1", password:"test1"){
    id
    username
    email
  }
}
    `;

function Users() {
  const { loading, error, data } = useQuery(USERS);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :(</p>;

  return data.allUsers.map(({ id, email }) => (
    <div key={id}>
      <p>
        {id}: {email}
      </p>
    </div>
  ));

}
function CreateUser() {
  const { loading, error, data } =  useMutation(CREATE_USER);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :(</p>;
    return null
}

const App = () => (
  <ApolloProvider client={client}>
  <BrowserRouter>

    <div>
  <Switch>
     <Route path = "/register" exact component = {Register}/>
     <Route path = "/" exact component = {Users}/>
  </Switch>
    </div>

  </BrowserRouter>
  </ApolloProvider>
);

render(<App />, document.getElementById('root'));
