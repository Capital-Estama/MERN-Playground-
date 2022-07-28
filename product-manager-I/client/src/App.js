import { BrowserRouter, Routes, Route } from "react-router-dom"
import "./App.css"
import "bootstrap/dist/css/bootstrap.min.css";
import Dashbord from "./components/Dashbord"
import Detail from "./components/Detail"
import Edit from "./components/Edit"

function App () {
  return (

    <BrowserRouter>

      <Routes>
        <Route path="/" element={<Dashbord />} />
        <Route path="/product/:id" element={<Detail />} />
        <Route path="/edit/:id" element={<Edit />} />
      </Routes>

    </BrowserRouter>

  )
}

export default App


// Routes> 
// gg > Route> BrowserRouter> App> index.js> import { BrowserRouter, Routes, Route } from 'react-router-dom'
//         <Route path="/about" element={<About />} />
//         <Route path="/" element={<Home />} />
// </Routes>
// Main path ="product" exact />
// <Detail path="/product/:id" />