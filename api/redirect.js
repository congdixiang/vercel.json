export default function (req, res) {
  const host = req.headers.host.split('.')[0];
  const destinationURL = `http://${host}.906009898.xyz:368${req.url}`;
  
  res.writeHead(301, { Location: destinationURL });
  res.end();
}
