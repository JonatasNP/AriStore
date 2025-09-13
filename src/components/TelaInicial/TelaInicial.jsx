import './TelaInicial.css';
import { NavLink, useNavigate } from 'react-router-dom';
import logoAriStore from '../../assets/logo-aristore.png';
import ariCosmeticos from '../../assets/ari-cosmeticos.png';

const TelaInicial = () => {
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
          <h1>AriStore</h1>
          <p>Gerencie produtos com facilidade. Moda, cosméticos e variedades em um só lugar.</p>
          <div className="botoes">
            <button className="btn" onClick={() => navigate('/login')}>Login</button>
            <button className="btn btn-secundario" onClick={() => navigate('/cadastro')}>Cadastrar</button>
          </div>
        </div>
        <div className="imagem">
          
        </div>
      </main>
    </div>
  );
};

export default TelaInicial;