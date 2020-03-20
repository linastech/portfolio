const withPlugins = require('next-compose-plugins')
const path = require('path')

module.exports = withPlugins(
  //SASS
  [
    [
      require('@zeit/next-sass'), 
      {
        cssModules: true,
        cssLoaderOptions: {
          importLoaders: 1,
          localIdentName: '[local]___[hash:base64:5]'
        },
        sassLoaderOptions: {
          includePaths: [
            // path.join(__dirname, 'static/scss'),
          ]
        }
      }
    ]
  ],
  // next.config.js goes here, webpack as well
  {
    env: {},
    serverRuntimeConfig: {},
    publicRuntimeConfig: {},
    // useFileSystemPublicRoutes: false,
    webpack (config, { buildId, dev, isServer, defaultLoaders}) {
      // config.module.rules.push({
      //   test: /\.scss$/,
      //   loader: "sass-resources-loader",
      //   options: {
      //     resources: [
      //       // path.join(__dirname, 'static/scss/variables.scss'),
      //     ]
      //   }
      // })
      
      config.resolve.alias['components'] = path.join(__dirname, 'components/');
      config.resolve.alias['utils'] = path.join(__dirname, 'utils/');
      config.resolve.alias['scss'] = path.join(__dirname, 'static/scss/');

      return config
    }
  }
)