const { DataTypes } = require("sequelize");
const connection  = require("./db");
const templateModel = connection.define('template', {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    votante: DataTypes.STRING,
    evento: DataTypes.STRING,
    document: DataTypes.STRING,
    id_votante: DataTypes.INTEGER

})

//templateModel.sync({force:true}).then(() => console.log("Criado com sucesso!"))
module.exports = templateModel