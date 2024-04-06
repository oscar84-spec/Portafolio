/* ===================Importando Estilos========================== */
import "../../assets/styles/Project/otherProject.css";
/* ===================Importando Componentes====================== */
import OtherProjectCard from "./OtherProjectCard";

const OtherProject = () => {
  const otros = [
    {
      id: 1,
      name: "Palíndromo",
      description:
        "Proyecto de Certificación de freeCodeCamp donde se recibe una cadena y se devuelve si es un palíndromo o no.",
      linkGithub: "https://github.com/oscar84-spec/Palindromo",
      linkDemo: "https://oscar84-spec.github.io/Palindromo/",
      tags: [
        { id: 1, text: "HTML5" },
        { id: 2, text: "CSS3" },
        { id: 3, text: "JavaScript" },
      ],
    },
    {
      id: 2,
      name: "Decimal a Romano",
      description:
        "Proyecto de Certificación de freeCodeCamp donde se recibe un número decimal y se devuelve su representación en romano.",
      linkGithub: "https://github.com/oscar84-spec/Decimal-a-Romano",
      linkDemo: "https://oscar84-spec.github.io/Decimal-a-Romano/",
      tags: [
        { id: 1, text: "HTML5" },
        { id: 2, text: "CSS3" },
        { id: 3, text: "JavaScript" },
      ],
    },
    {
      id: 3,
      name: "Encriptador",
      description:
        "Proyecto de Alura donde se recibe una cadena y se devuelve la cadena encriptada.",
      linkGithub: "https://github.com/oscar84-spec/Encriptador",
      linkDemo: "https://oscar84-spec.github.io/Encriptador/",
      tags: [
        { id: 1, text: "HTML5" },
        { id: 2, text: "CSS3" },
        { id: 3, text: "JavaScript" },
      ],
    },
  ];
  return (
    <div className='other'>
      <h2 className='other__title'>Otros Proyectos</h2>
      <div className='other__container'>
        {otros.map((otro) => (
          <OtherProjectCard key={otro.id} otro={otro} />
        ))}
      </div>
    </div>
  );
};

export default OtherProject;
