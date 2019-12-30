const { ApolloServer, gql } = require('apollo-server');
const cors = require('cors')
const express = require('express')

const typeDefs = require('./schema');

const resolvers = require('./resolvers')

const models = require('./models')

// The ApolloServer constructor requires two parameters: your schema
// definition and your set of resolvers.
const server = new ApolloServer({ typeDefs, resolvers , context:{models, user:{id:1}}});
models.sequelize.sync().then(x=>{
    server.listen().then(({ url }) => {
      console.log(`🚀  Server ready at ${url}`);
    });

});

const app = express();
app.use(cors('*'))
