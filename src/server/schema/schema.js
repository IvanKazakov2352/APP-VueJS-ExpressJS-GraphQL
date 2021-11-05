const { buildSchema } = require("graphql");

module.exports = buildSchema(`
  type User {
    id: ID!
    name: String!
    email: String!
    age: Int!
  }

  type ID {
    id: String!
  }

  type Query {
    getUsers: [User!]!
  }

  input UserInput {
    id: ID!
    name: String!
    email: String!
    age: Int!
  }

  type Mutation {
    createUser(user: UserInput!): User!
    deleteUser(id: String): User
  }
`);
