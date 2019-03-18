// TODO: Get real data
const testMethods = require('../../test/sampleData/sampleLogsReturn');

const resolvers = {
  Query: {
    logs: () => testMethods.logs(),
    logById: (root, args) => testMethods.logById(args),
    logByType: (root, args) => testMethods.logByType(args),
    logByAuthor: (root, args) => testMethods.logByAuthor(args),
    logByTime: (root, args) => testMethods.logByTime(args)
  }
};

module.exports = resolvers;
