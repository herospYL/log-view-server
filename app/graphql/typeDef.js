const { gql } = require('apollo-server-koa');

const typeDefs = gql`
  enum EventType {
    POST
    PUT
    DELETE
    GET
  }
  
  type LogEntry {
    logId: ID!
    instanceId: ID!
    name: String!
    type: EventType!
    author: String!
    time: String!
    detail: String
  }
  
  type Query {
    logs: [LogEntry]!
    logById(id: ID!): LogEntry
    logByType(type: EventType!): [LogEntry]!
    logByAuthor(author: String!): [LogEntry]!
    logByTime(start: String, end: String): [LogEntry]!
  }
`;

// TODO: Customize Date type
module.exports = typeDefs;
