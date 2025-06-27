import { useRef, useState, useMemo } from 'react';
import CardForm from '../components/CardForm.jsx';
import useEntity from '../hooks/useEntity.js';
import useCardForm from '../hooks/useCardForm.js';
import LoadingDisplay from '../components/LoadingDisplay.jsx';

const CreateSection = () => {
  const textareaRef = useRef(null);
  const savedCard = useMemo(() => {
    const card = JSON.parse(localStorage.getItem("card"));
    if(card)return card; 
    return null;
  }, [])
  const { handleChange, clearCardForm, cardForm } = useCardForm({initialVal: savedCard, enableLocalStorage: true});
  const { create, isCreating, isError, errMsg } = useEntity('card');
  
  const handleCreate = () => {
    create(cardForm);
    clearCardForm();
    localStorage.setItem("card", null);
  }
  
  

  return <CardForm onSubmit = {handleCreate} form = {cardForm}  onChange = {handleChange}>
    <CardForm.Title />
    <CardForm.Description />
    <CardForm.Content />
    { (isError && errMsg) && <CardForm.Error>
      {errMsg || "Internal Server Error"}
    </CardForm.Error>}
    <div className = "w-full p-2 flex items-center justify-between gap-1">
      <CardForm.Author />
      <CardForm.Submit disabled = {isCreating} >
        <LoadingDisplay color = "black" isLoading = {isCreating}>
          Create Card
        </LoadingDisplay>
      </CardForm.Submit>
    </div>
  </CardForm>
}

export default CreateSection