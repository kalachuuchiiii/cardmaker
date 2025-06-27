import CardFormContext from '../context/cardForm.js';
import useCustomContext from '../hooks/useCustomContext.js';
import useHeightAdaptor from '../hooks/useHeightAdaptor.js';

import { useRef } from 'react';

const CardForm = ({children, readOnly = false, onSubmit, onChange, form}) => {
  
  const handleFormSubmit = (e) => {
    e.preventDefault(); 
    const { target } = e;
    if(target.checkValidity()){
    onSubmit();
    }
  }
  
  return <CardFormContext.Provider value = {{
    onChange, 
    form,
    readOnly
  }} > 
  <form onSubmit = {handleFormSubmit} className = "w-full text-neutral-200 space-y-1 p-2">
   {children}
  </form>
  </CardFormContext.Provider>
}

CardForm.Title = () => {
  const { form, onChange, readOnly } = useCustomContext(CardFormContext)
  
  return <input required minLength = {10} maxLength = {100} readOnly = {readOnly} onChange = {onChange} value = {form.title}  name = "title"  placeholder="Title" className = "w-full overflow-x-auto text-xl p-3" />
}

CardForm.Description = () => {
  const { form, onChange, readOnly } = useCustomContext(CardFormContext)
  const descRef = useRef(null);
  
  useHeightAdaptor(descRef);
  
  return <textarea required minLength = {10} maxLength = {100} readOnly = {readOnly} ref = {descRef} onChange = {onChange} value = {form.description} name = "description"  placeholder="Description" className = "w-full p-2 bg-zinc-800 rounded-xl" rows = {3}  />
}
CardForm.Content = () => {
  const { form, onChange, readOnly } = useCustomContext(CardFormContext)
  const contentRef = useRef(null);
  
  useHeightAdaptor(contentRef)
  
    return <textarea required minLength = {10} maxLength = {100} readOnly = {readOnly} ref = {contentRef} onChange = {onChange} value = {form.content} name = "content" placeholder="Content" className = "w-full p-2 bg-zinc-800 rounded-xl" rows = {7}  />
}

CardForm.Author = ({className = "w-full overflow-x-auto p-2 text-sm text-white/50" }) => {
  const { form, onChange, readOnly } = useCustomContext(CardFormContext)
  
   return <input required minLength = {10} maxLength = {100} readOnly = {readOnly} value = {form.author} onChange = {onChange}  name = "author" placeholder="Author" className = {className} />
}

CardForm.Error = ({children, className = "text-red-400 text-sm px-2 py-1"}) => {
  return <p className = {className}>{children}</p>
}

CardForm.Submit = ({children, disabled = false, className = " active:opacity-80 bg-neutral-200 truncate w-40 h-10 text-zinc-900 rounded-xl p-2" }) => {
  
  return <button type = "submit" disabled = {disabled} className = {className} >{children}</button>
}


export default CardForm;
