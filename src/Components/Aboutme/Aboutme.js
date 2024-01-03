import { ContainerAboutme, DivContainer } from "./styles";
import Foto from "./Foto/Foto";
import Titulo from "./Textos/Textos";
import RedesIcons from "./Redes/Redes";
import Sobremi from "./Sobremi/Sobremi";

const Aboutme = () => {
  return (
    <ContainerAboutme id='aboutme'>
      <DivContainer>
        <Foto></Foto>
        <div>
          <Titulo></Titulo>
          <RedesIcons></RedesIcons>
        </div>
      </DivContainer>
      <Sobremi></Sobremi>
    </ContainerAboutme>
  );
};
export default Aboutme;
