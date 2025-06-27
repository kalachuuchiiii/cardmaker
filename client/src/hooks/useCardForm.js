import { useCallback, useState, useEffect } from 'react';

const initialValue = {
  author: "", 
  content: "", 
  description: "", 
  title: ""
}

const useCardForm = ({initialVal = null, enableLocalStorage = false}) => {
const [cardForm, setCardForm] = useState(initialVal || initialValue)

useEffect(() => {
  setCardForm(initialVal || initialValue)
}, [initialVal])

  useEffect(() => {
    if(enableLocalStorage){
      localStorage.setItem("card", JSON.stringify(cardForm));
    }
}, [cardForm, enableLocalStorage]);

const handleChange = useCallback((e) => {
  const { name, value } = e.target;
  setCardForm(prev => ({...prev, [name]: value}))
}, [])

const clearCardForm = () => {
  setCardForm(initialValue);
}

return {
  cardForm, 
  setCardForm, 
  clearCardForm,
  handleChange
}

}

export default useCardForm