import { BrowserRouter, Routes, Route, Outlet } from 'react-router-dom';
import './App.css'; 

import NavBar from './components/NavBar/Header';
import LoginCadastro from './components/TelaInicial/TelaInicial';
import Login from './components/TelasLoginCadastro/Login';
import Cadastro from './components/TelasLoginCadastro/Cadastro';
import Sobre from './components/TelaInicial/TelaSobre/Sobre';
import Contato from './components/TelaInicial/TelaContato/Contato';
import Produtos from './components/TelaProdutos/Produtos';
import Pagamentos from './components/TelaPagamentos/Pagamentos';
import Perfil from './components/NavBar/Perfil';
import AddProduto from './components/TelaProdutos/AddProduto';
import Vendas from './components/TelaVendas/Vendas';
import Notificacoes from './components/TelaNotificacoes/Notificacoes';

const MainLayout = () => {
  return (
    <>
    <NavBar />
    <main>
      <Outlet/>
    </main>
    </>
  )
}
function App() {
  return (
    <BrowserRouter> 
      <Routes>
        <Route path="/" element={<LoginCadastro />} />
        <Route path="/login" element={<Login />} />
        <Route path="/cadastro" element={<Cadastro />} />
        <Route path="/sobre" element={<Sobre />} />
        <Route path="/contato" element={<Contato />} />

        <Route element={<MainLayout/> }>
          <Route path="/produtos" element={<Produtos />} />
          <Route path="/vendas" element={<Vendas />} />
          <Route path="/pagamentos" element={<Pagamentos />} />
          <Route path="/notificacoes" element={<Notificacoes />} />
          <Route path="/perfil" element={<Perfil />} />
          <Route path="/addProduto" element={<AddProduto />} />
        </Route>

      </Routes>
    </BrowserRouter>
  )
}

export default App;