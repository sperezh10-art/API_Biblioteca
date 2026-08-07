module.exports = app => {
    const estudiantes = require("../controllers/estudiante.controller.js");
    var router = require("express").Router();
    // Create a new Client
    router.post("/create/", estudiantes.create);
    // Retrieve all Client
    router.get("/", estudiantes.findAll);
    // Retrieve all published Client
    router.get("/status", estudiantes.findAllStatus);
    // Retrieve a single Client with id
    router.get("/:id", estudiantes.findOne);
    // Update a Client with id
    router.put("/update/:id", estudiantes.update);


    // Podemos utilizar como una ocpion app.use("EndPoint",router" para simplicar el URI
    // Ej.  http://localhost:Puerto/api/cliente/
    app.use("/api/estudiantes", router);
};