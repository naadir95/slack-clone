const { gql } = require('apollo-server');
const typeDefs = gql`

  type Team {
    owner: User!
    members: [User!]!
    channels: Channel
  },

  type Channel {
    id: ID!
    name: String!
    public: Boolean!
    messages: [Message!]!
    users: [User!]!
  },

  type Message {
    id: ID!
    text: String!
    user: User!
    channel: Channel
  },
  type User {
    id: Int!
    username: String
    email: String
    teams: [Team!]!
  },
  type Query {
      getUser(id:Int!):User!
      allUsers:[User]
      team: Team
  }

  type Mutation{
    createUser(username:String!, email:String!, password:String!):User!
    createTeam(name:String):Boolean!
    createChannel(teamId: Int!, name:String, public:Boolean=false ):Boolean
    createMessage(channelId:Int!, text:String!):Boolean!
  }
`;

module.exports = typeDefs