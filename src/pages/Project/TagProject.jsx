/* =================Importando Estilos===================== */
import "../../assets/styles/Project/tagProject.css";
const TagProject = ({ tag }) => {
  const { text } = tag;
  return <div className='lang__tag'>{text}</div>;
};

export default TagProject;
