import babel from 'rollup-plugin-babel';
import packageInfo from './package.json';
import postcss from 'rollup-plugin-postcss';
import buildConfigMap from '../../scripts/build_component_config_map';
import path from 'path';
const config = require('../../config');
const configPaths = config.getPaths();
const componentPath = configPaths.appComponents;

const distPath = path.join(
  componentPath,
  packageInfo.name,
  `./${packageInfo.name}.js`
);

buildConfigMap('header', path.join(packageInfo.name, `./${packageInfo.name}.js`));


export default {
  input: './index.js',
  plugins: [
    postcss({
      plugins: [
        require('postcss-import')(),
        require('postcss-url')(),
        require('postcss-cssnext')(),
        require('postcss-mixins'),
        require('postcss-nested')()
      ],
      extensions: ['.css']
    }),
    babel()
  ],

  output: {
    format: 'amd',
    name: 'Header',
    file: distPath
  }
};
