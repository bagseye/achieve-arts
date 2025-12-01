const webpack = require('webpack');
const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

const config = {
    entry: {
        main: [
            './src/js/main.js',
            './src/scss/main.scss'
        ],
        editor: [
            './src/scss/editor.scss'
        ],
        archive: [
            './src/scss/archive.scss'
        ],
        single: [
            './src/scss/single.scss'
        ],
        error: [
            './src/scss/error.scss'
        ],
        loadmore: [
            './src/js/loadmore.js'
        ],
    },
    output: {
        path: path.resolve(__dirname, 'assets'),
        filename: '[name].min.js',
        chunkFilename: '[name].chunk.js',
        clean: true,
    },
    optimization: {
        splitChunks: {
            cacheGroups: {
                commons: {
                    name: 'commons',
                    chunks: 'initial',
                    minChunks: 2,
                },
                defaultVendors: {
                    test: /[\\/]node_modules[\\/]/,
                    name: 'vendors',
                    chunks: 'all',
                },
            },
        },
    },
    devtool: "source-map",
    module: {
        rules: [
            {
                test: /\.js$/,
                use: 'babel-loader',
                exclude: /node_modules/
            },
            {
                test: /\.(sc|sa|c)ss$/,
                use: [
                    MiniCssExtractPlugin.loader,
                    'css-loader',
                    {
                        loader: "postcss-loader",
                        options: {
                            postcssOptions: {
                                plugins: [
                                    [
                                        "postcss-preset-env",
                                        {
                                            browsers: 'last 2 versions'
                                        },
                                    ],
                                ],
                            },
                        },
                    },
                    'sass-loader'
                ]
            },
            {
                test: /\.(png|jpg|gif)$/,
                type: 'asset/resource',
                generator: {
                    filename: './img/[name][ext]',
                }
            }
        ]
    },
    resolve: {
        extensions: [
            '.js'
        ]
    },
    plugins: [
        new MiniCssExtractPlugin({
            filename: "[name].css",
            chunkFilename: "[id].chunk.css"
        })
    ]
};

module.exports = config;