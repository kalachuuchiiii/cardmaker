const ErrorDisplay = ({retryFn}) => {

return <div className = "w-11/12 flex flex-col gap-2 m-4 text-white/50 text-sm text-center flex">
  <p>Something went wrong. Please try again and reload the page.</p>

<button className = "font-bold text-neutral-200" onClick = {() => window.location.reload()}>Reload</button>
</div>
}

export default ErrorDisplay