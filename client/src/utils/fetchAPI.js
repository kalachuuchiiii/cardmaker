import axios from "axios";
const httpMethods = ["post","get","put","patch","delete"];

const fetchApi = async({method = "get", route, payload}) => {
  try{
    method = method.toLowerCase().trim(); 
    if(!httpMethods.includes(method)){
      throw new Error(`${method} is not a valid HTTP Method`);
    }
    
    const apiUrl = `${import.meta.env.VITE_SERVER_URL}${route}`
    
    if(method === "get" || method === "delete"){
      const res = await axios[method](apiUrl);
      console.log(route, res.data);
      return res.data;
    }
    
     const res = await axios[method](apiUrl, {...payload});
     console.log(route, res.data);
    return res.data;
  }catch(e){
    console.log(e);
    throw e;
  }
}

export default fetchApi;