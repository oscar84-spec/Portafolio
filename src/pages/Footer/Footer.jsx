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
          <a href=''>
            <i className='icons__footer'>
              <FaGithub />
            </i>
          </a>
          <a href=''>
            <i className='icons__footer'>
              <FaLinkedin />
            </i>
          </a>
          <a href=''>
            <i className='icons__footer'>
              <FaTwitter />
            </i>
          </a>
        </div>
        <h1 className='developer'>
          Desarrollado <span className='footer__name'>Oscar Hernández</span>
        </h1>
      </div>
    </footer>
  );
};

export default Footer;
