const path = require('path');

module.exports = appInfo => {
  const config = {};

  config.development = {
    watchDirs: [
      'map'
    ]
  }

  config.STATIC_HOST = 'http://127.0.0.1:7001';

  config.view = {
    cache: false
  };

  return config;
};
