const http=require("http");
const fs=require("fs")
const server=http.createServer((req,res)=>{
      if(req.url==="/"){
        // res.setHeader("Content-type","text/html")
        res.end("<h1>Hey this is html</h1>");
      } 
      else if(req.url==="/adddata"&&req.method==="POST"){
        let str=""
        req.on("data",(packet)=>{
          str+=packet;
        })
        req.on("end",()=>{
          console.log(str);
        })
        

        res.end("Hey I got your data")
      }
    //   else if(req.url==="/reports"){
    //     res.end("reports");
    //   } 
    //   else if(req.url==="/data"){
    //     res.end("Data")
    //   }

    else if(req.url==="/blogs"){
        res.write("Here are some blogs")
        res.write("Here are some first blog...")
        res.write("Here are some second blogs...")
        res.end()
    }
    else if(req.url==="/notes"){
      fs.readFile("./lecture.txt",{encoding:"utf-8"},(err,data)=>{
        res.end(data)
      })
    }
    else{
        res.end("Invalid API endpoints, Please refer API Docs")
    }
})


server.listen(8000,()=>{
    console.log("Listening on port 8000")
})