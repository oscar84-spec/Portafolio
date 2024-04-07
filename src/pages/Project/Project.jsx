/* =================Importando Estilos=============== */
import "../../assets/styles/Project/project.css";
/* =================Importando Componentes===================== */
import CardProject from "./CardProject";
import OtherProject from "./OtherProject";

const Project = () => {
  const projects = [
    {
      id: 1,
      img: "/src/assets/img/pokeApi.jpg",
      name: "API Pokémon",
      linkGithub: "https://github.com/oscar84-spec/API-Pok-mon",
      linkDemo: "https://oscar84-spec.github.io/API-Pok-mon/",
      description:
        "Proyecto de Certificación de freeCodeCamp donde se consume un API para buscar un Pokémon por su nombre o ID.",
      tags: [
        { id: 1, text: "HTML5" },
        { id: 2, text: "CSS3" },
        { id: 3, text: "JavaScript" },
      ],
    },
    {
      id: 4,
      img: "src/assets/img/cashRegister.jpg",
      name: "Caja Registradora",
      linkGithub: "https://github.com/oscar84-spec/Cash-Register",
      linkDemo: "https://oscar84-spec.github.io/Cash-Register/",
      description:
        "Proyecto de certificación de freeCodeCamp de una caja registradora donde se le devuele el cambio al usuario.",
      tags: [
        { id: 1, text: "HTML5" },
        { id: 2, text: "CSS3" },
        { id: 3, text: "JavaScript" },
      ],
    },
    {
      id: 2,
      img: "src/assets/img/CRUD.png",
      name: "CRUD",
      linkGithub: "https://github.com/oscar84-spec/CRUD",
      linkDemo: "https://crud-smoky-gamma.vercel.app/",
      description:
        "Proyecto de Alura donde se hace un CRUD con la fake API JSON Servery manipulación del DOM.",
      tags: [
        { id: 1, text: "HTML5" },
        { id: 2, text: "CSS3" },
        { id: 3, text: "JavaScript" },
      ],
    },
    {
      id: 3,
      img: "/public/ToDo.jpg",
      name: "To Do",
      linkGithub: "https://github.com/oscar84-spec/Lista-por-hacer",
      linkDemo: "https://oscar84-spec.github.io/Lista-por-hacer/",
      description:
        "Proyecto de Alura donde se hace una lista de tareas para agregar, eliminar y marcar como completada con manipulación del DOM.",
      tags: [
        { id: 1, text: "HTML5" },
        { id: 2, text: "CSS3" },
        { id: 3, text: "JavaScript" },
      ],
    },
  ];
  return (
    <section className='project' id='project'>
      <h1 className='project__title'>Proyectos</h1>
      <div className='project__container'>
        {projects.map((proyecto) => (
          <CardProject key={proyecto.id} proyecto={proyecto} />
        ))}
      </div>
      <OtherProject />
    </section>
  );
};

export default Project;
