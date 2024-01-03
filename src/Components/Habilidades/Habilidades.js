import { SkillSection, TituloContainer, CardContainer } from "./styles";
import { TituloBlur, TituloNormal } from "../Aboutme/Sobremi/styles";
import Tarjeta from "./Card/Card";
/* Importando los iconos de react */
import { FaHtml5 } from "react-icons/fa";
import { FaCss3Alt } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io5";
import { RiReactjsLine } from "react-icons/ri";
import { FaPython } from "react-icons/fa";
import { FaGitAlt } from "react-icons/fa";

const Skills = () => {
  return (
    <SkillSection id='skill'>
      <TituloContainer>
        <TituloBlur>HABILIDADES</TituloBlur>
        <TituloNormal>Habilidades</TituloNormal>
      </TituloContainer>
      {/* Card para las skills */}
      <CardContainer>
        <Tarjeta
          skill='HTML'
          icon={<FaHtml5 />}
          Icolor='#f57d31'
          bgColor='#e54c21'
        />
        <Tarjeta
          skill='CSS'
          icon={<FaCss3Alt />}
          Icolor='#28ABDF'
          bgColor='#0A75BD'
        />
        <Tarjeta
          skill='JS'
          icon={<IoLogoJavascript />}
          Icolor='#FFDE25'
          bgColor='#E6C72F'
        />
        <Tarjeta
          skill='REACT'
          icon={<RiReactjsLine />}
          Icolor='#00D8FF'
          bgColor='#18BCEE'
        />
        <Tarjeta
          skill='PYTHON'
          icon={<FaPython />}
          Icolor='#356F9F'
          bgColor='#FFE56C'
        />
        <Tarjeta
          skill='GIT'
          icon={<FaGitAlt />}
          Icolor='#E54D26'
          bgColor='#F24F29'
        />
      </CardContainer>
    </SkillSection>
  );
};
export default Skills;
