import "./assets/reset.css";
import LandingPage from "./Components/LandingPage/LandingPage";
import Aboutme from "./Components/Aboutme/Aboutme";
import Skills from "./Components/Habilidades/Habilidades";
import Exp from "./Components/Exp/Exp";
import Contacto from "./Components/Contacto/Contacto";
import Footer from "./Components/Footer/Footer";
import Themes from "./Components/Themes/Themes";
import { ThemeProvider } from "styled-components";
import { useState } from "react";

function App() {
  const [theme, setTheme] = useState("light");
  return (
    <>
      <ThemeProvider theme={Themes[theme]}>
        <LandingPage theme={theme} setTheme={setTheme} />
        <Aboutme />
        <Skills />
        <Exp />
        <Contacto />
        <Footer />
      </ThemeProvider>
    </>
  );
}

export default App;
