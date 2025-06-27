
exports.create = async(Model, req, res) => {
  const data = await Model.create({...req.body});
  return res.status(200).json({
   success: true, 
  data
  })
}