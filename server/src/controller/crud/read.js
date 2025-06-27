const { idValidator } = require("../../utils/idValidator.js");


exports.read = async(Model, req, res) => {
  const id = idValidator(req);
  const data = await Model.findById(id);
  return res.status(200).json({
   success: true, 
  data
  })
}