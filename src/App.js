import React from "react";

import About from "./components/About.js";
import Footer from "./components/Footer.js";
import Navbar from "./components/Navbar.js";
import Services from "./components/Services.js";
import Tours from "./components/Tours.js";
import Hero from "./components/Hero.js";

const App = () => {
  console.log("hello");
  console.log("good morning");
  return (
    <div>
      <Navbar />
      <Hero />
      <About />
      <Services />
      <Tours />
      <Footer />
    </div>
  );
};
export default App;
