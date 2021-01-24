/*
 * @Description: webpack config
 * @version: 
 * @Author: youyuan
 * @Date: 2021-01-17 20:35:02
 * @LastEdited: 
 * @LastEditTime: 2021-01-24 17:16:49
 */

 module.exports = {
     entry: './main.js',
     module: {
         rules: [
             {
                 test: /\.js$/,
                 use: {
                     loader: 'babel-loader',
                     options: {
                         presets: ["@babel/preset-env"],
                         plugins: [["@babel/plugin-transform-react-jsx", {pragma: "createElement"}]]
                     }
                 }
             }
         ]
     },
     mode: 'development'
 }

