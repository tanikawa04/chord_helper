module.exports = {
    entry: {chord_helper: './src/chord_helper.js'},
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
