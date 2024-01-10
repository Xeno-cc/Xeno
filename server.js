const http= require("http");
const fs= require("fs");

const server=http.createServer((req,res)=>{
  console.log("server is visit");
  console.log(req.method);
    
    res.writeHead(200, {'Content-Type': 'text/plain'});
  res.end("Holy shit lois");
/*
  fs.readFile("index.html",function(err,data){
    if (err) {
      console.error(err);
      throw err;
    }
    
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.write(data);
    return res.end();
  });
  */
  
});

server.listen(3000,"0.0.0.0",function(){
  console.log("server is go");
});
