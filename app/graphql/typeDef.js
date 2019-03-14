const { gql } = require('apollo-server-koa');

const typeDefs = gql`
  type LogEntry {
    id: ID
    name: String
    author: String
    time: String
    detail: String
  }
  
  type Query {
    logs: [LogEntry]
  }
`;

module.exports = typeDefs;
