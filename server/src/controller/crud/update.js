const { idValidator } = require("../../utils/idValidator.js");

exports.update = async(Model, req, res) => {
  const id = idValidator(req);
  const { update = null } = req.body;
  if(!update)throw new Error("Expects an update object but did not provided one");
  const data = await Model.findByIdAndUpdate(id, { ...update }, {new: true}); 
  return res.status(200).json({
   success: true, 
  data
  })
}