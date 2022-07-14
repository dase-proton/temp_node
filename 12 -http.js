const http = require('http');

const server = http.createServer((req, res)=>{
   if(req.url === '/'){
    res.end('welcome to my home page');
   } 
   if(req.url ==="/about"){
    res.end('Here is our short story');
   }
   res.end(
    `<h1>Oop!</h1>
    <p>We can't find the page you are looking for</p>
    <a href = "/">Back Home</a>`
   )
 
})

server.listen(5000) 