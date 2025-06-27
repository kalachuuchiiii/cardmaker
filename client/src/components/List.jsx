
const List = ({ pages, render }) => {

  return <div className="w-full flex flex-col items-center justify-center gap-2">
    {
      pages?.length > 0 && pages.map((query) => {
        return <div className="w-full flex flex-col items-center justify-center  gap-2  ">
          {
            query?.data?.length > 0 && query.data.map((item) => render(item))
          }
        </div>
      })
    }
  </div>
}

export default List