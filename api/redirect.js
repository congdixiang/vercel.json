const http = require('http');

// 创建 HTTP 服务器
http.createServer((req, res) => {
  // 提取主机名部分
  const subdomain = req.headers.host.split('.')[0];
  // 构建目标 URL，添加端口号 368
  const destinationURL = `https://${subdomain}.timg.cc:368${req.url}`;

  // 设置 301 状态码和重定向头信息
  res.writeHead(301, { Location: destinationURL });
  res.end();
}).listen(80, () => {
  console.log('Server running at http://*.906009898.xyz/');
});
