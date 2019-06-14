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
      entry: './src/index.jsx',
      output: { path: path.resolve(__dirname, 'dist') },
      module: {
        rules: [
          /* JS and JSX */
          {
            test: /\.(js|jsx)$/,
            exclude: /node_modules/,
            use: { loader: 'babel-loader' },
          },
          {
            test: /\.(jpe?g|png|gif|svg)$/i,
            use: [{
              loader: 'url-loader',
              options: {
                limit: 10000,
              },
            }],
          },
          {
            test: /\.html$/,
            use: { loader: 'html-loader' },
          },
        ],
      },
      resolve: {
        enforceExtension: false,
        extensions: ['.js', '.jsx'],
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
