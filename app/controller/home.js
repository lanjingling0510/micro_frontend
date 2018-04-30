'use strict';

module.exports = app => {
  class HomeController extends app.Controller {
    * index(ctx) {
      yield ctx.render('index.tpl', {
        configPaths: app.config.GLOBAL,
        staticHost: app.config.STATIC_HOST
      });
    }
  }
  return HomeController;
};
