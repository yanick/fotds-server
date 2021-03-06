const Koa = require('koa');
const logger = require('koa-logger');
const bodyParser = require('koa-bodyparser');
const Router = require('koa-oai-router');
const middleware = require('koa-oai-router-middleware');

const app = new Koa();

// *configure router - load api doc from directory api
const router = new Router({
  apiDoc: './api',
      apiExplorerVisible: true,
});

// *configure plugin - identify x-oai-middleware in the api file and load the appropriate middleware from controllers
// *mount plugin to router
router.mount(middleware, './src/controllers');

app.use(logger());
app.use(bodyParser());
// *mount router to app
app.use(router.routes());

//app.use(router.apiExplorer());

app.listen(3000);
