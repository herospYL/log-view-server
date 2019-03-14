const testData = require('../../test/sampleData');

const resolvers = {
  Query: {
    logs: () => testData
  }
};

module.exports = resolvers;
