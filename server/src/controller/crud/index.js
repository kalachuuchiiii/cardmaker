const { createCRUDController } = require("./createCRUDController.js"); 
const mongoose = require("mongoose");

const entityControllers = {};

 mongoose.modelNames().map(name => {
entityControllers[name] = createCRUDController(name)
})

module.exports = entityControllers;