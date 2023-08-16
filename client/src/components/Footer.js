import React from "react";
import facebook from '../assets/facebook.png';
import youtube from '../assets/youtube.png';
import instagram2 from '../assets/instagram2.png';
import house from '../assets/house.png';
import contact from '../assets/contact.png';
import google from '../assets/google.png';
import '../index.css'; // Importa el archivo CSS
import '../css/Footer.css'; // Importa el archivo CSS



const Footer = () => {
  return (
    <footer>
      <div className="container-footer-all">
        <h2 className="equipotrabajo">Siguenos y Conoce de Nuestros Trabajos</h2>
        <div className="container-body">
          <div className="colum1">
            <h1>Mas informacion de la compañia</h1>
            <br />
            <p>
              SISTEMAS. <br />
              Empresa dedicada a: <br />
              Desarrollos Informaticos.<br /> Diseños_Graficos & Arquitectonicos.<br /> Venta de Tecnologias.<br />
              Contamos con Profesionales de Etica y Valores, usando la tecnologia como herramienta principal para desarrollar cada uno de nuestro diferentes Proyectos de Trabajos.
            </p>
          </div>

          <div className="colum2">
            <h1>Redes Sociales</h1>
            <div className="row">
              <a href="https://www.facebook.com/sistemasManabi26">
                <img src={facebook} alt="facebook" />
                <label>Siguenos en Facebook</label>
              </a>
            </div>
            <div className="row">
              <a href="https://www.youtube.com/channel/UCqOFWDb8SbCYaq4DXH9QEDw">
                <img  src={youtube} height="120px"  alt="youtube" />
                <label>Siguenos en Youtube</label>
              </a>
            </div>
            <div className="row">
              <a href="https://www.instagram.com/sistemas_manabi26/">
                <img      src={instagram2}   alt="instagram2" />
                <label>Siguenos en Instagram</label>
              </a>
            </div>
          </div>
          <div className="colum3">
            <h1>Informacion Contactos</h1>
            <div className="row2">
              <img   src={house}  alt="Address" />
              <label>Bahia de Caraquez, <br />Manabi Ecuador.</label>
            </div>
            <div className="row2">
              <img   src={contact}    alt="Contact" />
              <label>+593-983-81-6795.</label>
            </div>

            <div className="row2">
              <img    src={google}  alt="Google" />
              <label>ssistems26@gmail.com</label>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
