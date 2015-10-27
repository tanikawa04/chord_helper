module.exports = {
	entry: './src/chord_helper.js',
	output: {
		path: __dirname + '/',
		filename: 'chord_helper.js'
	},
	devtool: '#source-map',
	module: {
		loaders: [
			{
				loader: 'babel-loader'
			}
		]
	}
};
