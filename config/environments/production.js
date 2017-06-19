import webpack from 'webpack'
import ExtractTextPlugin from 'extract-text-webpack-plugin'
import CompressionPlugin from 'compression-webpack-plugin'
import ManifestPlugin from 'webpack-manifest-plugin'

const productionConfig = {
  output: {
    filename: '[name]-[chunkhash].js'
  },
  module: {
    rules: [
      {
        test: /\.s?[ac]ss$/,
        use: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: ['css-loader', 'sass-loader']
        })
      },
    ]
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env': {
        'NODE_ENV': JSON.stringify('production')
      }
    }),
    new CompressionPlugin(),
    new ManifestPlugin({
      publicPath: '/assets/'
    }),
    new ExtractTextPlugin({filename: '[name]-[contenthash].css'}),
    new webpack.LoaderOptionsPlugin({
      minimize: true,
      debug: false
    }),
    new webpack.optimize.UglifyJsPlugin({
      output: {
        comments: false
      },
      sourceMap: false,
      compress: {
        warnings: false,
        screw_ie8: true,
        unused: true,
        dead_code: true,
        drop_console: true
      }
    })
  ]
}

export default productionConfig

