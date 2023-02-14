import { BrowserRouter, Route, Routes } from "react-router-dom"
import Navbar from "./components/Navbar"
import Home from "./pages/Home"
import Project from "./pages/Project"
import Projects from "./pages/Projects"



function App() {

  return (
    <>
      <BrowserRouter>
          <Navbar/>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path="/projects" element={<Projects/>} />
          <Route path="/projects/:id" element={<Project/>}/>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
