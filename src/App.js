import "./assets/reset.css";
import LandingPage from "./Components/LandingPage/LandingPage";
import Aboutme from "./Components/Aboutme/Aboutme";
import Skills from "./Components/Habilidades/Habilidades";
import Exp from "./Components/Exp/Exp";
import Contacto from "./Components/Contacto/Contacto";
import Footer from "./Components/Footer/Footer";

function App() {
  return (
    <>
      <LandingPage />
      <Aboutme />
      <Skills />
      <Exp />
      <Contacto />
      <Footer />
    </>
  );
}

export default App;
