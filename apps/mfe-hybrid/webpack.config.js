const {
  shareAll,
  withModuleFederationPlugin
} = require('@angular-architects/module-federation/webpack');

module.exports = withModuleFederationPlugin({
  name: 'mfe-hybrid',
  filename: 'remoteEntry.js',
  exposes: {
    './web-components': './apps/mfe-hybrid/src/bootstrap.ts',
    './module-federation': './apps/mfe-hybrid/src/app/example/example.component.ts',
  },
  shared: {
    ...shareAll({
      requiredVersion: 'auto',
    }),
  },
});
