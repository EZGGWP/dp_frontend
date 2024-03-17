const path = require('path');
const nodeExternals = require('webpack-node-externals');
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
        filename: 'renderer.js',
        path: path.resolve(__dirname, 'dist'),
    },
    plugins: [
        new CssExtract({
            filename: 'resources/style.css',
        }),
    ],
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
