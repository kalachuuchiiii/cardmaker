import CardList from './components/CardList.jsx';
import { Routes, Route, Outlet } from "react-router-dom";
import Homepage from './pages/Homepage.jsx';
import CreateSection from './pages/CreateSection.jsx';
import AboutSection from './pages/AboutSection.jsx';
import CardSection from './pages/CardSection.jsx';


import NavBar from './components/NavBar.jsx';
function App() {
  

  return <div>
    <Routes>
      <Route element = {
        <div className = "space-y-4 w-full flex flex-col items-center justify-center ">
          <NavBar/>
          <div className = "flex justify-center w-full md:w-11/12 lg:w-10/12 xl:w-9/12 ">
                      <Outlet />
          </div>
        </div>
      }>
        <Route path = "/" element = {<Homepage/>} />
        <Route path = "/about" element = {<AboutSection/>} />
        <Route path = "/create" element = {<CreateSection/>} />
        <Route path = "/card/:id" element = {<CardSection/>} />
      </Route>
    </Routes>
  </div>
}

export default App
