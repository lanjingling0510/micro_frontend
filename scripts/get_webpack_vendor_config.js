
const path = require('path');


function getWebpackOptions(entry, dist) {
    return {
        entry: entry,
        output: {
            filename: '[name]_[chunkhash].js',
            path: dist,
            libraryTarget: 'amd'
        },
        resolve: {
            mainFields: ['main']
        },
        mode: 'production'
    };
}

module.exports = getWebpackOptions;



