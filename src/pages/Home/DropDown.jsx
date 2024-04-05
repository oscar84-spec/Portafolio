/* ======================Importando iconos de react icons================= */
import { IoIosArrowDropdown } from "react-icons/io";
import { IoCloseCircleOutline } from "react-icons/io5";
/*---------------------- Importando Estilos -------------------------------*/
import "../../assets/styles/Home/dropdown.css";
/* ======================Importando useState============================== */
import { useState } from "react";

const DropDown = () => {
  const [showDropdown, setShowDropdown] = useState(false);
  const toogleShowMenu = () => setShowDropdown(!showDropdown);
  return (
    <>
      <div className='dropdown'>
        <i className='dropdown__icon' onClick={toogleShowMenu}>
          {showDropdown ? <IoCloseCircleOutline /> : <IoIosArrowDropdown />}
        </i>
      </div>
      {showDropdown && (
        <div className='menu__dropdown'>
          <hr />
          <a href='#home' onClick={toogleShowMenu}>
            Inicio
          </a>
          <a href='#about' onClick={toogleShowMenu}>
            Sobre mí
          </a>
          <a href='#project' onClick={toogleShowMenu}>
            Proyectos
          </a>
          <a href='#education' onClick={toogleShowMenu}>
            Educación
          </a>
          <a href='#contact' onClick={toogleShowMenu}>
            Contacto
          </a>
        </div>
      )}
    </>
  );
};

export default DropDown;
