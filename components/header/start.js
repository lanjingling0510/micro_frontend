const rollup = require('rollup');
const path = require('path');
const babel = require('rollup-plugin-babel');
const postcss = require('rollup-plugin-postcss');
const packageInfo = require('./package.json');
const config = require('../../config');
const distPath = config.getComponentPath(packageInfo.name, `./${packageInfo.name}.js`);
const rootPackageInfo = require('../../package.json');
const external = Object.keys(rootPackageInfo.dependencies || {});

const watchOptions = {
  input: './index.js',
  external: external,
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

const watcher = rollup.watch(watchOptions);

watcher.on('event', event => {
  // event.code can be one of:
  //   START        — the watcher is (re)starting
  //   BUNDLE_START — building an individual bundle
  //   BUNDLE_END   — finished building a bundle
  //   END          — finished building all bundles
  //   ERROR        — encountered an error while bundling
  //   FATAL        — encountered an unrecoverable error
  if (event.code === 'BUNDLE_END') {
    console.log('edit file:' + event.input);
  }
});
