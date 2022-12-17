const http = require('http');


const routeMap = {
    '/': (req, res) => res.end("root"),
    '/home': (req, res) => res.end("home"),
}

function resolveMap(req, res){
    if(!routeMap.hasOwnProperty(req.url)){
        res.writeHead(404, "page not foundd");
        return res.end('Not found');
    }
    return routeMap[req.url](req, res);
}

// the Map() way is more memory efficient
const routeMap2 = new Map();
routeMap2.set('/', (req, res) => res.end('root'));
routeMap2.set('/home', (req, res) => res.end('home'));

function resolveMap2(req, res) {
    if (!routeMap2.has(req.url)) {
        res.writeHead(404, "page not foundd");
        return res.end("Not found");
    }
    return routeMap2.get(req.url)(req, res);
}

const server = http.createServer(function (req, res) {

    // console.log(req);
    console.log(req.url);

    res.writeHead(200, "ok", {
        "Content-Type": "text/html",
    });

    // we will perform different operation based on req.url
    // either use a series of if else statement or switch statement here or object mapping or Map

    // option 1:
    // if(req.url === '/'){
    //     return res.end("root");
    // }else if(req.url === '/home'){
    //     return res.end("home");    
    // }else{
    //     res.writeHead(404, "page not foundd");
    //     return res.end("404 not found");
    // }

    // option 2: switch statement
    // switch(req.url){
    //     case "/":
    //         return res.end("root");
    //     case "/home":
    //         return res.end("home");
    //     default:
    //         res.writeHead(404, 'page not foundd');
    //         return res.end("404 not found")
    // }

    // option 3: using object mapping
    // return resolveMap(req, res);

    // option 4: using Map()
    return resolveMap2(req, res);
});

// port is the entry point to a computer
const PORT = 3001;
// host is the domain name
// localhost is a special domain name that is refer to the local computer
// we can use IP address here as well. 127.0.0.1 is IP address for localhost
// If you want a different domain name, you can change the hostfile in your computer
const HOST = 'localhost';
server.listen(PORT, HOST, () => {
    console.log(`server is running on http://${HOST}:${PORT}`);
});

// code is verbose 
// better to use framework like express.js
