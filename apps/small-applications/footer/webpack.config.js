const {
  shareAll,
  withModuleFederationPlugin
} = require('@angular-architects/module-federation/webpack');

module.exports = withModuleFederationPlugin({
  name: 'mfe-footer',
  filename: 'remoteEntry.js',
  exposes: {
    './web-components': './apps/small-applications/footer/src/bootstrap.ts',
    './module-federation': './apps/small-applications/footer/src/app/example/example.component.ts',
  },
  shared: {
    ...shareAll({
      requiredVersion: 'auto',
      singleton: true
    }),
  },
});
