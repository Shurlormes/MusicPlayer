var path = require('path');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var ExtractTextWebpackPlugin = require('extract-text-webpack-plugin');
var BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;
var CleanWebpackPlugin = require('clean-webpack-plugin');

var ROOT_PATH = path.resolve(__dirname);
var BUILD_PATH = path.resolve(ROOT_PATH, 'build');
var SOURCE_PATH = path.resolve(ROOT_PATH, 'src');

var theme = require('./theme');

module.exports = {
	mode: 'production',
	entry: path.resolve(SOURCE_PATH, 'index.jsx'),
	output: {
		publicPath: './',
		filename: 'static/js/bundle-[hash].js',
		path: BUILD_PATH
	},
	resolve: {
		extensions: ['.jsx', '.js']
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
				use: ExtractTextWebpackPlugin.extract({
					use: ['css-loader?minimize']
				})
			},
			{
				test: /\.less$/,
				use: ExtractTextWebpackPlugin.extract({
					use: [
						'css-loader?minimize',
						`less-loader?{javascriptEnabled: true, modifyVars: ${JSON.stringify(theme)}}`
					]
				})
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
							publicPath: '../images',
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
							publicPath: '../resource',
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
		new ExtractTextWebpackPlugin({
			filename: 'static/css/bundle-[hash].css'
		}),
		new BundleAnalyzerPlugin(),
		new CleanWebpackPlugin(BUILD_PATH)
	]
};