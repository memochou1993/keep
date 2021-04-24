module.exports = {
  publicPath: process.env.NODE_ENV === 'production'
    ? '/keep/'
    : '/',
  pluginOptions: {
    quasar: {
      importStrategy: 'kebab',
      rtlSupport: false,
    },
  },
  transpileDependencies: [
    'quasar',
  ],
};
