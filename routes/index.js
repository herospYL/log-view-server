const Router = require('koa-router');

const router = new Router();

router.get('/', (ctx, next) => {
  ctx.body = 'Hello World Koa!';
  return next();
});

router.get('/foo', (ctx, next) => {
  ctx.body = 'Hello World Foo!';
  return next();
});

module.exports = router;
