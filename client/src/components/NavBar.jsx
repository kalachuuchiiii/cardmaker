const NavBar = () => {


return <div className = "flex w-full items-center text-neutral-200 top-0 text-sm justify-between px-3 rounded-b-xl sticky py-6 bg-zinc-800/80">
  <a className = "text-base" href = "/">Cardmaker</a> 
  <nav className = "flex text-neutral-200/50 gap-3 items-center">
    <a className = "active:underline" href = "/about">About</a>
    <a className = "active:underline" href = "/create">Create</a>
  </nav>
</div>
}

export default NavBar