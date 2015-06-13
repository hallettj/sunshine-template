module.exports = {
    context: __dirname,
    entry: {
        index: './lib/app.js'
    },
    output: {
        path: __dirname + '/static',
        filename: '[name].js'
    },
    module: {
        loaders: [
            { test: /\.jsx?$/, loader: 'babel-loader' }
        ]
    },
    devtool: 'source-map'
}
