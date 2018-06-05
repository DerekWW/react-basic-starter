const path = require('path');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
  entry: './src/client/index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'build.bundle.js'
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env']
          }
        }
      },
      {
        test: /\.scss$/,
        use: [
            // fallback to style-loader in development
            process.env.NODE_ENV !== 'production' ? 'style-loader' : MiniCssExtractPlugin.loader,
            'css-loader',
            'sass-loader',
            'resolve-url-loader'
        ]
    }
    ]
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: "index.css"
    })
  ]
};