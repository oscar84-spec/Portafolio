import {
  ContainerIcon,
  MenuContainer,
  LinkLi,
  LinkInterno,
  DivMenu,
  Nombre,
} from "./styles";
import { RxHamburgerMenu } from "react-icons/rx";

const Menu = (props) => {
  const { toogleMenu } = props;
  return (
    <div>
      <ContainerIcon onClick={toogleMenu}>
        <RxHamburgerMenu />
      </ContainerIcon>
      <DivMenu>
        <div>
          <Nombre>Oscar Hernández</Nombre>
        </div>
        <MenuContainer>
          <ul>
            <LinkLi>
              <LinkInterno href='#home'>Inicio</LinkInterno>
              <LinkInterno href='#aboutme'>Sobre mi</LinkInterno>
              <LinkInterno href='#skill'>Habilidades</LinkInterno>
              <LinkInterno href='#exp'>Experiencia</LinkInterno>
              <LinkInterno href='#contacto'>Contacto</LinkInterno>
            </LinkLi>
          </ul>
        </MenuContainer>
      </DivMenu>
    </div>
  );
};
export default Menu;
