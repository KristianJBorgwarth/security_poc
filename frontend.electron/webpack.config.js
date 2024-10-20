const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  mode: 'development',
  entry: './src/react/index.tsx',
  devtool: 'inline-source-map',
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: 'ts-loader',  // Use ts-loader to handle TypeScript + JSX
        exclude: /node_modules/,
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader', 'postcss-loader'],  // Use postcss-loader to handle Tailwind CSS
      }
    ],
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.js'],
  },
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist'),
  },
  devServer: {
    static: {
		directory: path.join(__dirname, 'dist'),  // This replaces contentBase
	  },
	  hot: true,
	  open: false,
	  port: 8080,
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/react/index.html'
    })
  ]
};
