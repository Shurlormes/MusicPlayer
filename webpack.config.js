var path = require('path');
var HtmlWebpackPlugin = require('html-webpack-plugin');

var ROOT_PATH = path.resolve(__dirname);
var BUILD_PATH = path.resolve(ROOT_PATH, 'build');
var SOURCE_PATH = path.resolve(ROOT_PATH, 'src');

var theme = require('./theme');

module.exports = {
	mode: 'development',
	entry: path.resolve(SOURCE_PATH, 'index.jsx'),
	output: {
		path: BUILD_PATH,
		filename: 'bundle.js',
		publicPath: '/'
	},
	resolve: {
		extensions: ['.jsx', '.js']
	},
	devtool: 'eval-source-map',
	devServer: {
		contentBase: BUILD_PATH,
		historyApiFallback: true,
		inline: true,
		hot: true
	},
	module: {
		rules: [
			{
				test: /(\.jsx|\.js)$/,
				use: ['babel-loader'],
				exclude: /node_modules/
			},
			{
				test: /\.css$/,
				use: ['style-loader', 'css-loader'],
			},
			{
				test: /\.less$/,
				use: [
					'style-loader',
					'css-loader',
					`less-loader?{javascriptEnabled: true, modifyVars: ${JSON.stringify(theme)}}`
				],
			},
			{
				test: /(\.png|\.jpe?g|\.svg|\.gif)$/i,
				use: [
					{
						loader: 'url-loader',
						options: {
							limit: 8192,
							name: '[name]-[hash].[ext]',
							outputPath: 'static/images',
							publicPath: './static/images',
							fallback: 'file-loader'
						}
					}
				]
			},
			{
				test: /\.(woff|woff2|eot|ttf)\??.*$/i,
				use: [
					{
						loader: 'file-loader',
						options: {
							name: '[name]-[hash].[ext]',
							outputPath: 'static/resource',
							publicPath: './static/resource',
						}
					}
				],
			}
		]
	},
	plugins: [
		new HtmlWebpackPlugin({
			title: 'MusicPlayer'
		}),
	]
};