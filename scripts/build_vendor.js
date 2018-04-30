
const fs = require('fs-extra');
const path = require('path');
const webpack = require('webpack');
const config = require('../config.js');
const buildConfigMap = require('./build_vendor_config_map.js');
const getWebpackOptions = require('./get_webpack_vendor_config.js');
// 路径
const rootPath = process.cwd();
const configPaths = config.getPaths(rootPath);
const distPath = configPaths.appVendor;
const pkgPath = configPaths.appPackageJson;
const vendorMapPath = configPaths.appVendorMap;

const package = JSON.parse(fs.readFileSync(pkgPath, 'utf8'));
const dependencies = Object.keys(package.dependencies);




/* ------------------------------------
 * 主程序
 * ------------------------------------ */

buildVendor(dependencies);

async function buildVendor(dependencies) {
    const depPaths = dependencies.map(dev => ({
        name: dev,
        path: require.resolve(dev),
    })).reduce((a, b) => {
        a[b.name] = b.path;
        return a;
    }, {});

    const webpackConfig = getWebpackOptions(depPaths, distPath);

    webpack(webpackConfig, (err, stats) => {
        if (err || stats.hasErrors()) {
            console.log(stats.toJson({}, true));
            // 在这里处理错误
          } else {
            const vendorMap = buildConfigMap(stats.toJson());
            fs.writeJson(vendorMapPath, vendorMap, {
              spaces: '\t',
              EOL: '\n'
            });
            console.log('✅ build vendor success.');
          }
    });
}


