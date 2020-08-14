const express = require('express'); //chama o express
const nunjucks = require('nunjucks');
const routes = require("./routes");

const server = express();

server.use(express.static('public'));
server.use(routes);

server.set("view engine", "njk");

nunjucks.configure("views", {
    express: server,
    autoescape: false,  //insere o html que está comentado
    noCache: true
});



server.listen(5000, function() {
    console.log("server is running");
});


