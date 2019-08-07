const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    watch: true,
    mode: 'development',
    entry: [
        './src/js/index.js', 
        './src/scss/_imports.scss'
    ],
    devtool: 'source-map',
    devServer: {
        contentBase: path.join(__dirname, 'dist'),
        port: 9000,
    },
    output: {
        filename: "[name].min.js",
        path: path.resolve(__dirname, 'dist')
    },
    plugins: [
        new MiniCssExtractPlugin({
            // Options similar to the same options in webpackOptions.output
            // all options are optional
            filename: '[name].css',
            chunkFilename: '[id].css',
            ignoreOrder: false, // Enable to remove warnings about conflicting order
        }),
        new HtmlWebpackPlugin({
            template: "./src/template.html"
        }),
    ],
    module: {
        rules: [
            {
                test: /\.s?css$/,
                use: [
                    MiniCssExtractPlugin.loader,
                    {
                        loader: 'css-loader',
                        options: { sourceMap: true },
                    },
                    {
                        loader: 'sass-loader',
                        options: { sourceMap: true },
                    }
                ]
            },
            {
                test: /\.(png|svg|jpg|gif)$/,
                use: [
                    'file-loader'
                ]
            },
            {
                test: /\.html$/,
                loader: 'html-loader'
            }
        ]
    }
};