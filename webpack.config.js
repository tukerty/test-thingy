const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
    module: {
        rules: [{
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader"
                }
            },
            {
                test: /\.(png|svg|jpg|gif)$/,
                use: {
                    loader: 'file-loader',
                    options: {
                        name: '[name].[ext]',
                        outputPath: 'assets/',
                        publicPath: 'assets/'
                    }
            },
                
            }, {
                test: /\.scss$/,
                use: [
                    "style-loader",
                    "css-loader",
                    "sass-loader"
                ]
            },
            {
                test: /\.html$/,
                use: [
                    'html-loader'
                ]
            }

        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: 'src/index.html'
        })
    ],
    resolve: {
        alias: {
            Images: path.resolve(__dirname, 'src/assets/images/'),
            Styles: path.resolve(__dirname, 'src/assets/styles/')
        }
    },

    devServer: {
        contentBase: './dist',
        compress: true,
        port: 9000
    }
};