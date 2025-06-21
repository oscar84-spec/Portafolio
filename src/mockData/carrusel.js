import { carruselData } from "./carruselData";
const slideTrack = document.querySelector(".tools__slide-track");

const slideTemplate = (data) => `
    <div class="tools__slide">
        <img src="${data.src}" alt="${data.name}" class="tools__logo" />
    </div>
`;

const carruselCards = [...carruselData, ...carruselData]
  .map((data) => slideTemplate(data))
  .join("");
slideTrack.insertAdjacentElement("beforeend", carruselCards);
