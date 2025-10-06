const {
  shareAll,
  withModuleFederationPlugin
} = require('@angular-architects/module-federation/webpack');
const webpack = require('webpack');

function getClientEnvironment() {
  const envVars = {
    API_URL: process.env.API_URL
  };

  return {
    'process.env': JSON.stringify(envVars),
  };
}

const moduleFederationConfig = withModuleFederationPlugin({
  name: 'mfe-card',
  filename: 'remoteEntry.js',
  exposes: {
    './web-components': './apps/small-applications/card/src/bootstrap.ts',
    './module-federation': './apps/small-applications/card/src/app/example/example.component.ts',
  },
  shared: {
    ...shareAll({
      requiredVersion: 'auto'
    }),
  },
});

moduleFederationConfig.plugins.push(new webpack.DefinePlugin(getClientEnvironment()));

module.exports = moduleFederationConfig;
