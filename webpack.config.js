const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpackMerge = require('webpack-merge');

const modeConfig = env => require(`./build-utils/webpack.${env}`)(env);

module.exports = ({ mode } = { mode: 'production' }) => {
  console.log('Mode ', mode);
  return webpackMerge(
    {
      mode,
      entry: './src/index.js',
      output: {
        path: path.resolve(__dirname, 'dist'),
      },
      module: {
        rules: [
          /* JS and JSX */
          {
            test: /\.(js|jsx)$/,
            exclude: /node_modules/,
            use: {
              loader: 'babel-loader',
            },
          },
          {
            test: /\.html$/,
            use: [{ loader: 'html-loader' }],
          },
        ],
      },
      plugins: [
        new HtmlWebpackPlugin({
          template: './public/index.html',
          filename: './index.html',
        }),
        new webpack.ProgressPlugin(),
      ],
    },
    modeConfig(mode),
  );
};
