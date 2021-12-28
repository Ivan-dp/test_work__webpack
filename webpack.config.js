const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');


module.exports = {
  mode: 'development',
  entry: {
    index: './src/pages/index/index.js'
  },
  output: {
    filename: 'js/[name].bundle.js',
    path: path.resolve(__dirname, 'dist')
  },
  plugins: [
    new HtmlWebpackPlugin({
      filename: 'html/index.html',
      template: './src/pages/index/index.pug',
      chunks: ['index']
    }),
    new CleanWebpackPlugin()    
  ],
  stats: {
    children: true,
  },
  module: {
    rules: [
      // scss
      {
        test: /\.(scss|css)$/,
        use: ['style-loader', 'css-loader', 'postcss-loader', 'sass-loader']
      },
      // pug
      {
        test: /\.pug$/,
        use: {
          loader: 'pug-loader',
          options: {
            pretty: true
          }
        },
        
      },
      //img
      {
        test: /\.(png|jpe?g|svg|gif)$/,
        exclude: /fonts/,
        type: 'asset/resource',
        generator: {
          filename: "img/[name][ext]"
        }
        // use: [
        //   {
        //     loader: "file-loader",
        //     options: {
        //       name: "img/[contenthash].[ext]",
        //       publicPath: '/dist'
        //     },
        //   },
        // ],
      },
      //fonts
      {
        test: /\.(woff(2)?|ttf|otf|eot|svg)$/,
        exclude: /img/,
        type: 'asset/inline'
        // loader: "file-loader"
        // options: {
        //   filename: "fonts/[name].[contenthash].[ext]",
        //   publicPath: '/dist'
        // }
      }
    ]
  }
};