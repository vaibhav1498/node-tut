const http = require('http');

const server = http.createServer((req,res)=>{
    res.setHeader('Content-Type','text/html')
    if(req.url === '/')
    {
        res.end('Welcome to Home page')
    }
    else if(req.url === '/about')
    {
    res.end('Welcome to our About Page')
    } else
    res.end(`<h1>Oops!</h1>
    <p>We can't seem to find the page you are looking for</p>
    <a href="/">back home</a>
    `)
    })

server.listen(500)