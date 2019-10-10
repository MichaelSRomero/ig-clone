const path = require('path');
const GoogleFontsPlugin = require('google-fonts-plugin')

console.log("\nINSIDE WEBPACK.CONFIG", process.env.NODE_ENV)

module.exports = {
  mode: process.env.NODE_ENV,
  entry: path.resolve(__dirname, './client/index.js'),
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, './build/')
  },
  devServer: {
    // Serves the build directory which includes the index.html file
    // requires publicPath if index.html file was in different directory
    // index.html file contains script tag looking for the bundle.js folder which lives relative to it since we are serving the ./build directory,
    // so it never makes a request to localhost:3000|8080/build/bundle
    // by default will use the current directory and is only necessary to serve static files
    contentBase: path.resolve(__dirname, './build'),
    // by default bundle is available as 'localhost:8080/bundle.js' but by providing a publicPath, it looks for 'localhost:8080/build/bundle.js'
    publicPath: '/build/',
  },
  devtool: 'eval-source-map',
  module: {
    rules: [
      {
        test: /\.jsx?/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: 'babel-loader',
          options: {presets: ['@babel/preset-env', '@babel/preset-react'], cacheDirectory: true}
        }
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader']
      },
      {
        test: /\.(png|svg|jpg|gif)$/,
        use: [ {loader: 'url-loader',} ]
      },
      // {
      //   test: /\.(png|svg|jpg|gif)$/,
      //   loader: 'file-loader',
      //   // example: 'images/logo.png'
      //   options: {name: '[name].[ext]', outputPath: 'images'}
      //   // options: {
      //   //   name(file) {
      //   //     if (process.env.NODE_ENV === 'development') {
      //   //       return '[name].[ext]';
      //   //     }

      //   //     return '[contenthash].[ext]';
      //   //   },
      //   //   outputPath: 'images'
      //   // }
      // }
    ]
  },
  plugins: [
    new GoogleFontsPlugin('./config.json')
  ]
}