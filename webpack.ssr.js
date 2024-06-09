const nodeExternals = require('webpack-node-externals');
const path = require('path');
const CssExtract = require('mini-css-extract-plugin');

module.exports = {
  target: 'node',
  mode: 'development',
  devtool: 'inline-source-map',
  externalsPresets: {
    node: true,
  },
  externals: [nodeExternals()],
  entry: './ssr/index.ts',
  output: {
    filename: '[name].js',
    path: path.resolve(__dirname, 'dist/ssr'),
  },
  plugins: [
    new CssExtract({
      filename: 'style.css',
      chunkFilename: '[name].css',
    }),
  ],
  optimization: {
    splitChunks: {
      cacheGroups: {
        vendors: {
          name: 'vendors',
          test: /node_modules/,
          chunks: 'all',
          enforce: true,
        },
        styles: {
          name: 'styles',
          test: /.css/,
          chunks: 'all',
          enforce: true,
        },
      },
    },
  },
  module: {
    rules: [
      {
        test: /\.(ts|tsx)$/,
        use: 'ts-loader',
        exclude: [
          /node_modules/,
        ],
      },
      {
        test: /\.(js|jsx)$/,
        exclude: [
          /node_modules/,
        ],
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
    extensions: ['.js', '.ts', '.tsx', '.jsx'],
  },
}
