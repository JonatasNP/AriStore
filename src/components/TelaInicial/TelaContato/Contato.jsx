import '../TelaInicial.css';
import { NavLink, useNavigate } from 'react-router-dom';
import logoAriStore from '../../../assets/logo-aristore.png';
import ariCosmeticos from '../../../assets/ari-cosmeticos.png';
import { FaInstagram, FaWhatsapp, FaLocationArrow } from 'react-icons/fa';

const Sobre = () => {
  const navigate = useNavigate();

  return (
    <div className="pagina-inicial-container">
      <header className="cabecalho">
        <img src={logoAriStore} alt="Logo AriStore" className="logo" />
        <nav className="menu">
          <NavLink to="/">Início</NavLink>
          <NavLink to="/sobre">Sobre</NavLink>
          <NavLink to="/contato">Contato</NavLink>
        </nav>
      </header>

      <main className="conteudo-inicial">
        <div className="texto">
          <h1>Contato</h1>
          <p>Arileide Cosméticos e Variedades</p>
          <div className="botoes-redondos-contato">
            <a
              href="https://wa.me/5583996546229"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-contato"
            >
              <FaWhatsapp />
            </a>
            <a
              href="https://instagram.com/arileidecosmeticos"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-contato"
            >
              <FaInstagram />
            </a>
          </div>
        </div>
        <div className="imagem">
          <img src={ariCosmeticos} alt="Vitrine de loja" />
        </div>
      </main>
    </div>
  );
};

export default Sobre;