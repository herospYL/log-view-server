let developmentEnv = require('./development');
let productionEnv = require('./production');

module.exports = {
  development: developmentEnv,
  test: productionEnv
}[process.env.NODE_ENV || 'development'];
