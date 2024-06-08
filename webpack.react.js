const path = require('path');
const nodeExternals = require('webpack-node-externals');
const CssExtract = require('mini-css-extract-plugin');

module.exports = {
  // target: 'node',
  // target: 'web',
  mode: 'development',
  // devtool: 'inline-source-map',
  // externalsPresets: {
  //   node: true,
  // },
  // externals: [nodeExternals()],
  entry: './src/App.tsx',
  output: {
    // filename: '[]client.js',
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, 'dist/client'),
  },
  plugins: [
    new CssExtract({
      filename: '[name].style.css',
    }),
  ],
  optimization: {
    splitChunks: {
      chunks: 'all',
    }
  },
  module: {
    rules: [
      {
        test: /\.(ts|tsx)$/,
        use: 'ts-loader',
        exclude: [/node_modules/],

      },
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: [
              '@babel/preset-env',
              '@babel/preset-react',
            ],
          },
        },
      },
      {
        test: /\.css$/,
        use: [
          CssExtract.loader,
          'css-loader',
        ],
      },
      {
        test: /\.svg$/,
        loader: '@svgr/webpack',
        issuer: /\.(js|ts)x?$/,
      }
    ],
  },
  resolve: {
    extensions: ['.js', '.jsx', '.ts', '.tsx'],
  },
};
