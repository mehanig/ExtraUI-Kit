const { createConfig, babel, postcss } = require('webpack-blocks');
const typescript = require('@webpack-blocks/typescript')
const path = require('path');

const propsParser = function (filePath, source, resolver, handlers) {
  return require('react-docgen-typescript').withCustomConfig('./tsconfig.json');
}

module.exports = {
  showSidebar: true,
  theme: {
    color: {
      baseBackground: '#303030',
      sidebarBackground: '#404040',
      codeBackground: '#a1a1a1',
      type: '#909090',
      base: '#666',
      light: '#999',
      lightest: '#ccc',
    },
    fontFamily: {
      base: "Helvetica Neue"
    }
  },
  propsParser: require('react-docgen-typescript').withCustomConfig('./tsconfig.json').parse,
  components: 'src/**/*.tsx',
  skipComponentsWithoutExample: true,
  webpackConfig: createConfig([
    babel(),
    postcss(),
    typescript()
  ])
};