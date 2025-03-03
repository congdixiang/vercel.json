export default function (req, res) {
  const destinationURL = `https://timg.cc:368${req.url}`;

  res.writeHead(301, { Location: destinationURL });
  res.end();
}
