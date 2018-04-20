const Webpack = require('webpack');
const Path = require('path');

const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

const isProduction = process.argv.indexOf('-p') >= 0;
const outPath = Path.join(__dirname, '../dist');
const sourcePath = Path.join(__dirname, '../src');

module.exports = {
    context: sourcePath,
    entry: {
        main: [
            'babel-polyfill',
            './index.js'
        ],
        vendor: [
            'react',
            'react-dom',
            'react-redux',
            'react-router',
            'redux'
        ]
    },
    output: {
        path: outPath,
        publicPath: '/',
        filename: 'bundle.js',
        crossOriginLoading: 'anonymous',
    },
    target: 'web',
    resolve: {
        extensions: ['.js', '.jsx'],
        mainFields: ['browser', 'main']
    },
    module: {
        loaders: [
            {
                test: /\.jsx?$/,
                exclude: /node_modules/,
                loader: ['react-hot-loader/webpack', 'babel-loader', 'eslint-loader'],
            },
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader']
            },
            {
                test: /\.scss$/,
                loaders: [
                    'style-loader',
                    'css-loader',
                    'resolve-url-loader',
                    'sass-loader'
                ]
            },
            {
                test: /\.html$/,
                use: 'html-loader'
            },
            {
                test: /\.(jpe?g|png|gif|svg)$/i,
                loader: 'url-loader?limit=10000!img-loader?progressive=true'
            },
            {
                test: /\.(ttf|otf|eot|woff(2)?)(\?[a-z0-9]+)?$/,
                loader: 'file-loader?name=fonts/[name].[ext]'
            }
        ]
    },
    plugins: [
        new Webpack.DefinePlugin({
            'process.env.NODE_ENV': isProduction === true ? JSON.stringify('production') : JSON.stringify('development')
        }),
        new Webpack.optimize.CommonsChunkPlugin({
            name: 'vendor',
            filename: 'vendor.bundle.js',
            minChunks: Infinity
        }),
        new Webpack.optimize.AggressiveMergingPlugin(),
        new ExtractTextPlugin({
            filename: 'styles.css',
            disable: !isProduction
        }),
        new HtmlWebpackPlugin({
            template: 'index.html'
        })
    ],
    devServer: {
        contentBase: sourcePath,
        hot: true,
        stats: {
            warnings: false
        },
        proxy: [{
            context: ['/registration/**', '/api/**'],
            target: 'http://develop.mont-smart.com:4001',
            secure: false,
            onProxyReq: (proxyReq, req, res) => {
                proxyReq.setHeader('Host', 'develop.mont-smart.com:4001');
            }
        }]
    },
    node: {
        fs: 'empty',
        net: 'empty'
    }
};
