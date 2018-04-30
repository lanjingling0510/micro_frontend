'use strict';

module.exports = app => {
  class HomeController extends app.Controller {
    * index(ctx) {
      console.log('请求index....');
      yield ctx.render('index.tpl');
    }
  }
  return HomeController;
};
