import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
/* ========Importando Estilos ================== */
import "../../assets/styles/Footer/footer.css";

const Footer = () => {
  return (
    <footer className='footer'>
      <hr />
      <div className='flex'>
        <div className='iconFooter'>
          <a href='https://github.com/oscar84-spec' target='_blank'>
            <i className='icons__footer'>
              <FaGithub />
            </i>
          </a>
          <a href='https://www.linkedin.com/in/oscar-hdz202/'>
            <i className='icons__footer' target='_blank'>
              <FaLinkedin />
            </i>
          </a>
          <a href='' target='_blank'>
            <i className='icons__footer'>
              <FaTwitter />
            </i>
          </a>
        </div>
        <h1 className='developer'>
          Desarrollado por:{" "}
          <span className='footer__name'>Oscar Hernández</span>
        </h1>
      </div>
    </footer>
  );
};

export default Footer;
