const fs = require('fs-extra');
const config = require('../config');
const url = require('url');


function buildConfigMap({entrypoints}) {
  const map = {};
  for (const name in entrypoints) {
    if (entrypoints.hasOwnProperty(name)) {
      const value = entrypoints[name];
      map[name] = url.resolve(config.publicPath, config.vendorPath + '/' + value.assets[0])
    }
  }

  return map;
}

module.exports = buildConfigMap;

