const http = require('http');

// 创建 HTTP 服务器
http.createServer((req, res) => {
  // 设置重定向的目标 URL
  const destinationURL = `https://${req.headers.host}${req.url}`;
  
  // 设置 301 状态码和重定向头信息
  res.writeHead(301, { Location: destinationURL });
  res.end();
}).listen(80, () => {
  console.log('Server running at http://abc.906009898.xyz/');
});
