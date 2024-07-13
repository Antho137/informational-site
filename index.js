const port = 8080;
const http = require('http');
const fs = require('fs');

const homePage = fs.readFileSync('index.html');
const aboutPage = fs.readFileSync('about.html');
const contactPage = fs.readFileSync('contact.html');
const notFoundPage = fs.readFileSync('404.html');

const server = http.createServer((req, res) => {
    const url = req.url;
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/html');

    if (url === '/') {
        res.end(homePage);
    } else if (url === '/about') {
        res.end(aboutPage);
    } else if (url === '/contact') {
        res.end(contactPage);
    } else {
        res.end(notFoundPage);
    }
})
server.listen(port);

console.log(`Server running at http://localhost:${ port }/`);