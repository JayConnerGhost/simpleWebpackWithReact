var webpack = require("webpack");
var path = require("path");

module.exports ={
    entry:{

     app: [ path.resolve(__dirname, "src/index.js") ]
     
    },

    output: {
        path: path.join(__dirname, 'dist'),
        publicPath: '/static/',
        filename: "bundle.js"
    },

     devServer: {
         inline: true,
         contentBase: 'dist',
         port:3000
     },

     module:
        {
            loaders: [ 
                {
                    test: /\.js$/,
                    exclude: /(node_modules)/,
                    loader: ["babel-loader"],
                    query: {
                        presets: ["latest","stage-0","react"]
                    }
                }
            ]
        }

}