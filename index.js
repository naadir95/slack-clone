const { ApolloServer, gql } = require('apollo-server');
const typeDefs = require('./schema');


const resolvers = require('./resolvers')

const books = [
    {
      title: 'Harry Potter and the Chamber of Secrets',
      author: 'J.K. Rowling',
    },
    {
      title: 'Jurassic Park',
      author: 'Michael Crichton',
    },
  ];


  // The ApolloServer constructor requires two parameters: your schema
// definition and your set of resolvers.
const server = new ApolloServer({ typeDefs, resolvers });

// The `listen` method launches a web server.
server.listen().then(({ url }) => {
  console.log(`🚀  Server ready at ${url}`);
});

// const graphqlTools = require('graphql-tools');

// const express = require('express');
// const bodyParser =require('body-parser');
// const graphqlExpress = require('apollo-server-express');
// const typeDefs = require('./schema');
// const resolvers = require('./resolvers');

// const PORT = 8080;

// const app = express()

// const schema = graphqlTools.makeExecutableSchema({
//     typeDefs,
//     resolvers
// })

// app.use('/graphql',bodyParser.json(), graphqlExpress({ schema: schema }))

// app.listen(PORT)