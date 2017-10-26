import moduleBuild from '../moduleBuild'

/**
 * Create an angularjs module's ES5, ES6 modules and UMD builds.
 */
export default function buildModule(args, cb) {
  moduleBuild(args, {
    babel: {
      stage: 1,
    },
    webpack: {
      config: {
        module: {
          rules: [
            {
              test: /\.html$/,
              use: [
                'ngtemplate-loader',
                'html-loader'
              ],
            },
          ],
        },
      },
    },
  }, cb)
}
