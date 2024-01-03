import { ContainerIcons, Github, Linkedin, Twitter } from "./styles";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";

const RedesIcons = () => {
  return (
    <ContainerIcons>
      <Github>
        <a href='https://github.com/oscar84-spec'>
          <FaGithub />
        </a>
      </Github>
      <Linkedin>
        <a href='https://www.linkedin.com/in/oscar-ubaldo-hern%C3%A1ndez-salvador-815258149/'>
          <FaLinkedin />
        </a>
      </Linkedin>
      <Twitter>
        <FaTwitter />
      </Twitter>
    </ContainerIcons>
  );
};
export default RedesIcons;
