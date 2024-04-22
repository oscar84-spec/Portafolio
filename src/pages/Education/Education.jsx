/* ====================Importando Componentes===================== */
import Formation from "./Formation";
/* ====================Importando Estilos========================= */
import "../../assets/styles/Education/education.css";

const Education = () => {
  const formations = [
    {
      id: 1,
      name: "Programa Orecle Next Education (ONE) - Alura Latam",
      date: "Sempiembre 2023",
      formaciones: [
        {
          id: 1,
          nameForm: "Formación Front End G5 - ONE",
          link: "https://app.aluracursos.com/emprega-one/profile/ohdz202",
        },
        {
          id: 2,
          nameForm: "Formación HTML y CSS",
          link: "https://app.aluracursos.com/emprega-one/profile/ohdz202",
        },
        {
          id: 3,
          nameForm: "Formación React G5 - ONE",
          link: "https://app.aluracursos.com/emprega-one/profile/ohdz202",
        },
      ],
    },
    {
      id: 2,
      name: "Desarrolo Web - freeCodeCamp",
      date: "Marzo 2024",
      formaciones: [
        {
          id: 1,
          nameForm: "Diseño Web Responsivo",
          link: "https://www.freecodecamp.org/espanol/certification/oscar-spec84/responsive-web-design",
        },
        {
          id: 2,
          nameForm: "Algoritmos y Estructuras de Datos con JavaScript",
          link: "https://www.freecodecamp.org/espanol/certification/oscar-spec84/javascript-algorithms-and-data-structures-v8",
        },
      ],
    },
  ];
  return (
    <section className='education' id='education'>
      <h1 className='education__title'>Educación</h1>
      <div className='container__formation'>
        {formations.map((form) => (
          <Formation key={form.id} form={form} />
        ))}
      </div>
    </section>
  );
};

export default Education;
