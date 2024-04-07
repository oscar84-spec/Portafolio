import { LuDownload } from "react-icons/lu";

const DownloadButton = () => {
  const handleDownload = () => {
    // URL del archivo PDF
    const pdfUrl = "/src/assets/OHCV.pdf";

    // Crea un elemento <a> temporal para descargar el archivo
    const link = document.createElement("a");
    link.href = pdfUrl;
    link.download = "Oscar HernándezCV.pdf"; // Nombre que tendrá el archivo descargado
    link.click();
  };

  return (
    <button onClick={handleDownload} className='btn__download'>
      <i className='btn__icon'>
        <LuDownload />
      </i>{" "}
      Descargar CV
    </button>
  );
};

export default DownloadButton;
