/*
 * @Description: 
 * @version: 
 * @Author: youyuan
 * @Date: 2020-11-29 17:35:45
 * @LastEdited: 
 * @LastEditTime: 2020-12-01 23:31:56
 */
const http = require('http');

http.createServer((request, response) => {
  let body = [];
  request.on('error', (err) => {
    console.error(err);
  }).on('data', (chunk) => {
    body.push(chunk.toString());
  }).on('end', () => {
    // body = Buffer.from(body).toString();
    console.log('body: ', body);
    response.writeHead(200, {'Content-Type': 'text/html'});
    response.end(' Hello World\n');
  });
}).listen(8088, () => {
  console.log('Server started on port: 8088')
});
