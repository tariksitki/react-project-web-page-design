
import {BrowserRouter as Router, Route, Routes} from "react-router-dom"
import Home from "../pages/Home";
import About from "../pages/About";
import Services from "../pages/Services";
import Html from "../pages/Html";
import Css from "../pages/Css";
import Logo from "../pages/Logo";


const AppRouter = () => {
  return (
    <Router>
        <Routes>
            <Route path="/" element = {<Home />  } />
            <Route path="/about" element = {<About />  } />
            <Route path="/services" element = {<Services />  } />
            <Route path="/html" element = {<Html />  } />
            <Route path="/css" element = {<Css />  } />
            <Route path="/logo" element = {<Logo />  } />
        </Routes>
    </Router>
  )
}

export default AppRouter;