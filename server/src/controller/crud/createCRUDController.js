const { create } = require("./create.js");
const { read } = require("./read.js");
const { update } = require("./update.js");
const { deleteFn } = require("./delete.js")
const { list } = require("./list.js");

const mongoose = require("mongoose");

exports.createCRUDController = (modelName) => {
  const Model = mongoose.model(modelName);
  if(!modelName || !Model)throw new Error(`${Model} is not a valid object model`)
  return {
    create: (req, res) => create(Model, req, res),
    read: (req, res) => read(Model, req, res),
    update: (req, res) => update(Model, req, res),
    delete: (req, res) => deleteFn(Model, req, res), 
    list: (req, res) => list(Model, req, res), 
  }
}