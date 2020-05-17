const fs = require('fs');
const http = require('http');

/////////////////////////////////////////////////////////////////////
//Files

//  //Blocking , Synchronous way
//  const textIn = fs.readFileSync("./txt/input.txt", "utf-8");
//  console.log(textIn);
//  const textOut = `This is what we know about avacado : ${textIn}.\nCreated on ${Date.now()}`;
//  fs.writeFileSync('./txt/output.txt', textOut);
//  console.log('File Written');

// Non-blocking Asynchronous way
// fs.readFile('./txt/start.txt', 'utf-8', (err, data1) => {
//     fs.readFile(`. / txt / ${ data1 }.txt`, 'utf-8', (err, data2) => {
//         console.log(data);
//     });
// });
// console.log('will read file!');


////////////////////////////////////////////////////////////////////////////
// SERVER 

const server = http.createServer((req, res) => {


    const pathName = req.url;

    if (pathName === '/' || pathName === '/overview') {
        res.end('This is the OverView');
    } else if (pathName === '/product') {
        res.end('This is the Product');
    } else if (pathName === '/api') {
        fs.readFile('$(__dirname)./dev-data/data.json')

        res.end('API')
    } else {
        res.writeHead(404, {
            'Content-Type': 'text/html',
            'my-own-header': 'hello-World'
        });
        res.end('<h1>Page not Found !!</h1>');
    }
}); //here it will create a server

server.listen(8000, '127.0.0.1', () => {
    console.log('Listening to request on this port ')
}); // here it will listen to in coming request