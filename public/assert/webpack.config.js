/**
 * Created by bee1314 on 15/1/13.
 * description:
 *  创建开发环境的打包配置
 */
module.exports = {
  entry: {
    'hello': './js/apps/apps.js'
  },
  output: {
    path: '../apps/build/',
    filename: 'bundle_[name].js',
  },
  module: {
    loaders: [
        {test: /\.js/, loader: 'jsx-loader?harmony'}
    ]
  }
};
