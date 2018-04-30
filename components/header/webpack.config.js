
const config = require('../../config');
const configPaths = config.getPaths('../..');
const componentPath = configPaths.appComponents;
const distPath = path.join(componentPath, packageInfo.name, `./${packageInfo.name}.js`);

module.exports = {
    entry: './index.js',
    output: {
        filename: '[name]_[chunkhash].js',
        path: distPath,
        libraryTarget: 'amd'
    },

    module: {
        rules: [
            {
                test: /\.jsx?$/,
                loader: 'babel-loader'
            }
        ]
    },

    resolve: {
        mainFields: ['main']
    },
    mode: 'production'
}