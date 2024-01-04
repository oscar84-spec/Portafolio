import { FooterContainer, TextoFooter, TextoSpan, Iconos } from "./styles";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";

const Footer = () => {
  return (
    <FooterContainer>
      <TextoFooter>
        Desarrollado por: <TextoSpan>Oscar Hernández</TextoSpan>
      </TextoFooter>
      <TextoFooter>2024 </TextoFooter>
      <Iconos>
        <a href='https://github.com/oscar84-spec'>
          <FaGithub />
        </a>
        <a href='https://www.linkedin.com/in/oscar-ubaldo-hern%C3%A1ndez-salvador-815258149/'>
          <FaLinkedin />
        </a>
        <FaTwitter />
      </Iconos>
    </FooterContainer>
  );
};
export default Footer;
