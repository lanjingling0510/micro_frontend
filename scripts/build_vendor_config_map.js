const fs = require('fs-extra');
const config = require('../config');
const path = require('path');


function buildConfigMap({entrypoints}) {
  const map = {};
  for (const name in entrypoints) {
    if (entrypoints.hasOwnProperty(name)) {
      const value = entrypoints[name];
      map[name] = path.join(config.vendorPath, path.basename(value.assets[0], '.js'))
    }
  }

  return map;
}

module.exports = buildConfigMap;

