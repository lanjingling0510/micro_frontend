const { resolve } = require('path');
const { realpathSync } = require('fs');


const config = {
  // 静态路径
  publicPath: 'http://127.0.0.1:8082/',

  vendorPath: 'public/vendor',

  componentPath: 'public/components',

  // 获得常量路径
  getPaths: getPaths,

  // 获得组件路径
  getComponentPath: getComponentPath
}


function getComponentPath(name, filename) {
  const appDirectory = realpathSync(__dirname);
  return resolve(appDirectory, 'public/components', name, filename);
}


function getPaths() {
  const appDirectory = realpathSync(__dirname);
  function resolveApp(relativePath) {
    return resolve(appDirectory, relativePath);
  }

  return {
    appVendorMap: resolveApp('map/vendor.json'),
    appComponentMap: resolveApp('map/component.json'),
    appVendor: resolveApp('public/vendor'),
    appComponents: resolveApp('public/components'),
    appPublic: resolveApp('public'),
    appPackageJson: resolveApp('package.json'),
    appNodeModules: resolveApp('node_modules'),
    appDirectory,
  };
}


module.exports = config;
