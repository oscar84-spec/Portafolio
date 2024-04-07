/* =======================Importando Estilos============================ */
import "../../assets/styles/Home/home.css";
/* =======================Importando Componentes======================= */
import DropDown from "./DropDown";
import Navbar from "./Navbar";
/* ======================Importando iconos de react icons================ */
import { LuDownload } from "react-icons/lu";
import SocialMedia from "./SocialMedia";
import DownloadButton from "./DownloadButton";

const Home = () => {
  return (
    <section className='home' id='home'>
      <header className='header'>
        <DropDown />
        {/* ==========Visible sólo a partir de 768px=============== */}
        <Navbar />
      </header>
      <div className='presentation__container'>
        <h1 className='presentation__name'>
          Oscar{" "}
          <span className='presentation__name presentation__name--accent'>
            {" "}
            Hernández
          </span>
        </h1>
        <h3 className='presentation__job'>Desarrollador Web Front End</h3>
        <div className='moon'></div>
      </div>
      {/* <a
        href='https://drive.google.com/file/d/1lNoWe382uh8A-NiLlNNAaJiUqKKc5KGi/view?usp=drive_link'
        download='Oscar Hernández CV.pdf'
      >
        <button type='button' className='btn__download'>
          <i className='btn__icon'>
            <LuDownload />
          </i>{" "}
          Descargar CV
        </button>
      </a> */}
      <DownloadButton />
      <SocialMedia />
    </section>
  );
};

export default Home;
