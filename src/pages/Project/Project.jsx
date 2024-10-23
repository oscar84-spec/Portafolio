/* =================Importando Estilos=============== */
import "../../assets/styles/Project/project.css";
/* =================Importando Componentes===================== */
import CardProject from "./CardProject";
import OtherProject from "./OtherProject";

const Project = () => {
  const projects = [
    {
      id: 3,
      img: "/CRUD.png",
      name: "Ecomerce CRUD",
      linkGithub: "https://github.com/oscar84-spec/Ecommerce",
      linkDemo: "https://ecommerce-seven-beige-79.vercel.app/",
      description:
        "Proyecto de un ecommerce CRUD con React y node js, donde se pueden agregar y editar productos.",
      tags: [
        { id: 1, text: "HTML5" },
        { id: 2, text: "CSS3" },
        { id: 3, text: "JavaScript" },
        { id: 4, text: "React JS" },
        { id: 5, text: "Node JS" },
      ],
    },
    {
      id: 5,
      img: "/easytask.png",
      name: "Clon de Trello",
      linkGithub: "https://github.com/oscar84-spec/easyTask",
      linkDemo: "https://easy-task-lake.vercel.app/",
      description:
        "Un clon de Trello básico con React JS, teniendo un registro de usuarios y un inicio de sesión.",
      tags: [
        { id: 1, text: "HTML5" },
        { id: 2, text: "CSS3" },
        { id: 3, text: "JavaScript" },
        { id: 4, text: "React JS" },
        { id: 5, text: "Node JS" },
      ],
    },
    {
      id: 1,
      img: "/pokeApi.jpg",
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
      id: 2,
      img: "/cashRegister.jpg",
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
      id: 4,
      img: "/ToDo.jpg",
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
