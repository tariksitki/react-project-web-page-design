
import {BrowserRouter as Router, Route, Routes} from "react-router-dom"
import Home from "../pages/home/Home";
import About from "../pages/about/About";
import Services from "../pages/services/Services";
import Html from "../pages/html/Html";
import Css from "../pages/Css";
import Logo from "../pages/Logo";


const AppRouter = () => {
  return (
    <Router>
        <Routes>
            <Route path="/" element = {<Home />  } />
            <Route path="/about" element = {<About />  } />
            <Route path="/services" element = {<Services /> } />
            <Route path="/html" element = {<Html />  } />
            <Route path="/css" element = {<Css />  } />
            <Route path="/logo" element = {<Logo />  } />
        </Routes>
    </Router>
  )
}

export default AppRouter;