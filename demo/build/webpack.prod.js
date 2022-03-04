const { merge } = require('webpack-merge')
const common = require('./webpack.common.js')
const BundleAnalyzerPlugin =
  require('webpack-bundle-analyzer').BundleAnalyzerPlugin
// 开启gzip
const CompressionPlugin = require('compression-webpack-plugin')
module.exports = merge(common, {
  mode: 'production',
  plugins: [new BundleAnalyzerPlugin(), new CompressionPlugin()]
})
