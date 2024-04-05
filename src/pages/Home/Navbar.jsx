/* ====================Importando Estilos================================ */
import "../../assets/styles/Home/navbar.css";

const Navbar = () => {
  return (
    <nav className='navbar'>
      <a href='#home'>Inicio</a>
      <a href='#about'>Sobre mí</a>
      <a href='#project'>Proyectos</a>
      <a href='#education'>Educación</a>
      <a href='#contact'>Contacto</a>
    </nav>
  );
};

export default Navbar;
