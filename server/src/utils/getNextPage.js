exports.getNextPage = ({limit, totalDocs, page}) => {
  const totalPages = Math.ceil(totalDocs / limit); 
  const nextPage = page < totalPages ? page + 1 : null;
  
  return { nextPage }
}