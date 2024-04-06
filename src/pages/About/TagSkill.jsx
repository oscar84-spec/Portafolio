/* ====================Importando Estilos========================= */
import "../../assets/styles/About/tagSkill.css";
const TagSkill = ({ tag }) => {
  const { iconTag, text, color } = tag;
  return (
    <div className='tagContainer'>
      <i className='cardTag__icon' style={{ color: color }}>
        {iconTag}
      </i>
      <p className='cardTag__name' style={{ color: color }}>
        {text}
      </p>
    </div>
  );
};

export default TagSkill;
