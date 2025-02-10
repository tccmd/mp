const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const TerserPlugin = require('terser-webpack-plugin');

module.exports = {
  entry: "./src/index.js",
  output: {
    path: path.resolve(__dirname, "./dist"),
    filename: "index.js",
  },
  plugins: [
    // new HtmlWebpackPlugin({
    //   template: path.resolve(__dirname, "./src/index.html"),
    // }),
    new HtmlWebpackPlugin({
      filename: 'URL/index.html',
      template: './src/URL/index.html',
    }),
    new HtmlWebpackPlugin({
      filename: 'URL2/index.html',
      template: './src/URL2/index.html',
    }),
    new CopyWebpackPlugin({
      patterns: [
        { from: "./src/css", to: "./css" },
        // { from: "./src/viewtagicons", to: "./viewtagicons" },
        { from: "./src/modules", to: "./modules" },
        { from: "./static", to: "./static" },
      ],
    })
  ],
  module: {
    rules: [
      {
        test: /\.css$/, // CSS 파일에 대해서만
        use: ['style-loader', 'css-loader'], // style-loader와 css-loader를 사용
      },
      {
        test: /\.mp4$/, // mp4 파일에 대해서만
        use: [
          {
            loader: 'file-loader',
            options: {
              name: '[name].[ext]', // 파일 이름 유지
              // outputPath: 'media/', // 출력 폴더 지정 (임의의 폴더 이름)
            },
          },
        ],
      }
    ]
  },
  devServer: {
    static: [path.resolve(__dirname, "static")],
    port: 8080
  },
  mode: 'production',
  // 빌드 시 주석 제거 플러그인 (js 파일)
  optimization: {
    minimize: true,
    minimizer: [
      new TerserPlugin({
        terserOptions: {
          format: {
            comments: false,
          },
        },
      }),
    ],
  }
};

// const HtmlWebpackPlugin = require("html-webpack-plugin");
// const CopyWebpackPlugin = require("copy-webpack-plugin");
// const path = require("path");

// module.exports = {
//   entry: "./src/index.js",
//   output: {
//     path: path.resolve(__dirname, "./dist"),
//     filename: "index_bundle.js",
//   },
//   plugins: [
//     new HtmlWebpackPlugin({
//       template: path.resolve(__dirname, "./src/index.html"),
//     }),
//     new CopyWebpackPlugin({
//       patterns: [
//         { from: "public", to: "public" }, // static 폴더를 dist/static으로 복사
//       ],
//     }),
//   ],
//   devServer: {
//     static: [path.resolve(__dirname, "public")],
//   },
// };
