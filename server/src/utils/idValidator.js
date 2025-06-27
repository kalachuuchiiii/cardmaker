const mongoose = require("mongoose");

//VALIDATES OBJECT IDS

exports.idValidator = (req) => {
  const id = req?.params?.id;
  if(!id)throw new Error("Object ID can't be missing"); 
  if(!mongoose.Types.ObjectId.isValid(id)){
    throw new Error("Invalid Object ID");
  }
  return id;
}