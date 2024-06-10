const http=require('http');

const server= http.createServer((req,res)=>{
    let path=req.url;
    console.log("req made");
    // res.end(path);
    if(path==='/' || path.toLocaleLowerCase()==="/home" ){
        res.end("<h1> welcome to home page</h1>")
    }
    else if(path.toLocaleLowerCase()=== "/about"){
        res.end("this is about page")
    }
    else{
        res.end("tjhis is a random page");
    }
})

server.listen(8000,()=>{
    console.log("server started");
})
