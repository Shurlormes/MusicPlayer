var path = require('path');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var HappyPack = require('happypack');
var HappyPackThreadPool = HappyPack.ThreadPool({size: 5});

var ROOT_PATH = path.resolve(__dirname);
var BUILD_PATH = path.resolve(ROOT_PATH, 'build');
var SOURCE_PATH = path.resolve(ROOT_PATH, 'src');

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
				use: ['happypack/loader?id=babel'],
				exclude: /node_modules/
			},
			{
				test: /\.css$/,
				use: ['happypack/loader?id=css'],
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
			loaders: ['style-loader', 'css-loader'],
			threadPool: HappyPackThreadPool
		}),
		new HappyPack({
			id: 'image',
			loaders: [
				{
					loader: 'url-loader',
					options: {
						limit: 8192,
						fallback: 'file-loader'
					}
				}
			],
			threadPool: HappyPackThreadPool
		}),
		new HappyPack({
			id: 'resource',
			loaders: ['file-loader'],
			threadPool: HappyPackThreadPool
		})
	]
};