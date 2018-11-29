import path from 'path'
import webpack from 'webpack'
import merge from 'webpack-merge'

import developmentConfig from './config/environments/development'
import productionConfig from './config/environments/production'

const commonConfig = {
  resolve: {
    extensions: ['.js', '.css', '.scss'],
    modules: ['web_modules', 'node_modules', 'app/assets/shared', 'app/assets/apps']
  },
  context: path.resolve('app/assets'),
  entry: {
    'styles': './stylesheets/application.scss',
    'document_editor': './apps/document_editor.js'
  },
  output: {
    path: path.resolve('tmp/assets'),
    filename: '[name].js'
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: 'babel-loader'
      },
      {
        test: /\.s?[ac]ss$/,
        use: ['style-loader', 'css-loader', 'sass-loader']
      },
      {
        test: /\.svg/,
        use: 'svg-url-loader'
      }
    ]
  }
}

let config = {}
switch (process.env.NODE_ENV) {
  case 'production':
    config = merge.smart(commonConfig, productionConfig)
    break
  case 'development':
  default:
    config = merge.smart(commonConfig, developmentConfig)
    break
}

export default config
