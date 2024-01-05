import {
  ContainerAboutme,
  DivContainer,
  TextosDiv,
  ImgCreative,
} from "./styles";
import Foto from "./Foto/Foto";
import Titulo from "./Textos/Textos";
import RedesIcons from "./Redes/Redes";
import Sobremi from "./Sobremi/Sobremi";

const Aboutme = () => {
  return (
    <ContainerAboutme id='aboutme'>
      <DivContainer>
        <Foto></Foto>
        <TextosDiv>
          <Titulo></Titulo>
          <RedesIcons></RedesIcons>
        </TextosDiv>
      </DivContainer>
      <Sobremi></Sobremi>
      <ImgCreative></ImgCreative>
    </ContainerAboutme>
  );
};
export default Aboutme;
