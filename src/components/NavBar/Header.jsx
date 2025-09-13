import { NavLink } from 'react-router-dom';
import './Header.css'; 
import logoAriStore from '../../assets/logo-aristore.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'; 
import { 
  faBoxes,    
  faMoneyCheckAlt,
  faBell,     
  faChartLine,
  faUserFriends,
  faCog,
  faCartShopping
} from '@fortawesome/free-solid-svg-icons';

const Header = () => {
  return (
    <aside className="sidebar-principal">
      <div className="logo-principal">
        <img src={logoAriStore} alt="Logo AriStore" className="logo" />
      </div>
      <nav className="nav-principal">
        <NavLink to="/produtos" className={({ isActive }) => isActive ? "active" : ""}>
          <FontAwesomeIcon icon={faBoxes} /> Produtos
        </NavLink>
        <NavLink to="/vendas" className={({ isActive }) => isActive ? "active" : ""}>
          <FontAwesomeIcon icon={faCartShopping} /> Vendas
        </NavLink>
        <NavLink to="/pagamentos" className={({ isActive }) => isActive ? "active" : ""}>
          <FontAwesomeIcon icon={faMoneyCheckAlt} /> Pagamentos
        </NavLink>
        <NavLink to="/notificacoes" className={({ isActive }) => isActive ? "active" : ""}>
          <FontAwesomeIcon icon={faBell} /> Notificações
        </NavLink>
        <NavLink to="/relatorios" className={({ isActive }) => isActive ? "active" : ""}>
          <FontAwesomeIcon icon={faChartLine} /> Relatórios
        </NavLink>
      </nav>

      <div className="rodape">
        <NavLink to="/perfil" className="btn-perfil">
          <FontAwesomeIcon icon={faUserFriends} />
        </NavLink>
        <NavLink to="/configuracoes" className="btn-configuracoes">
          <FontAwesomeIcon icon={faCog} />
        </NavLink>
      </div>
    </aside>
  );
};

export default Header;
