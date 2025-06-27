
import { memo } from 'react';
import List from './List.jsx';
import Card from './Card.jsx'
import CardPlaceholder from './CardPlaceholder.jsx';
import ErrorDisplay from './ErrorDisplay.jsx';


const CardList = ({pages, lastElement, isLoading, isError, retryFn}) => {
  
return <div className = "w-full flex flex-col justify-center items-center gap-2">
  <List pages = {pages} render = {(card) => <Card card = {card} >
     <Card.Title/>
     <Card.Description/> 
     <div className = "flex items-center gap-2 text-sm text-white/50">
       <Card.Author/>
       <Card.Date/>
     </div>
    </Card>
    } />
    {
      isError ? <ErrorDisplay /> : isLoading && <CardPlaceholder/>
    }
    <div ref = {lastElement}></div>

</div>
}

export default memo(CardList)