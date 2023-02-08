import { BrowserRouter, Route, Routes } from "react-router-dom"
import Navbar from "./components/Navbar"
import Home from "./pages/Home"
import Projects from "./pages/Projects"



function App() {

  return (
    <>
    <Navbar/>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path="/projects" element={<Projects/>} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
