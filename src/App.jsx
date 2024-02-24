import "./App.css";
import Header from "./components/header/Header";
import Home from "./components/home/Home";
import About from "./components/about/About";

import Services from "./components/services/Services";
import Qualification from "./components/qualification/Qualification";
import Work from "./components/work/Work";
import Contact from "./components/contact/Contact";
import Footer from "./components/footer/Footer";
import ScrollUp from "./components/scrollup/ScrollUp";
import Preloader from "./components/preloader/Preloader";

function App() {

  return (
    <>
      <Preloader/>
      <Header />
      <main className="main">
        <Home />
        <About />
        
        <Services />
        {/* <Testimonial/> */}
        <Qualification />
        {/* <Work /> */}
        <Contact />
      </main>
      <Footer />
      <ScrollUp />
    </>
  );
}

export default App
