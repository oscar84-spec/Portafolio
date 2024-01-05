import { SectionImg, CapaOscura } from "./styles";
import Navbar from "./Navbar/Navbar";
import Presentacion from "./Presentacion/Presentacion";

const LandingPage = ({ theme, setTheme }) => {
  return (
    <SectionImg id='home'>
      <CapaOscura>
        <Navbar theme={theme} setTheme={setTheme} />
        <Presentacion />
      </CapaOscura>
    </SectionImg>
  );
};

export default LandingPage;
