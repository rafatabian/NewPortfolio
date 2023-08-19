import "./App.css"
import React, {lazy, Suspense} from "react";
import { HashRouter as Router, Routes, Route } from "react-router-dom";
import { ManageGeneral } from "./Contexts/GeneralC";

const Home = lazy(() => import("./Containers/Home/Home"))
const Navbar = lazy(()=> import("./Components/Navbar/Navbar"))
const About = lazy(() => import("./Components/About/About"))
const Projects = lazy(() => import("./Containers/Projects/Projects"))
const Contact = lazy(() => import("./Components/Contact/Contact"))

const App = () => {
  
 return (
  <div className="app_container">
    <ManageGeneral>
    <Suspense fallback={<div id="loading"><h1>Loading...</h1></div>}>
      <Router>
        <Navbar />
        <Routes>
          
          <Route path="/" element={<Home />}/>
          <Route path="/about" element={<About />}/>
          <Route path="/projects" element={<Projects />}/>
          <Route path="/contact" element={<Contact />} />

        </Routes>
      </Router>
    </Suspense>
    </ManageGeneral>
  </div>
  );
}

export default App


