const Koa = require('koa');
const { ApolloServer } = require('apollo-server-koa');
const logger = require('koa-logger');
// const views = require('koa-views');
const parser = require('koa-bodyparser');
const staticFile = require('koa-static');

const typeDefs = require('./app/graphql/typeDef');
const resolvers = require('./app/graphql/resolver');

const app = new Koa();
const server = new ApolloServer({
  typeDefs,
  resolvers
});

//  Notice that the app is immediately constructed after imported
const index = require('./routes/index');

// global middleware
// app.use(views('views', {
//   root: `${__dirname}/views`,
//   default: 'jade'
// }));
app.use(parser());
app.use(logger());
app.use(staticFile((`${__dirname}/public`)));

app.use(async(ctx, next) => {
  const start = Date.now();
  await next();
  const ms = Date.now() - start;
  ctx.set('X-Response-Time', `${ms}ms`);
});

// routes definition
app.use(index.routes()).use(index.allowedMethods());

// error-handling
app.on('error', (err, ctx) => {
  console.error('server error', err, ctx);
});

server.applyMiddleware({ app });

module.exports = app;
