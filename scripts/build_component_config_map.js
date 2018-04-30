import { isJSXClosingElement } from '@babel/types';

const url = require('url');
const fs = require('fs-extra');
const config = require('../../config.js');
const configPaths = config.getPaths('../..');
const componentMapPath = configPaths.appComponentMap;
const publicPath = config.publicPath;



async function buildConfigMap(name, filePath) {
  const map = await fs.readJson(componentMapPath) || {};
  map[name] = url.resolve(publicPath, config.componentPath + '/' + filePath);
  await fs.writeJson(componentMapPath, map, {
    spaces: '\t',
    EOL: '\n'
  });
}

export default buildConfigMap;
