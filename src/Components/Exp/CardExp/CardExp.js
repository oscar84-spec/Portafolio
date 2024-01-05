import {
  DivCard,
  DivImg,
  DivElement,
  ExpTexto,
  ProjectName,
  LinkContainer,
  LinkGit,
  BtnDemo,
} from "./styles";

import { BiLinkExternal } from "react-icons/bi";

const CardExperiencie = (props) => {
  const { img, name, demo, rep } = props;
  return (
    <DivCard>
      <DivImg $img={img}></DivImg>
      <DivElement>
        <div>
          <ExpTexto>Challenge Alura</ExpTexto>
          <ProjectName>{name} </ProjectName>
        </div>
        <LinkContainer>
          <LinkGit href={rep}>Repositorio</LinkGit>
          <BiLinkExternal />
        </LinkContainer>
      </DivElement>
      <a href={demo}>
        <BtnDemo>DEMO</BtnDemo>
      </a>
    </DivCard>
  );
};
export default CardExperiencie;
