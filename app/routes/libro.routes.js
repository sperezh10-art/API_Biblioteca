module.exports = app => {
    const libros = require("../controllers/libro.controller.js");
    var router = require("express").Router();
    // Create a new Client
    router.post("/create/", libros.create);
    // Retrieve all Client
    router.get("/", libros.findAll);
    // Retrieve all published Client
    router.get("/status", libros.findAllStatus);
    // Retrieve a single Client with id
    router.get("/:id", libros.findOne);
    // Update a Client with id
    router.put("/update/:id", libros.update);
    // Delete a Client with id
    router.delete("/delete/:id", libros.delete);
    // Delete all Cliente
    router.delete("/delete/", libros.deleteAll);
    // Podemos utilizar como una ocpion app.use("EndPoint",router" para simplicar el URI
    // Ej.  http://localhost:Puerto/api/cliente/
    app.use("/api/libros", router);
};