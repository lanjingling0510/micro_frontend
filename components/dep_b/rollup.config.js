import babel from 'rollup-plugin-babel';
import packageInfo from './package.json';
import path from 'path';
import buildConfigMap from '../../scripts/build_component_config_map';
const config = require('../../config');
const configPaths = config.getPaths();
const componentPath = configPaths.appComponents;
const distPath = path.join(componentPath, packageInfo.name, `./${packageInfo.name}.js`);

buildConfigMap('dep_b', path.join(packageInfo.name, `./${packageInfo.name}.js`));

export default {
  input: './index.js',
  plugins: [
    babel()
  ],

  output: {
    format: 'amd',
    name: 'Dep_b',
    file: distPath,
  }
};
