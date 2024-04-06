/* ===============Importando Estilos======================== */
import "../../assets/styles/Project/cardProject.css";
/* ===============Importando Componentes ===================== */
import TagProject from "./TagProject";
import { FaGithubAlt } from "react-icons/fa";
import { IoLinkOutline } from "react-icons/io5";

const CardProject = ({ proyecto }) => {
  const { name, linkGithub, linkDemo, description, tags, img } = proyecto;
  return (
    <div className='cardProject__container'>
      <div className='card__img'>
        <img src={img} alt={name} loading='lazy' />
      </div>
      <div className='description__container'>
        <div className='head'>
          <h2 className='head__name'>{name}</h2>
          <div className='links'>
            <a href={linkGithub}>
              <i className='links__icons'>
                <FaGithubAlt />
              </i>
            </a>
            <a href={linkDemo}>
              <i className='links__icons'>
                <IoLinkOutline />
              </i>
            </a>
          </div>
        </div>
        <div className='paragraph'>
          <p className='paragraph__text'>{description}</p>
        </div>
        <div className='languages'>
          {tags.map((tag) => (
            <TagProject key={tag.id} tag={tag} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default CardProject;
