import { ContainerIcon } from "./styles";
import { RxHamburgerMenu } from "react-icons/rx";

const Menu = (props) => {
  const { toogleMenu } = props;
  return (
    <ContainerIcon onClick={toogleMenu}>
      <RxHamburgerMenu />
    </ContainerIcon>
  );
};
export default Menu;
