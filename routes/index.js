const Router = require('koa-router');

const router = new Router();

router.get('/', (ctx, next) => {
  ctx.body = 'Hello World Koa!';
});

router.get('/foo', (ctx, next) => {
  ctx.body = 'Hello World Foo!';
});

module.exports = router;
