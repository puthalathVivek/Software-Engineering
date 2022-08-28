//entry --> output
const path = require('path')

module.exports = {
    entry: './src/app.js', //this lets webpack know where to start.ie the entry point
    output: {
        path: path.join(__dirname, 'public'), //should be the absolute path,
        filename: 'bundle.js'
    },
    module: {
        rules: [{
            loader: 'babel-loader',
            test: /\.js$/,
            exclude: /node_modules/
        }, {
            use: [
                'style-loader',
                'css-loader',
                'sass-loader'
            ],
            test: /\.s?css$/
        }]
    },
    'devtool': 'cheap-module-eval-source-map',
    'devServer': {
        contentBase: path.join(__dirname, 'public')
    }
};

