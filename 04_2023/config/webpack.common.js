const pathtoresolve = require('path');
const paths = require('./paths')

const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')

const { VueLoaderPlugin } = require('vue-loader')
const webpack = require("webpack");

module.exports = {
    // Where webpack looks to start building the bundle
    entry: [ 'whatwg-fetch', paths.src + '/app.js'],

    resolve: {
        extensions: [ '.js', '.vue' ],
        alias: {
            'components': pathtoresolve.resolve(__dirname, '../src/components/'),
            'images': pathtoresolve.resolve(__dirname, '../src/images/'),
            'styles': pathtoresolve.resolve(__dirname, '../src/styles/'),
        }
    },

    // Where webpack outputs the assets and bundles
    output: {
        path: paths.build,
        filename: '[name].bundle.js',
        publicPath: '/',
    },


    // Customize the webpack build process
    plugins: [
        // Vue plugin for the magic
        new VueLoaderPlugin(),

        // Removes/cleans build folders and unused assets when rebuilding
        new CleanWebpackPlugin(),

        // Generates an HTML file from a template
        // Generates deprecation warning: https://github.com/jantimon/html-webpack-plugin/issues/1501
        new HtmlWebpackPlugin({
            template: paths.src + '/index.html',
            filename: 'index.html',
        }),
    ],

    // Determine how modules within the project are treated
    module: {
        rules: [
            // JavaScript: Use Babel to transpile JavaScript files
            {test: /\.vue$/, loader: 'vue-loader'},
            {test: /\.js$/, exclude: /node_modules/, use: ['babel-loader']},

            // Styles: Inject CSS into the head with source maps
            {
                test: /\.(scss|css)$/,
                use: [
                    // Note: Only style-loader works for me !!!
                    // 'vue-style-loader',
                    'style-loader',
                    {loader: 'css-loader', options: {sourceMap: true, importLoaders: 1}},
                    {loader: 'postcss-loader', options: {sourceMap: true}},
                    {loader: 'sass-loader', options: {sourceMap: true}},
                ],
            },

            // Images: Copy image files to build folder
            {test: /\.(?:ico|gif|png|jpg|jpeg)$/i, type: 'asset/resource'},

            // Fonts and SVGs: Inline files
            {test: /\.(woff(2)?|eot|ttf|otf|svg|)$/, type: 'asset/inline'},

            {
                test: /\.woff(2)?(\?v=[0-9]\.[0-9]\.[0-9])?$/,
                include: paths.src +  '/../node_modules/bootstrap-icons/font/fonts',
                use: {
                    loader: 'file-loader',
                    options: {
                        name: '[name].[ext]',
                        outputPath: 'webfonts',
                        publicPath: '../webfonts',
                    },
                }
            }
        ],
    },
}