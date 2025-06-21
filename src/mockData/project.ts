export type Project = {
  title: string;
  imgPath: string;
  description: string;
  demoLink: string;
  nota: string;
};

export const projects: Project[] = [
  {
    title: "Ecommerce website",
    imgPath: "/projects/ecommerce.webp",
    description: "Un Ecommerce hecho con React y Express",
    demoLink: "https://ecommerce-seven-beige-79.vercel.app/",

    nota: "",
  },
  {
    title: "Country Flags",
    imgPath: "/projects/countryflags.webp",
    description: "Una aplicación de paises hecho con React",
    demoLink: "https://countries-flags-five.vercel.app/",

    nota: "",
  },
  {
    title: "Trello Clone",
    imgPath: "/projects/taskflow.webp",
    description: "Un clon de trello hecho con React, Tailwind y Express",
    demoLink: "https://clone-trello-ten.vercel.app/",

    nota: "La API de este proyecto tiene cold start de entre 15 y 40 segundos, así que puede tardar un poco en cargarse",
  },
];
