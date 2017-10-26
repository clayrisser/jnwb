import path from 'path'

import {directoryExists} from '../utils'
import webpackServer from '../webpackServer'

/**
 * Serve an angularjs demo app from demo/src/index.js.
 */
export default function serveAngularjsDemo(args, cb) {
  let pkg = require(path.resolve('package.json'))

  let dist = path.resolve('demo/dist')

  let config = {
    babel: {
      presets: [require.resolve('babel-preset-stage-1')],
      stage: 1,
    },
    entry: [path.resolve('demo/src/index.js')],
    output: {
      filename: 'demo.js',
      path: dist,
      publicPath: '/',
    },
    plugins: {
      html: {
        mountId: 'demo',
        title: `${pkg.name} ${pkg.version} Demo`,
      },
    },
    module: {
      rules: [
        {
          test: /\.html$/,
          use: [
            'ngtemplate-loader',
            'html-loader'
          ],
          exclude: /webpack-template\.html$/,
        },
        {
          test: /\.s[ac]ss$/,
          use: [
            'style-loader',
            'css-loader',
            'sass-loader',
          ],
        },
      ],
    }
  }

  if (directoryExists('demo/public')) {
    config.plugins.copy = [{from: path.resolve('demo/public'), to: dist}]
  }

  webpackServer(args, config, cb)
}
