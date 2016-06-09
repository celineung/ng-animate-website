
'use strict';

var webpack = require('webpack');
var path = require('path');
var WebpackNotifierPlugin = require('webpack-notifier');

var config_webpack = {
	context : __dirname + "/app",
	entry : {
		main: "./app.js",
		vendor: [
			'angular',
			'angular-route'
		]
	},
	output : {
		path : __dirname + "/dist",
		filename : "[name].js"
	},
	module: {
	    loaders: [
	        {
	            test: /\.scss$/,
	            loader: 'style-loader!raw-loader!sass-loader'
	        },
	        {
                test: /\.html$/,
                loader: 'ngtemplate-loader?relativeTo=' +  __dirname + '/app/!html-loader'
            }
	    ]
	},
	plugins: [
        new webpack.HotModuleReplacementPlugin(),
        new webpack.optimize.CommonsChunkPlugin({
            name: 'vendor',
            filename: 'vendor.js'
        }),
        new webpack.NoErrorsPlugin(),
        new WebpackNotifierPlugin({
            excludeWarnings: true
        })
    ]
};

module.exports = config_webpack;