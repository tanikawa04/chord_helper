module.exports = {
    entry: {},
    output: {
        path: __dirname + '/',
        filename: '[name].js'
    },
    devtool: '#source-map',
    module: {
        loaders: [
            {
                loader: 'babel-loader'
            }
        ]
    },
    resolve: {
        extensions: ['', '.js']
    }
};
