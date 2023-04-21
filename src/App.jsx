import './App.css'
import {BrowserRouter, BrowserRouter as Router, Link, Route, Routes} from "react-router-dom";

import {Home} from "./pages/Home.jsx";
import {Empresa} from "./pages/Empresa.jsx";
import {Contato} from "./pages/Contato.jsx";
import {NavBar} from "./components/layouts/NavBar.jsx";
import {Footer} from "./components/layouts/Footer.jsx";

function App() {
    return (
        <Router>
            <NavBar/>
            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="empresa" element={<Empresa/>}/>
                <Route path="contato" element={<Contato/>}/>
            </Routes>
            <Footer/>
        </Router>
    )
}

export default App
