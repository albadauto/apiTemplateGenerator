const express = require("express");
const cors = require("cors");
const documentRouter = require("./routes/document.route");
const connection = require("./models/db");
const { join }  = require("path");
const path = require("path");
require("dotenv").config();
const port = process.env.SERVER_PORT || 8080
const app = express();


//CONFIG
app.use(cors());
app.use(express.json());
app.use('/public', express.static(path.join(__dirname, "../public")))

//ROUTES
app.use("/documents", documentRouter);
app.use("/", (request, response) => {
    response.status(200).json({message:"Rota não existente!"})
});

//DATABASE
connection.authenticate().then(() => console.log("🔵 DATABASE IS CONNECTED! 🔵"))

//SERVER
app.listen(process.env.SERVER_PORT, () => console.log(`🟢 API IS RUNNING! PORT: ${port} 🟢`));