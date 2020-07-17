const express = require('express'); //chama o express
const nunjucks = require('nunjucks');

const server = express();

server.use(express.static('public'));

server.set("view engine", "njk");

nunjucks.configure("views", {
    express: server
});

server.get("/", function(req, res){
    return res.render("courses");
}); //pega a barra e executa a função

server.get("/about", function(req, res){
    return res.render("about");
}); //pega a barra e executa a função

server.use(function(req, res) {
    res.status(404).render("not-found");
});

server.listen(5000, function() {
    console.log("server is running");
});


