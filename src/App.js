import "./App.css";
import AboutSection from "./components/AboutSection";
import FindUs from "./components/FindUs";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Highlights from "./components/Highlights";
import MenuSection from "./components/MenuSection";
import Navbar from "./components/Navbar";
import ReserveSection from "./components/ReverseSection";

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <Highlights />
      <MenuSection />
      <AboutSection/>
      <ReserveSection/>
      <FindUs/>
      <Footer/>
    </>
  );
}

export default App;
