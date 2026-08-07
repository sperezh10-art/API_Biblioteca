module.exports = app => {

    const prestamos = require("../controllers/prestamo.controller.js");
    var router = require("express").Router();

    // Crear préstamo
    router.post("/create/", prestamos.create);

    // Obtener todos
    router.get("/", prestamos.findAll);

    // Obtener uno por id
    router.get("/:id", prestamos.findOne);

    // Actualizar devolución
    router.put("/update/:id", prestamos.update);

    app.use("/api/prestamos", router);
};