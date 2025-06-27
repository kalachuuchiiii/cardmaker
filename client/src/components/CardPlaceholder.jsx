const CardPlaceHolder = ({count = 3}) => {


return <div className = "w-11/12  space-y-2">
  {
    Array(count).fill("").map((_,i) => {
      return <div key = {i} className = " p-4 gap-2 rounded-xl bg-zinc-800 grid grid-cols-10 grid-rows-3  animate-pulse">
  <div className = "row-start-1 p-2 rounded bg-zinc-600 row-span-1 col-start-1 col-span-6"></div>
  <div className = "rounded bg-zinc-600 row-start-2 row-span-1 col-start-1 col-span-9"></div>
  <div className = "rounded bg-zinc-600 row-start-3 row-span-1 col-start-1 col-span-8"></div>
</div>
    })
  }
</div>
}

export default CardPlaceHolder