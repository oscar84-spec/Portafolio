import { Card, TitleContainer, TituloSkill, IconContainer } from "./styles";

const Tarjeta = (props) => {
  const { skill, icon, Icolor, bgColor } = props;
  return (
    <Card>
      <TitleContainer color={bgColor}>
        <TituloSkill>{skill}</TituloSkill>
      </TitleContainer>
      <IconContainer color={Icolor}>{icon}</IconContainer>
    </Card>
  );
};
export default Tarjeta;
