var path = require('path');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var HappyPack = require('happypack');
var HappyPackThreadPool = HappyPack.ThreadPool({size: 5});
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
				use: ['happypack/loader?id=babel'],
				exclude: /node_modules/
			},
			{
				test: /\.css$/,
				use: ExtractTextWebpackPlugin.extract({
					use: ['happypack/loader?id=css']
				})
			},
			{
				test: /\.less$/,
				use: ExtractTextWebpackPlugin.extract({
					use: ['happypack/loader?id=less']
				})
			},
			{
				test: /(\.png|\.jpe?g|\.svg|\.gif)$/i,
				use: ['happypack/loader?id=image']
			},
			{
				test: /\.(woff|woff2|eot|ttf)\??.*$/i,
				use: ['happypack/loader?id=resource'],
			}
		]
	},
	plugins: [
		new HtmlWebpackPlugin({
			title: 'MusicPlayer'
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
		new HappyPack({
			id: 'less',
			loaders: ['css-loader?minimize', `less-loader?{"javascriptEnabled": true, "sourceMap":true, "modifyVars":${JSON.stringify(theme)}}`],
			threadPool: HappyPackThreadPool
		}),
		new HappyPack({
			id: 'image',
			loaders: [
				{
					loader: 'url-loader',
					options: {
						limit: 8192,
						name: '[name]-[hash].[ext]',
						outputPath: 'static/images/',
						publicPath: '../images/',
						fallback: 'file-loader'
					}
				}
			],
			threadPool: HappyPackThreadPool
		}),
		new HappyPack({
			id: 'resource',
			loaders: [
				{
					loader: 'file-loader',
					options: {
						name: '[name]-[hash].[ext]',
						outputPath: 'static/resource/',
						publicPath: '../resource/'
					},
				}
			],
			threadPool: HappyPackThreadPool
		}),
		new ExtractTextWebpackPlugin({
			filename: 'static/css/bundle-[hash].css'
		}),
		new BundleAnalyzerPlugin(),
		new CleanWebpackPlugin(BUILD_PATH)
	]
};