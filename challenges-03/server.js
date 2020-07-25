const express = require('express'); //chama o express
const nunjucks = require('nunjucks');

const server = express();
const courses = require("./data");

server.use(express.static('public'));

server.set("view engine", "njk");

nunjucks.configure("views", {
    express: server,
    autoescape: false,  //insere o html que está comentado
    noCache: true
});

server.get("/", function(req, res){
    return res.render("courses", { items: courses });

    
    server.use(function(req, res) {
        res.status(404).render("not-found");
    });
}); //pega a barra e executa a função

server.get("/about", function(req, res){

    const about = {
        image: "https://avatars0.githubusercontent.com/u/28929274?s=200&v=4",
        name: "Rocketseat",
        description: 'Empresa focada em programação',
        technologies: [
            { name: "Node.js" },
            { name: "React JS"},
            { name: "React Native"}
        ],
        links: [
            { name: "GitHub", url: "https://github.com/Rocketseat" },
            { name: "Instagram", url: "https://www.linkedin.com/school/rocketseat/?originalSubdomain=br" },
            { name: "Facebook", url: "https://www.facebook.com/rocketseat/" }
        ]
    }
    return res.render("about", { about });

    
        server.use(function(req, res) {
            res.status(404).render("not-found");
        });
}); //pega a barra e executa a função


server.get("/courses/:id", function(req, res) {

    const id = req.params.id;

    //return res.send(`O id fornecido na rota é: ${id}`);

    const course = courses.find(function(course){
        return course.id == id;
    });

    if(!course){
        return res.send("Course not found!");
    }

    return res.render("course", { item: course });
  });
  

server.listen(5000, function() {
    console.log("server is running");
});


