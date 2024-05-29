const ModuleFederationPlugin = require("webpack/lib/container/ModuleFederationPlugin");
const mf = require("@angular-architects/module-federation/webpack");
const path = require("path");
const share = mf.share;

const sharedMappings = new mf.SharedMappings();
sharedMappings.register(
  path.join(__dirname, '../../tsconfig.base.json'),
  [/* mapped paths to share */]);

module.exports = {
  output: {
    uniqueName: "mfeWebComponents",
    publicPath: "auto"
  },
  optimization: {
    runtimeChunk: false
  },
  resolve: {
    alias: {
      ...sharedMappings.getAliases(),
    }
  },
  experiments: {
    outputModule: true
  },
  plugins: [
    new ModuleFederationPlugin({
        library: { type: "module" },
         name: "mfeWebComponents",
         filename: "remoteEntry.js",
         exposes: {
             './component': 'apps/mfe-web-components/src/app/example/example.component.ts',
         },

        shared: share({
          "@angular/core": { requiredVersion: 'auto' },
          "@angular/common": { requiredVersion: 'auto' },
          "@angular/common/http": { requiredVersion: 'auto' },
          "@angular/router": { requiredVersion: 'auto' },
          ...sharedMappings.getDescriptors()
        })

    }),
    sharedMappings.getPlugin()
  ],
};
