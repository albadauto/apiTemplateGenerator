const axios = require("axios");
const apiConfig = require("../config/auth");
const templateModel = require("../models/template.model");
const pdf = require("html-pdf");
require("dotenv").config()


module.exports.generateDocument = async (request, response) => {
    try{
        const idVotante = request.params.idVotante
        const result = await axios.get(`${process.env.API_BASE_URI}/eventos/7747/votante/${idVotante}`, apiConfig); //5444527
        console.log(result.status)
        const resultObj = {
            event: "Eleição Panagora", 
            votante: `${result.data.nome}`,
            document: `Olá ${result.data.nome}, seja bem-vindo à eleição Panagora`
        }
        const inserted = await templateModel.create({evento: resultObj.event, votante: resultObj.votante, document: resultObj.document, id_votante: idVotante}) ? true : false;
        response.status(200).json({
            error:false, 
            isInserted: inserted
        });
    }catch(err){
        if(err.response.status){
            response.status(404).json({
                msg: "Votante não encontrado!"
            })
        };
    }
    
}

module.exports.allTemplates = async (request, response) => {
    try{
        const templates = await templateModel.findAll();
        if (templates.length > 0){
            response.status(200).json({error: false, templates:templates})
        }else{
            response.status(404).json({ error: true, message: "Não há templates cadastrados!"});
        }
    }catch(err){
        console.log(err);
    }
}

module.exports.findTemplate = async (request, response) => {
    try{
        const templates = await templateModel.findAll({where: {id: request.params.id}})
        if (templates.length > 0){
            response.status(200).json({ error: false, templates: templates});
        }else{
            response.status(404).json({ error: true, message: "Template não encontrado!"});
        }
    }catch(err){
        console.log(err);
    }
}

module.exports.createNewPdfDocument = async(request, response) => {
    try{
        const idVotante = request.params.id;
        const result = await axios.get(`${process.env.API_BASE_URI}/eventos/7747/votante/${idVotante}`, apiConfig); //5444527
        const template = `
        <center> <h1> Dados do votante (documento) </h1></center>
        <ul>
        <li> <h3>Nome: ${result.data.nome}</h3> </li>
        <li> <h3>Email: ${result.data.email ?? "Não informado"}</h3> </li>
        <li> <h3>Celular: ${result.data.celular ?? "Não informado"}</h3></li>
        <li> <h3>CPF: ${result.data.cpf ?? "Não informado"} </h3></li>
        <li> <h3>Olá ${result.data.nome}, bem vindo(a) à eleição panagora </h3></li> 

        </ul>
        
        `

        const nome = result.data.nome;
        const pdfName = `${nome.split(" ").join("")}${new Date().getTime()}.pdf`

        pdf.create(template, {}).toFile(`./public/pdf/${pdfName}`, (err) => {

            if (err) return response.status(404).json({err: err});
            response.status(201).json({error: false, message: "Documento criado!", link: `http://${process.env.BASEURL}:${process.env.SERVER_PORT}/public/pdf/${pdfName}`});

        })

    }catch(err){
        if(err.response.status){
            response.status(404).json({
                msg: "Votante não encontrado!"
            })
        };
    }
}