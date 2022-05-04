const express = require("express");
const { generateDocument, allTemplates, findTemplate, createNewPdfDocument } = require("../controllers/document.controller");
const documentRouter = express.Router();

documentRouter.get("/generate/:idVotante", generateDocument);
documentRouter.get("/findAllTemplates", allTemplates);
documentRouter.get("/findTemplate/:id", findTemplate);
documentRouter.get("/createNewDocument/:id", createNewPdfDocument);

module.exports = documentRouter;