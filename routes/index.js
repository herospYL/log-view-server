const Router = require('koa-router');

const router = new Router();

router.get('/', (ctx, next) => {
  ctx.body = 'Log View Server';
  return next();
});

module.exports = router;
