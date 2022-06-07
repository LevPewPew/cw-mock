const { merge } = require("webpack-merge");
const singleSpaDefaults = require("webpack-config-single-spa-react");
const path = require("path");

module.exports = (webpackConfigEnv, argv) => {
  const defaultConfig = singleSpaDefaults({
    orgName: "acme",
    projectName: "home-app",
    webpackConfigEnv,
    argv,
  });

  return merge(defaultConfig, {
    // modify the webpack config however you'd like to by adding to this object
    module: {
      rules: [
        {
          test: /\.(png|svg|jpg|gif)$/,
          use: ["file-loader"],
        },
      ],
    },
    resolve: {
      alias: {
        "@Assets": path.resolve(__dirname, "./src/assets"),
        "@Components": path.resolve(__dirname, "./src/shared-ui/components"),
        "@Stores": path.resolve(__dirname, "./src/shared-ui/stores"),
      },
    },
  });
};
