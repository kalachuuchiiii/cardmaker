const { idValidator } = require("../../utils/idValidator.js");

exports.deleteFn = async (Model, req, res) => {
  const id = idValidator(req);
  const data = await Model.findByIdAndDelete(id);
  return res.status(200).json({
    success: true,
    data
  })


}