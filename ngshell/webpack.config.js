const ModuleFederationPlugin = require("webpack/lib/container/ModuleFederationPlugin");
const mf = require("@angular-architects/module-federation/webpack");
const path = require("path");
const share = mf.share;

const sharedMappings = new mf.SharedMappings();
sharedMappings.register(
  path.join(__dirname, 'tsconfig.json'),
  [/* mapped paths to share */]);

module.exports = {
  output: {
    uniqueName: "ngshell",
    publicPath: "auto"
  },
  optimization: {
    runtimeChunk: false
  },   
  resolve: {
    alias: {
      ...sharedMappings.getAliases(),
    },
    extensions: ['.ts', '.js'],
  },
  experiments: {
    outputModule: true
  },
  plugins: [
    new ModuleFederationPlugin({
        library: { type: "module" },

        // For remotes (please adjust)
        // name: "ngshell",
        // filename: "remoteEntry.js",
        // exposes: {
        //     './Component': './/src/app/app.component.ts',
        // },        
        
        // For hosts (please adjust)
        // remotes: {
        //     "mfe1": "http://localhost:3000/remoteEntry.js",

        // },

        remotes: {
          'MFERemoteApp': "http://localhost:5000/remoteEntry.js",
          remoteType:'var',
       },
        shared: share({
          "@angular/core": { singleton: true, strictVersion: true, requiredVersion : '>=15.1.0 <^17.0.0' }, 
          "@angular/common": { singleton: true, strictVersion: true, requiredVersion : '>=15.1.0 <^17.0.0' }, 
          "@angular/common/http": { singleton: true, strictVersion: true, requiredVersion : '>=15.1.0 <^17.0.0' }, 
          "@angular/router": { singleton: true, strictVersion: true, requiredVersion : '>=15.1.0 <^17.0.0' },

          ...sharedMappings.getDescriptors()
        })
        
    }),
    sharedMappings.getPlugin()
  ],
};
