/* ==========================Importando iconos de react icons================ */
import { IoIosArrowDropdown } from "react-icons/io";
import { IoIosCloseCircleOutline } from "react-icons/io";
import { FaRegFolder } from "react-icons/fa";
import { FaRegFolderOpen } from "react-icons/fa";
import { FaGithubAlt } from "react-icons/fa";
import { IoLinkOutline } from "react-icons/io5";
/* ==========================Importando Estilos=================== */
import "../../assets/styles/Project/otherProjectCard.css";
/* ==========================Importando useState================== */
import { useState } from "react";
import TagProject from "./TagProject";

const OtherProjectCard = ({ otro }) => {
  const { name, description, linkgithub, linkDemo, tags } = otro;
  const [showDescription, setShowDescription] = useState(false);
  const toogleDescription = () => setShowDescription(!showDescription);
  return (
    <>
      <div
        className='otroProyecto'
        style={
          showDescription
            ? { borderBottomRightRadius: 0, marginBottom: 0 }
            : { borderBottomRightRadius: 10, marginBottom: 20 }
        }
      >
        <i className='otroProyecto__iconDropDown' onClick={toogleDescription}>
          {showDescription ? (
            <IoIosCloseCircleOutline />
          ) : (
            <IoIosArrowDropdown />
          )}
        </i>
        <div className='otroProyecto__name'>
          <i className='iconFolder'>
            {showDescription ? <FaRegFolderOpen /> : <FaRegFolder />}
          </i>
          <h3 className='nameProject'>{name}</h3>
        </div>
      </div>
      {showDescription && (
        <div
          className='moreDescription'
          style={showDescription ? { marginBottom: 20 } : { marginBottom: 0 }}
        >
          <div className='moreDescription__links'>
            <a href={linkgithub}>
              <i className='moreDescription__icons'>
                <FaGithubAlt />
              </i>
            </a>
            <a href={linkDemo}>
              <i className='moreDescription__icons'>
                <IoLinkOutline />
              </i>
            </a>
          </div>
          <p className='moreDescription__description'>{description}</p>
          <div className='languages'>
            {tags.map((tag) => (
              <TagProject key={tag.id} tag={tag} />
            ))}
          </div>
        </div>
      )}
    </>
  );
};

export default OtherProjectCard;
