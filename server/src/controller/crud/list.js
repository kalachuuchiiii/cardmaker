const { getListParams } = require("../../utils/getListParams.js");
const { getNextPage } = require("../../utils/getNextPage.js");

exports.list = async(Model, req, res) => {
  const { page, skip, limit, sort } = getListParams(req);
  const [data, totalDocs] = await Promise.all([
    Model.find().sort({createdAt: sort}).skip(skip).limit(limit), 
    Model.find().countDocuments()
    ])
    
    const { nextPage } = getNextPage({limit, totalDocs, page})
    return res.status(200).json({
     success: true, 
     data, 
     nextPage
    })
}