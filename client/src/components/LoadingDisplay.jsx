import { MoonLoader } from 'react-spinners'

const LoadingDisplay = ({children, className, isLoading, color = "white"}) => {


return <div className = "w-full truncate flex justify-center items-center">
  {
      isLoading ? <MoonLoader color = {color} size = "20" /> : children
  }
</div>
}

export default LoadingDisplay