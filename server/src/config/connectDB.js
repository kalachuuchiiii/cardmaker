const mongoose = require("mongoose"); 

exports.connectDB = async() => {
  try{
    const connectionString = process.env.DB_CONNECTION_STRING
    await mongoose.connect(connectionString)
    
  }catch(e){
    console.log(e);
    throw new Error(e);
  }
}