/* ==========================Importando Estilos====================== */
import "../../assets/styles/About/cardSkill.css";
/* ======================Importando Componentes==================== */
import TagSkill from "./TagSkill";
const CardSkills = ({ card }) => {
  const { icon, subtitle, tags } = card;
  tags.map((tag) => {
    console.log(tag);
  });
  return (
    <div className='card__container'>
      <div className='card__icon'>
        <i className='icon'>{icon}</i>
        <h3 className='card__subtitle'>{subtitle}</h3>
      </div>
      <div className='cardTag'>
        {tags.map((tag) => (
          <TagSkill key={tag.id} tag={tag} />
        ))}
      </div>
    </div>
  );
};

export default CardSkills;
