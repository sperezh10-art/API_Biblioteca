const db = require("../models");

const Prestamo = db.prestamo;
const Libro = db.libro;
const Estudiante = db.estudiante;


// Crear préstamo
exports.create = async (req, res) => {

    try {

        const libro = await Libro.findByPk(req.body.libroId);

        if (!libro) {
            return res.status(404).send({
                message: "El libro no existe"
            });
        }


        if (!libro.disponible) {
            return res.status(400).send({
                message: "El libro no está disponible"
            });
        }


        const estudiante = await Estudiante.findByPk(req.body.estudianteId);

        if (!estudiante) {
            return res.status(404).send({
                message: "El estudiante no existe"
            });
        }


        const prestamo = await Prestamo.create({

            libroId: req.body.libroId,

            estudianteId: req.body.estudianteId,

            Fecha_Pre: new Date()

        });


        libro.disponible = false;

        await libro.save();


        res.send(prestamo);


    } catch(error){

        res.status(500).send({
            message: error.message
        });

    }

};




// Obtener todos los préstamos
exports.findAll = async (req,res)=>{

    try{

        const prestamos = await Prestamo.findAll({

            include:[
                {
                    model: Libro
                },
                {
                    model: Estudiante
                }
            ]

        });


        res.send(prestamos);


    }catch(error){

        res.status(500).send({
            message:error.message
        });

    }

};




// Obtener préstamo por ID
exports.findOne = async(req,res)=>{

    try{

        const prestamo = await Prestamo.findByPk(
            req.params.id,
            {
                include:[
                    Libro,
                    Estudiante
                ]
            }
        );


        if(!prestamo){

            return res.status(404).send({
                message:"Préstamo no encontrado"
            });

        }


        res.send(prestamo);


    }catch(error){

        res.status(500).send({
            message:error.message
        });

    }

};




// Devolver libro
exports.update = async(req,res)=>{

    try{

        const prestamo = await Prestamo.findByPk(req.params.id);


        if(!prestamo){

            return res.status(404).send({
                message:"Préstamo no encontrado"
            });

        }


        // Guardar fecha de devolución
        prestamo.Fecha_Dev = new Date();

        await prestamo.save();



        const libro = await Libro.findByPk(prestamo.libroId);


        libro.disponible = true;

        await libro.save();



        res.send({

            message:"Libro devuelto correctamente",

            prestamo

        });


    }catch(error){

        res.status(500).send({
            message:error.message
        });

    }

};




// Eliminar préstamo
exports.delete = async(req,res)=>{

    try{

        const prestamo = await Prestamo.findByPk(req.params.id);


        if(!prestamo){

            return res.status(404).send({
                message:"Préstamo no encontrado"
            });

        }


        await prestamo.destroy();


        res.send({
            message:"Préstamo eliminado correctamente"
        });


    }catch(error){

        res.status(500).send({
            message:error.message
        });

    }

};