import React from "react";
import Navbar from "./component/Navbar";
import Hero from "./component/Hero";
import About from "./component/About"; 
import Technologies from "./component/Technologies";
import Experience from "./component/Experience";
import Projects from "./component/Projects";
import Contact from "./component/Contact";

const App = () => {
  return (
    <div>
      <div className=" h-full w-full items-center px-5 py-24 [background:radial-gradient(125%_125%_at_50%_10%,#000_40%,#63e_100%)]">
        <Navbar />
        <Hero />
        <About />
        <Technologies />
        <Experience/>
        < Projects/>
        < Contact />
      </div>
    </div>
  );
};

export default App;
