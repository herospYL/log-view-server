// TODO: Get real data
const testMethods = require('../../test/sampleData/sampleLogsReturn');

const resolvers = {
  Query: {
    logs: () => testMethods.logs(),
    logById: id => testMethods.logById(id),
    logByType: type => testMethods.logByType(type),
    logByAuthor: author => testMethods.logByAuthor(author),
    logByTime: time => testMethods.logByTime(time)
  }
};

module.exports = resolvers;
