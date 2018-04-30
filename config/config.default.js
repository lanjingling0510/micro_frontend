'use strict';
const path = require('path');
const glob = require('./global.js');

module.exports = appInfo => {
  const config = {};

  // should change to your own
  config.keys = appInfo.name + '_1500507436799_1809';

  // add your config here


  config.static = {
    prefix: '/public/',
    dir: path.join(appInfo.baseDir, '/public')
  };

  config.GLOBAL = glob;


  config.STATIC_HOST = 'http:www.cyt-rain.cn/';

  config.view = {
    cache: true,
    defaultViewEngine: 'nunjucks',
    mapping: {
      '.tpl': 'nunjucks',
    },
  };

  return config;
};

