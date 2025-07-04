const mongoose = require("mongoose"); 

const cardSchema = new mongoose.Schema({
  title: {
    type: String, 
    required: true
  }, 
  description: {
    type: String, 
    required: true
  }, 
  content: {
    type: String, 
    required: true
  },
  author: {
    type: String, 
    required: true
  }, 
}, {timestamps:true}); 

const Card = mongoose.model("Card", cardSchema);

module.exports = Card;