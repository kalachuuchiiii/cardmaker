import CardList from '../components/CardList.jsx';
import useEntity from '../hooks/useEntity.js';
import { useInView } from 'react-intersection-observer';
import { useInfiniteQuery } from '@tanstack/react-query';
import { useEffect } from 'react';

const Homepage = () => {
const { list } = useEntity("card");
const { data, status, isFetching, fetchNextPage, hasNextPage, isError } = useInfiniteQuery({
  queryKey: ["cards"], 
  queryFn: list, 
  initialPageParam: 1, 
  getNextPageParam: (lastPage) => lastPage.nextPage
})

const { ref, inView } = useInView();

useEffect(() => {
  if(hasNextPage && inView && !isFetching){
    fetchNextPage();
  }
}, [inView, hasNextPage, isFetching])

return <div className = "w-full flex items-center justify-center pb-10" >

     <CardList lastElement = {ref} isLoading = {isFetching} isError = {isError}  pages = {data?.pages} retryFn = {() => fetchNextPage()}/>
</div>
}

export default Homepage