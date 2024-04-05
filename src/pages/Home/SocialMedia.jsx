/* ====================Importando Estilos========================= */
import "../../assets/styles/Home/socialMedia.css";
/* ====================Importando iconos de react icons=========== */
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";

const SocialMedia = () => {
  return (
    <div className='redes'>
      <a href='https://github.com/oscar84-spec'>
        <i className='redes__icon'>
          <FaGithub />
        </i>
      </a>
      <a href='https://www.linkedin.com/in/oscar-hdz202/'>
        <i className='redes__icon'>
          <FaLinkedin />
        </i>
      </a>
      <a href=''>
        <i className='redes__icon'>
          <FaTwitter />
        </i>
      </a>
    </div>
  );
};

export default SocialMedia;
