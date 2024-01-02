import { SectionImg, CapaOscura } from "./styles";
import Navbar from "./Navbar/Navbar";
import Presentacion from "./Presentacion/Presentacion";

const LandingPage = () => {
  return (
    <SectionImg>
      <CapaOscura>
        <Navbar />
        <Presentacion />
      </CapaOscura>
    </SectionImg>
  );
};

export default LandingPage;
