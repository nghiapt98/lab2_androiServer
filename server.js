const http = require('node:http');
const hostname = '127.0.0.1';
const port = 3002;
const server = http.createServer((req,res)=>{
    res.statusCode=200;
    res.setHeader('Content-Type','text/html');
    res.write('Hello world\n');
    res.write('<h1> abc');
    res.end;
});
server.listen(port,hostname,()=>{
    console.log(`sever running at port 3000`);
})