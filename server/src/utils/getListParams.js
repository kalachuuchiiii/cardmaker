exports.getListParams = (req) => {
  let { page = 1, limit = 10, sort = -1} = req.query;
  page = parseInt(page); 
  limit = parseInt(limit);
  sort = parseInt(sort);
  const skip = (page - 1) * limit;
  
  return{
    page, 
    limit,
    skip,
    sort
  }
}