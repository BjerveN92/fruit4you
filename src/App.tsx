import { Routes, Route } from "react-router-dom";

import Home from "./pages/home";
import About from "./pages/about";
import Fruits from "./pages/fruits"; // lista på frukterna
import Contact from "./pages/contact";

import Navbar from "./components/navbar";


function App() {
  return (

    <>
        <Navbar>
        </Navbar>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/about" element={<About/>}/>
        <Route path="/fruits" element={<Fruits/>}/>
        <Route path="/contact" element={<Contact/>}/>
      </Routes>
    </>
  );
}

export default App;