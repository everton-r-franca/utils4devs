const HtmlWebpackPlugin = require("html-webpack-plugin");
const path = require("path");

module.exports = {
   entry: "./src/index.js",
   mode: "development",
   plugins: [
      new HtmlWebpackPlugin({
         hash: true,
         title: "Pack of utilies for devs",
         header: "Template base",
         metaDesc: "Pack of utilities for devs",
         template: "./src/index.html",
         filename: "index.html",
         inject: "body",
      }),
   ],
   output: {
      clean: true,
   },
};
