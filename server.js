const http= require("http");

const server=http.createServer((req,res)=>{
  console.log("server is visit");
  res.writeHead(200, {'Content-Type': 'text/plain'});
  res.end("hello");
});

server.listen(3000,"0.0.0.0",function(){
  console.log("server is go");
});
