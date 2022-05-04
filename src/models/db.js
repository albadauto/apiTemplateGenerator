const Sequelize = require("sequelize");
require("dotenv").config();
const connection = new Sequelize(process.env.DATABASE, process.env.MYSQL_USER, process.env.MYSQL_PASS, {
    dialect: "mysql",
    host: process.env.MYSQL_URL,
})


module.exports = connection;