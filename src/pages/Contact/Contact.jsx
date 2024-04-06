/* ============Importando Estilos================= */
import "../../assets/styles/Contact/contact.css";
/* ==============Importando iconos de react Icons============ */
import { CiMail } from "react-icons/ci";
import { FaWhatsapp } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";

import Contacts from "./Contacts";

const Contact = () => {
  const contactsArr = [
    {
      id: 1,
      type: "Email",
      link: "mailto:ohdz202@gmail.com",
      text: "ohdz202@gmail.com",
      icon: <CiMail />,
    },
    {
      id: 2,
      type: "Whatsapp",
      link: "tel:+525578449821",
      text: "+52 55 7844 9821",
      icon: <FaWhatsapp />,
    },
    {
      id: 3,
      type: "Linkedin",
      link: "https://www.linkedin.com/in/oscar-hdz202/",
      text: "Oscar Hernández",
      icon: <FaLinkedin />,
    },
  ];
  return (
    <section className='contact' id='contact'>
      <h1 className='contact__title'>Contácto</h1>
      <div className='contact__container'>
        {contactsArr.map((cont) => (
          <Contacts key={cont.id} cont={cont} />
        ))}
      </div>
    </section>
  );
};

export default Contact;
