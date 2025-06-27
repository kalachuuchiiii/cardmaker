

import Card from './Card.jsx';
import { useState, memo } from 'react';
import CardForm from './CardForm.jsx'
import useCardForm from '../hooks/useCardForm.js';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import LoadingDisplay from './LoadingDisplay.jsx';
import useEntity from '../hooks/useEntity.js'

const CardManager = ({ card }) => {
  const queryClient = useQueryClient();
  const { deleteFn, isDeleting, update, isUpdating, isError, errMsg } = useEntity("card");
  const [isEditing, setIsEditing] = useState(false);

  const { handleChange, cardForm, setCardForm } = useCardForm({initialVal: card, enableLocalStorage: false});
  
  const updateMutation = useMutation({
    mutationFn: (newCard) => update(card?._id, newCard), 
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["card"]
      })
      setIsEditing(false);
    }, 
  })

  const handleDelete = async() => {
    await deleteFn(card?._id);
    window.location.href = "/"
  }

  return <div className="w-full flex-col flex justify-center items-center">
    <CardForm readOnly={!isEditing} form={cardForm} onSubmit = {() => updateMutation.mutate(cardForm)} onChange={handleChange}>
      <CardForm.Title />
      <CardForm.Description />
      <CardForm.Content />
      <CardForm.Author/>
      {
        (isError && errMsg) && <CardForm.Error>
          {errMsg || "Internal Server Error"}
        </CardForm.Error>
      }
      <div className="flex w-11/12 p-2 justify-start items-center gap-6 text-sm my-5">
        <div>
          {
            isEditing ? <div className="flex gap-3 ">
              <button onClick={() => setIsEditing(false)}>Cancel</button>
              <CardForm.Submit disabled = {isUpdating} className="font-bold">
                <LoadingDisplay isLoading = {isUpdating}>
                  Save
                </LoadingDisplay>
              </CardForm.Submit>
            </div> : <button onClick={() => setIsEditing(true)}>Edit</button>
          }
        </div>
        <button disabled = {isDeleting} onClick={handleDelete} className="text-red-400">
          <LoadingDisplay isLoading = {isDeleting}>
            Delete
          </LoadingDisplay>
        </button>
      </div>
    </CardForm>
  </div>
}

export default memo(CardManager)