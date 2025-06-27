
const path = require("path");
const fs = require("fs");

const preloadModels = () => {
const pathName = path.join(__dirname, "..", "model"); 
const files = fs.readdirSync(pathName).filter(f => f.endsWith(".js")); 

const models = files.map((file) => {
  const fullpath = path.join(pathName, file);
  const Model = require(fullpath);
  return Model;
})
}


module.exports = { preloadModels };
