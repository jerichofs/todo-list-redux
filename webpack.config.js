const path = require('path');
const webpack = require('webpack');


module.exports = {
    entry: [
        'react-hot-loader/patch',

        'webpack-dev-server/client?http://localhost:8080',

        'webpack/hot/only-dev-server',


        './src/js/todo.jsx',
    ],


    output: {
        filename: 'main.js',
        path: path.resolve(__dirname, 'dist'),
        publicPath: '/',
    },

    module: {
        rules: [
            // a rule for js and jsx
            { test: /\.(js|jsx)$/, exclude: /node_modules/, use: 'babel-loader', },

            
            // a rule for css
            { test:/\.css$/,  use: [{loader: 'style-loader'}, {loader: 'css-loader'}], },
        ],
    },

    devServer: {
        hot: true,
        contentBase: './dist',
    },

    
    plugins: [
        new webpack.NamedModulesPlugin()
    ],

    resolve: {
        extensions: ['.js', '.jsx'],
    },
}
