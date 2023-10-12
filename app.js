const http = require('http')

const server = http.createServer((req,res) => {
  res.write('향마루');
  // res.end();
});

server.listen(3500, (err) => {
  
})