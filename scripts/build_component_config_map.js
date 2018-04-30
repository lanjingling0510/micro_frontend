const path = require('path');
const fs = require('fs-extra');
const config = require('../../config.js');
const configPaths = config.getPaths();
const componentMapPath = configPaths.appComponentMap;


async function buildConfigMap(name, filePath) {
  const map = await fs.readJson(componentMapPath) || {};
  map[name] = path.join(config.componentPath, path.dirname(filePath), path.basename(filePath, '.js'));
  await fs.writeJson(componentMapPath, map, {
    spaces: '\t',
    EOL: '\n'
  });
}

export default buildConfigMap;
