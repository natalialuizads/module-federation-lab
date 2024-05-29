const {
  shareAll,
  withModuleFederationPlugin
} = require('@angular-architects/module-federation/webpack');

module.exports = withModuleFederationPlugin({
  name: 'mfe-module-federation',
  exposes: {
   './Component': './apps/mfe-module-federation/src/app/app.component.ts',
  },
  shared: {
    ...shareAll({
      requiredVersion: 'auto',
    }),
  },
});
