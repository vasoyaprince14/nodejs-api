const http=require('http');
const fs=require('fs');
const server=http.createServer((req,res)=>{
    console.log("new req recived")
    const data= fs.readFileSync('./index.html','utf-8');
    res.end(data);
    // res.end("server started at port number 8000");
    // console.log(req)
    // console.log("now response")
    
    // console.log(res)

})
server.listen(8000,'127.0.0.1',()=>{
    console.log("server started");
    // res.send('hello world server started at prort 800')
})
