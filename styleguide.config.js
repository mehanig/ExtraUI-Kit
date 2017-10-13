const { createConfig, babel, postcss } = require('webpack-blocks');
const typescript = require('@webpack-blocks/typescript')

const propsParser = function (filePath, source, resolver, handlers) {
    return require('react-docgen-typescript').withCustomConfig('./tsconfig.json');
}

module.exports = {
    propsParser: require('react-docgen-typescript').withCustomConfig('./tsconfig.json').parse,
    components: 'src/**/*.tsx',
    webpackConfig: createConfig([
        babel(),
        postcss(),
        typescript()
    ])
};