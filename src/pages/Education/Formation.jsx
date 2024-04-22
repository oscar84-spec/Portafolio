/* =================Importando iconos de react Icons============= */
import { HiOutlineChevronDoubleRight } from "react-icons/hi";
import { HiOutlineChevronDoubleDown } from "react-icons/hi2";
/* ===========Importando Estilos================================= */
import "../../assets/styles/Education/formation.css";
/* ===============Importando useState ==================== */
import { useState } from "react";

const Formation = ({ form }) => {
  const { name, date, formaciones } = form;
  const [showMore, setShowMore] = useState(false);
  const toogleShowMore = () => setShowMore(!showMore);
  return (
    <div className='formation__container'>
      <div className='progrma'>
        <i className='formation__iconMore' onClick={toogleShowMore}>
          {showMore ? (
            <HiOutlineChevronDoubleDown />
          ) : (
            <HiOutlineChevronDoubleRight />
          )}
        </i>
        <h2 className='formation__name'>
          {name} <span className='formation__date'>{date}</span>
        </h2>
      </div>
      {showMore &&
        formaciones.map((forma) => (
          <div className='formaciones' key={forma.id}>
            <div className='formaciones__container'>
              <li className='formaciones__name'>{forma.nameForm}</li>
              <a href={forma.link} className='link__btn'>
                <button type='button' className='btn__cert'>
                  Certificado
                </button>
              </a>
            </div>
          </div>
        ))}
    </div>
  );
};

export default Formation;
