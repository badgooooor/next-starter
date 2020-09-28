const path = require("path");
module.exports = {
  stories: ["../components/**/**/*.stories.tsx"],
  webpackFinal: async (config) => {
    config.module.rules = config.module.rules.filter(
      (f) => f.test.toString() !== "/\\.css$/"
    );

    config.module.rules.push({
      test: /\.(ts|tsx)$/,
      use: [
        {
          loader: require.resolve("awesome-typescript-loader"),
          options: {
            configFileName: path.resolve(__dirname, "./tsconfig.json"),
          },
        },
        // Optional
        {
          loader: require.resolve("react-docgen-typescript-loader"),
          options: {
            tsconfigPath: path.resolve(__dirname, "./tsconfig.json"),
          },
        },
      ],
    });

    config.module.rules.push({
      test: /\.(scss|css)$/,
      use: ["style-loader", "css-loader", "sass-loader"],
      include: path.resolve(__dirname, "../"),
    });

    config.resolve.extensions.push(".ts", ".tsx");
    return config;
  },
  addons: ["@storybook/addon-essentials"],
};
