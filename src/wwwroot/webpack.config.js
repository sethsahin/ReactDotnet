const path = require("path");

module.exports = {
  entry: {
    functions: path.join(__dirname, "components/PersonList.jsx")
  },
  output: { 
    path: path.join(__dirname, "bundles"),
     filename: "[name].min.js" },
  mode: process.env.NODE_ENV || "development",
  resolve: {
    modules: [path.resolve(__dirname), "node_modules"]
  },
  devServer: {
    contentBase: path.join(__dirname)
  },
  module: {
    rules: [
      {
        // this is so that we can compile any React,
        // ES6 and above into normal ES5 syntax
        test: /\.(js|jsx)$/,
        // we do not want anything from node_modules to be compiled
        exclude: /node_modules/,
        use: ["babel-loader"]
      },
      {
        test: /\.(css|scss)$/,
        use: [
          "style-loader", // creates style nodes from JS strings
          "css-loader", // translates CSS into CommonJS
          "sass-loader" // compiles Sass to CSS, using Node Sass by default
        ]
      },
      {
        test: /\.(jpg|jpeg|png|gif|mp3|svg)$/,
        loaders: ["file-loader"]
      }
    ]
  }
};
