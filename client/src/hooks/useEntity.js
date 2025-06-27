import fetchApi from '../utils/fetchAPI.js';
import { useState } from 'react';

const useEntity = (entity) => {
  const [isError, setIsError] = useState(false);
  const [errMsg, setErrMsg] = useState("");
  const [isCreating, setIsCreating] = useState(false);
  const [isFetchingList, setIsFetchingList] = useState(false); 
  const [isFetchingOne, setIsFetchingOne] = useState(false);
  const [isDeleting, setIsDeleting] = useState(false);
  const [isUpdating, setIsUpdating] = useState(false);
  
  const clearErrorState = () => {
    setIsError(false);
    setErrMsg("");
  }
  
  const throwAnError = (e) => {
    setErrMsg(e?.message || "Internal Server Error");
    setIsError(true);
    throw e;
  }
  
  const create = async(form) => {
    clearErrorState();
    setIsCreating(true);
    try{
      const res = await fetchApi({
        method: "post",
        route: `/${entity}`, 
        payload: {...form}
      })
      return res;
    }catch(e){
      throwAnError(e)
    }finally{
      setIsCreating(false)
    }
  }
  
  const deleteFn = async(id) => {
    clearErrorState();
    setIsDeleting(true);
    try{
      if(!id)throw new Error("Id is required");
      const res = await fetchApi({
        method: "delete", 
        route: `/${entity}/${id}`
      })
      return res;
    }catch(e){
      throwAnError(e)
    }finally{
      setIsDeleting(false)
    }
  }
  
  const read = async(id) => {
    clearErrorState();
    setIsFetchingOne(true);
    try{
      if(!id)throw new Error("Id is required");
      const res = await fetchApi({
        route: `/${entity}/${id}`
      })
      return res;
    }catch(e){
      throwAnError(e)
    }finally{
      setIsFetchingOne(false)
    }
  }
  
  const update = async(id, form) => {
    clearErrorState();
    setIsUpdating(true);
    try{
      if(!id || !form)throw new Error("id and form is required to update documents");
      const res = await fetchApi({
        method: "put",
        route: `/${entity}/${id}`,
        payload: { update: {...form}}
      })
      return res;
    }catch(e){
      throwAnError(e)
    }finally{
      setIsUpdating(false)
    }
  }
  
  const list = async({pageParam = 1, limit = 5}) => {
   clearErrorState();
    setIsFetchingList(true);
    try{
      const res = await fetchApi({ 
        route: `/list/${entity}?limit=${limit}&page=${pageParam || 1}`
      })
      return res;
    }catch(e){
      throwAnError(e)
    }finally{
      setIsFetchingList(false);
    }
  }
  
  return {
    isUpdating, 
    isDeleting,
    isFetchingOne,
    isFetchingList,
    isError,
    errMsg,
    clearErrorState,
    create, 
    read, 
    update, 
    deleteFn,
    list
  }
  
  
}

export default useEntity