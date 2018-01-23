const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
    // входная точка нашего приложения
    entry : './frontend/main.js',
    output: {
        // результат работы Webpack будет в файле с таким именем
        path: path.join(__dirname,"public"),
        filename: 'bundle.js'
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                use: {
                    loader:'babel-loader',
                    options: { presets: ['env'] }
                },
                exclude: /node_modules/
            },
            {
                test: /\.less$/,
                use: ExtractTextPlugin.extract({
                    fallback: 'style-loader',
                    use: ['css-loader', 'less-loader']
                })
            }
        ],
    },
    plugins: [ new ExtractTextPlugin('style.css') ]
};

