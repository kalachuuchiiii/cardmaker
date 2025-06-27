import { dateFormatter } from '../utils/dateFormatter.js';
import useCustomContext from '../hooks/useCustomContext.js'
import CardContext from '../context/card.js';


const Card = ({ children, card = {}, readonly = false}) => {

  return <CardContext.Provider value={{ card, readonly}} >
    <div readonly = {readonly} className="p-4 w-11/12 rounded-xl text-neutral-200 active:opacity-80 active:scale-102 transition-all duration-200 bg-zinc-800 space-y-2" >
      {children}
    </div>
  </CardContext.Provider>
}

export default Card

Card.Title = ({className = "font-bold active:underline text-lg"}) => {
  const { card, readonly } = useCustomContext(CardContext);

  return <a disabled = {readonly} href={`/card/${card._id}`} className = {className}>{card.title}</a>
}

Card.Description = ({className}) => {
  const { card } = useCustomContext(CardContext);

  return <p className = {className}>{card.description}</p>
}

Card.Author = ({className}) => {
  const { card  } = useCustomContext(CardContext);

  return <p className = {className}>{card.author}</p>
}

Card.Date = ({className}) => {
  const { card  } = useCustomContext(CardContext);
  
  const date = dateFormatter(card.createdAt);

  return <p className = {className}>{date}</p>
}

Card.Content = ({className = "my-4 italic"}) => {
  const { card } = useCustomContext(CardContext);

  return <p className = {className}>{card.content}</p>
}