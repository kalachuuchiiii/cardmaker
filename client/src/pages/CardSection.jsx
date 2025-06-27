import CardManager from '../components/CardManager.jsx';
import { useQuery } from '@tanstack/react-query';
import useEntity from '../hooks/useEntity.js';
import ErrorDisplay from '../components/ErrorDisplay.jsx';
import { useParams } from 'react-router-dom';

const CardPage = () => {
  const { id } = useParams();
  const { read } = useEntity("card");
  const { data: card, isError, isLoading} = useQuery({
    queryKey: ["card"], 
    queryFn: () => read(id),
    retry: false
  })
  
  if(isLoading)return <p>Loading...</p>
  if(isError)return <ErrorDisplay/>

return <div>
  <CardManager card = {card?.data} />
</div>
}

export default CardPage