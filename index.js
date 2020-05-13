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
        res.end('Hello From The Server');
    }) //here it will create a server

server.listen(8000, '127.0.0.1', () => {
    console.log('Listening to request on this port ')
}); // here it will listen to in coming request