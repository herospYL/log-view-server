const sampleLogs = require('../../test/sampleData/sampleLogs');
const _ = require('lodash');

const logs = () => sampleLogs;

const logById = id => {
  return _.find(sampleLogs, l => {
    return l.logId === id;
  });
};

const logByType = type => {
  return _.filter(sampleLogs, l => {
    return l.type === type;
  });
};

const logByAuthor = author => {
  return _.filter(sampleLogs, l => {
    return l.author === author;
  });
};

const logByTime = time => {
  return _.filter(sampleLogs, l => {
    return l.time === time;
  });
};

module.exports = { logs, logById, logByType, logByAuthor, logByTime };
