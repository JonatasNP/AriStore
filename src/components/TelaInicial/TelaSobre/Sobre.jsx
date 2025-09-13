import '../TelaInicial.css';
import { NavLink, useNavigate } from 'react-router-dom';
import logoAriStore from '../../../assets/logo-aristore.png';
import ariCosmeticos from '../../../assets/ari-cosmeticos.png';

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
          <h1>Sobre</h1>
          <p>O <strong>AriStore</strong> é em um sistema de gerenciamento integralmente 
          concebido para atender, com primor e eficiência, às demandas operacionais da loja virtual 
          Arileide Cosméticos. Estruturado com o propósito de otimizar o controle de produtos, a administração 
          de estoques, o acompanhamento de transações comerciais e a gestão financeira, o AriStore oferece uma 
          interface de utilização sobremaneira elegante, contemporânea e intuitiva. Tal arquitetura propicia ao 
          usuário a inestimável vantagem de dedicar-se com mais afinco àquilo que verdadeiramente importa: a 
          expansão estratégica de seu empreendimento.</p>
        </div>
        <div className="imagem">
          <img src={ariCosmeticos} alt="Vitrine de loja" />
        </div>
      </main>
    </div>
  );
};

export default Sobre;