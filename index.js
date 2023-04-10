const http=require("http");

const server=http.createServer((req,res)=>{
      if(req.url==="/"){
        res.end("hello");
      } 
      else if(req.url==="/reports"){
        res.end("reports");
      } 
      else if(req.url==="/data"){
        res.end("Data")
      }
})


server.listen(8000,()=>{
    console.log("Listening on port 8000")
})