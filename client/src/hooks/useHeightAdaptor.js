import { useEffect } from 'react';

const useHeightAdaptor = (ref) => {
  
  useEffect(() => {
    const element = ref.current; 
    if(!element)return; 
    
    const adapt = () => {
      element.style.height = "auto"; 
      element.style.height = `${element.scrollHeight}px`; 
    }
    
    element.addEventListener("input", adapt);
    
    return()=>{
      element.removeEventListener("input", adapt)
    }
  }, [ref])
  
}

export default useHeightAdaptor