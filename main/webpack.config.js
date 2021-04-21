const webpack = require('webpack');
const path = require('path');
const HtmlWebPackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = {
	devtool: "source-map",
	module: {
		rules: [
			{
				test: /\.js$/,
				exclude: /node_modules/,
				use: {
					loader: "babel-loader"
				}
			},
			{
				test: /\.scss$/,
				use: [{
					loader: MiniCssExtractPlugin.loader,
					options: {
						sourceMap: true
					}
				},
				{
					loader: "css-loader",
					options: {
						sourceMap: true
					}
				},
				{
					loader: "sass-loader",
					options: {
						sourceMap: true
					}
				}]
			},
			{
				test: /\.(png|jpg|gif|svg|eot|ttf|woff|woff2)$/,
				use: [
					{
						loader: 'file-loader',
						options: {
							name: '[path][name].[ext]'
						}
					}
				]
			},
			{
				test: /\.twig$/,
				use: {
					loader: 'twig-loader',
					options: {
					},
				}
			}
		]
	},
	plugins: [
		new webpack.ProvidePlugin({
			$: "jquery/dist/jquery.min.js",
			jQuery: "jquery/dist/jquery.min.js",
			"window.jQuery": "jquery/dist/jquery.min.js",
		}),
		new HtmlWebPackPlugin({
			template: "./src/template/pages/index.twig",
			filename: "./index.html"
		}),
		new MiniCssExtractPlugin({
			// Options similar to the same options in webpackOptions.output
			// both options are optional
			filename: "[name].css",
			chunkFilename: "[id].css"
		}),
		new CopyWebpackPlugin([
			{ from: './src/img', to: './img' },
			{ from: './src/fonts', to: './fonts' },
		])
	]
};