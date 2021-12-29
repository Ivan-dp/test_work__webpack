const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const webpack = require('webpack');


module.exports = {
  mode: 'development',
  devServer: {
    historyApiFallback: true,
    // contentBase: path.resolve(__dirname, 'dist'),
    open: true,
    compress: true,
    hot: true,
    port: 8080
  },
  entry: {
    index: './src/pages/index/index.js'
  },
  output: {
    filename: 'js/[name].bundle.js',
    path: path.resolve(__dirname, 'dist')
  },
  plugins: [
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: './src/pages/index/index.pug',
      chunks: ['index']
    }),
    new CleanWebpackPlugin(),    
    new webpack.HotModuleReplacementPlugin()
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
        // test: /\.(png|svg|jpg|jpeg|gif)$/i,
        
        // type: 'asset/resource'
        // test: /\.(png|jpe?g|svg|gif)$/,
        test: /\.(png|svg|jpg|jpeg|gif)$/i,
        exclude: /fonts/,
        type: 'asset',
        // dependency: { not: ['url'] },
        generator: {
          filename: "img/[name][ext]"
        }
        // use: [
          //   {
            //       loader: 'url-loader',
            //       // Упаковать изображения размером менее 8K в файлы js в виде base64
            //       options: {
              //         name: "img/[name].[ext]"
              //         // limit: 8192
              //       }
              //   }
              // ]
              // use: [
                //   {
                  //     loader: "file-loader",
                  //     options: {
                    //       name: "img/[name].[ext]",
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