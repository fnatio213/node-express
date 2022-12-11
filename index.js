const express = require('express');

const path = require('path')

server.use(express.static(path.join(__dirname, "public")))

const servicePage = (req, res) => {
    const servicePath= path.join(__dirname,"public", "service.html")

res.sendfile(servicePath)

}


const homePage = (req, res) => {
    const homePath= path.join(__dirname,"public", "index.html")

res.sendfile(homePath)

}


const aboutPage = (req, res) => {
    const aboutPath= path.join(__dirname,"public", "about.html")

res.sendfile(aboutPath)

}


const contactPage = (req, res) => {
    const contactPath= path.join(__dirname,"public", "contact.html")

res.sendfile(contactPath)

}


const server = express();
server.get('/contact',aboutPage);
server.get('/about',aboutPage);
server.post('/services',servicePage);
server.get('/',homePage);


server.listen(3000, 'localhost', () => {
    console.log("server is in actioon")
});