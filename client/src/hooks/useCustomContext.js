import { useContext } from 'react';

const useCustomContext = (Context) => {
  const context = useContext(Context); 
  if(!context || !Context)throw new Error("No value detected. A component might have been used outside it's original parent element");  
  return context; 
}

export default useCustomContext