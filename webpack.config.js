/* 引入 HtmlWebpackPlugin */
var HtmlWebpackPlugin = require('html-webpack-plugin')
module.exports = {
  /* webpack 入口文件 */
  entry: './js/scroll.js',

  /* webpack 输出文件 */
  output: {
    filename: './js/output/scroll.js'
  },
  /* webpack loader 规则配置 */
  module: {
    rules: [
      {
        test: /\.js$/,
        use: "babel-loader"
      }
    ]
  },

  /* 配置webpack-dev-server */
  devServer: {
    contentBase: './'
  },
  /* 配置插件 */
  plugins: [
    new HtmlWebpackPlugin()
  ]
};
