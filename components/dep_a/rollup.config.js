import babel from 'rollup-plugin-babel';
import packageInfo from './package.json';
import buildConfigMap from '../../scripts/build_component_config_map';
import path from 'path';

const config = require('../../config');
const configPaths = config.getPaths();
const componentPath = configPaths.appComponents;
const distPath = path.join(componentPath, packageInfo.name, `./${packageInfo.name}.js`);


buildConfigMap('dep_a', path.join(packageInfo.name, `./${packageInfo.name}.js`));

export default {
  input: './index.js',
  plugins: [
    babel()
  ],

  output: {
    format: 'amd',
    name: 'Dep_a',
    file: distPath,
  }
};
