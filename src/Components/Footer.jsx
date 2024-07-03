// eslint-disable-next-line no-unused-vars
import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { FaInstagram } from "react-icons/fa";
import { FaTelegram } from "react-icons/fa";



const Footer = () => {
  const [currentYear, setCurrentYear] = useState(new Date().getFullYear());

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentYear(new Date().getFullYear());
    }, 1000); // Atualiza a cada segundo para refletir mudanças de ano em tempo real

    return () => clearInterval(interval);
  }, []);

  return (
    <footer className="footer bg-light text-center text-lg-start">
      <div className="container p-4">
        <div className="row justify-content-center">
          <div className="col-md-6 mb-4">
            <h5 className="text-uppercase">Sobre Nós</h5>
            <p>
              Somos uma plataforma dedicada a fornecer livros gratuitos e de fácil acesso para todos. Nossa missão é promover a leitura e o conhecimento. Você pode contribuir contribuir com o projeto compartilhando novos títulos
            </p>
          </div>

          <div className="col-md-3 mb-4">
            <ul className="list-unstyled mb-0">
              <li>
                <a href="#!" className="text-dark"><FaInstagram className='fs-1'/></a>
              </li>
              <li>
                <a href="#!" className="text-dark"><FaTelegram className='fs-1'/></a>
              </li>             
            </ul>
          </div>
        </div>
      </div>

      <div className="text-center p-3 bg-dark text-white">
        © {currentYear} Direitos Reservados:
        <a className="text-white" href="https://example.com/">exemplo.com</a>
      </div>
    </footer>
  );
}

export default Footer;
