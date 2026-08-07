module.exports = (sequelize, Sequelize) => {
// usamos el sequelize.defina para "definir" el nombre de la entity en la BD, en este caso "cliente"
// Usamos type.Sequelize para definir el tipo de datos de cada atributo de la entidad 
    const Prestamo = sequelize.define("prestamo", {
        Fecha_Pre: {
            type: Sequelize.DATE
        },
        Fecha_Dev: {
            type: Sequelize.DATE,
            allowNull:true
        }
        
    });
    return Prestamo
};