import { ContainerNavbar, EnlacesContainer, Enlance } from "./styles";
import Menu from "../Menu/Menu";
import Switch from "../Switch/Switch";
import { useState } from "react";

const Navbar = ({ theme, setTheme }) => {
  /* Recibimos el theme desde Langind page */

  /* Usamos un hook para poder mostrar y ocultar el menú */
  const [visible, setVisible] = useState(false);

  const toogleMenu = () => {
    setVisible(!visible);
    OcultarMenu();
  };

  const [ocultar, setOcultar] = useState(true);

  const OcultarMenu = () => {
    setOcultar(!ocultar);
  };
  return (
    <ContainerNavbar>
      <Menu toogleMenu={toogleMenu} />
      {visible && (
        <EnlacesContainer onClick={toogleMenu}>
          <Enlance href='#home'>Inicio</Enlance>
          <Enlance href='#aboutme'>Sobre mi</Enlance>
          <Enlance href='#skill'>Habilidades</Enlance>
          <Enlance href='#exp'>Experiencia</Enlance>
          <Enlance href='#contacto'>Contacto</Enlance>
        </EnlacesContainer>
      )}
      <Switch theme={theme} setTheme={setTheme} />
    </ContainerNavbar>
  );
};
export default Navbar;
