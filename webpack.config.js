const  webpack = require('webpack');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const path=require("path");
module.exports = {
    // entry:{
    //     bundle:'./index.jsx',
    // },
    entry:['babel-polyfill', './app/index.jsx'],
    output:{
        path: __dirname + '/server/public/bundle',
        filename: 'bundle.js',
    },
    watch:true,
    resolve:{
        alias: {
            react: path.resolve(path.join(__dirname, 'src', 'react')),
            'react-dom': path.resolve(path.join(__dirname, 'src', 'react-dom')),
            //            'react-router': path.resolve(path.join(__dirname, 'react-router', 'es6')),
        },
    },
    module: {
        loaders: [
            {
                test: /\.jsx?$/,
                exclude: function(input){
                    if(input.match(/(node_modules|bower_components)/)){
                        if(input.indexOf("chat-room-plugin")!==-1||input.indexOf("jquery-image-explode")!==-1){
                           return false;
                        }
                        return true;
                    }
                    return false;                       
                },
                loader: 'babel-loader', // 'babel-loader' is also a legal name to reference
                query: {
                    presets: ['react', 'es2015']
                }
            },{
                test: /\.less$/,
                loader: "style!css!less"
            }
        ]
    },
//     plugins: [
//         new webpack.optimize.UglifyJsPlugin({
//             compress: {
//                 warnings: false
//             }
//         }),
//         //new webpack.optimize.DedupePlugin(),
//         new webpack.optimize.OccurenceOrderPlugin(),
//         new webpack.DefinePlugin({
//             'process.env.NODE_ENV': JSON.stringify('production')
//         })
//   ]
}
