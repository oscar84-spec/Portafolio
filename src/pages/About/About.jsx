/* ==============Importando Estilos======================= */
import "../../assets/styles/About/About.css";
/* ==============Importando Componentes======================= */
import CardSkills from "./CardSkills";
/* =============Importando iconos de react icons==================== */
import { IoCodeSlash } from "react-icons/io5";
import { FaHtml5 } from "react-icons/fa";
import { FaCss3Alt } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io5";
import { FaReact } from "react-icons/fa";
import { SiTailwindcss } from "react-icons/si";
import { RiSettings5Fill } from "react-icons/ri";
import { TbBrandVscode } from "react-icons/tb";
import { FaFigma } from "react-icons/fa";
import { FaGitAlt } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";

const About = () => {
  const cards = [
    {
      id: 1,
      icon: <IoCodeSlash />,
      subtitle: "Front End",
      tags: [
        { id: 1, iconTag: <FaHtml5 />, text: "HTML5", color: "#e44d26" },
        { id: 2, iconTag: <FaCss3Alt />, text: "CSS3", color: "#25A1E1" },
        {
          id: 3,
          iconTag: <IoLogoJavascript />,
          text: "JavaScript",
          color: "#F0DB4F",
        },
        { id: 4, iconTag: <FaReact />, text: "React JS", color: "#00D8FF" },
        {
          id: 5,
          iconTag: <SiTailwindcss />,
          text: "Tailwind",
          color: "#13B1BB",
        },
      ],
    },
    {
      id: 2,
      icon: <RiSettings5Fill />,
      subtitle: "Tools",
      tags: [
        {
          id: 1,
          iconTag: <TbBrandVscode />,
          text: "VS Code",
          color: "#3C99D4",
        },
        {
          id: 2,
          iconTag: <FaFigma />,
          text: "Figma",
          color: "#f1f9f9",
        },
        {
          id: 3,
          iconTag: <FaGitAlt />,
          text: "Git",
          color: "#F05133",
        },
        {
          id: 4,
          iconTag: <FaGithub />,
          text: "Github",
          color: "#f1f9f9",
        },
      ],
    },
  ];
  return (
    <section className='about' id='about'>
      <h1 className='about__title'>Sobre mí</h1>
      <p className='about__description'>
        Soy una persona dedicada y responsable con una fuerte pasión por el
        desarrollo web. Este campo me permite desafiar mi creatividad,
        adaptabilidad y capacidad para aprender cosas nuevas, comenzando desde
        lo básico y hasta los conceptos más avanzados.
      </p>
      <p className='about__description'>
        {" "}
        Mi objetivo es convertirme en un desarrollador web full-stack mejorando
        y expandiendo constantemente mis habilidades, y ayudando a otros en el
        camino.
      </p>
      <div className='skill__container'>
        <h2 className='skill__subtitle'>Habilidades</h2>
        <div className='parent'>
          {cards.map((card) => (
            <CardSkills key={card.id} card={card} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
