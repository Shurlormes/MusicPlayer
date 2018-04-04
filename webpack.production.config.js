var path = require('path');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var HappyPack = require('happypack');
var HappyPackThreadPool = HappyPack.ThreadPool({size: 5});
var ExtractTextWebpackPlugin = require('extract-text-webpack-plugin');
var BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;

var ROOT_PATH = path.resolve(__dirname);
var BUILD_PATH = path.resolve(ROOT_PATH, 'build');
var SOURCE_PATH = path.resolve(ROOT_PATH, 'src');

module.exports = {
	mode: 'production',
	entry: path.resolve(SOURCE_PATH, 'index.jsx'),
	output: {
		publicPath: './',
		filename: 'bundle.js',
		path: BUILD_PATH
	},
	resolve: {
		extensions: ['.jsx', '.js']
	},
	module: {
		rules: [
			{
				test: /(\.jsx|\.js)$/,
				use: ['happypack/loader?id=babel'],
				exclude: /node_modules/
			},
			{
				test: /\.css$/,
				use: ExtractTextWebpackPlugin.extract({
					use: ['happypack/loader?id=css']
				})
			}
		]
	},
	plugins: [
		new HtmlWebpackPlugin({
			title: 'Music'
		}),
		new HappyPack({
			id: 'babel',
			loaders: ['babel-loader'],
			threadPool: HappyPackThreadPool
		}),
		new HappyPack({
			id: 'css',
			loaders: ['css-loader?minimize'],
			threadPool: HappyPackThreadPool
		}),
		new ExtractTextWebpackPlugin({
			filename: 'bundle.css'
		}),
		new BundleAnalyzerPlugin()
	]
};