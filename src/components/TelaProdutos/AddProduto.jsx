import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { useState, useEffect } from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faFlask, faShirt, faCouch, faRuler, faWeightHanging, faCalendarAlt, faNoteSticky, faCircleInfo, faPumpSoap,
  faShoePrints, faTimes
} from '@fortawesome/free-solid-svg-icons';
import './AddProduto.css';
import { NavLink } from 'react-router-dom';

const AddProduto = () => {
  const navigate = useNavigate();

  // OBRIGATÓRIOS
  const [categoria, setCategoria] = useState('cosmetico');
  const [nome, setNome] = useState('');
  const [precoVenda, setPrecoVenda] = useState('');
  const [estoque, setEstoque] = useState(1);
  const [ativo, setAtivo] = useState('');

  // OPCIONAIS
  const [imagem, setImagem] = useState('');
  const [descricao, setDescricao] = useState('');
  const [dataCadastro, setDataCadastro] = useState(Date.now());
  const [cor, setCor] = useState('');
  const [genero, setGenero] = useState('');
  const [tipo, setTipo] = useState('');

  // --- ESPECÍFICAS

  // COSMÉTICO
  const [marca, setMarca] = useState('');
  const [volume, setVolume] = useState('');
  const [validade, setValidade] = useState('');


  // ITENS DE CASA
  const [materialCasa, setMaterialCasa] = useState('');
  const [dimensoes, setDimensoes] = useState('');

  // ROUPAS
  const [tamanhoRoupa, setTamanhoRoupa] = useState('');
  const [tecidoRoupa, setTecidoRoupa] = useState('');

  // CALÇADOS
  const [numeroCalcado, setNumeroCalcado] = useState('');
  const [materialCalcado, setMaterialCalcado] = useState('');



  const handleSubmit = (event) => {
    event.preventDefault();

    const produto = {
      categoria,
      nome,

    };

    axios.post('', produto)
      .then(() => {
        alert('Produto cadastrado com sucesso!');
        navigate('/produto');
      })
      .catch((error) => {
        console.error('Erro ao cadastrar produto:', error);
        alert('Erro ao cadastrar produto.');
      });
  };



  return (
    <div className="cadastro-produto">
      <div className="cadastro-card">
        <div className="form-header">
          <h1>Cadastro de Produto</h1>
          <p>Preencha as informações do produto para adicioná-lo ao sistema.</p>
        </div>

        <form onSubmit={handleSubmit}>
          <h2 className="section-title">
            <FontAwesomeIcon icon={faCircleInfo} /> Informações gerais do Produto
          </h2>

          <div className="campo-form" style={{ marginBottom: "40px" }}>
            <label htmlFor="categoria-produto">Categoria do Produto*</label>
            <div className="categoria-opcoes">
              {['cosmetico', 'casa', 'roupa', 'calcado'].map((opcao) => (
                <button
                  key={opcao}
                  type="button"
                  className={`categoria-botao ${categoria === opcao ? 'ativo' : ''}`}
                  onClick={() => setCategoria(opcao)}
                >
                  {opcao === 'cosmetico' ? 'Cosmético' :
                    opcao === 'roupa' ? 'Roupa' :
                      opcao === 'casa' ? 'Item de casa' :
                        'Calçado'}
                </button>
              ))}
            </div>
          </div>



          <div className='linha-form'>
            <section className='campo-form' style={{ maxWidth: "250px" }}>
              {imagem ? (

                <div
                  style={{
                    minHeight: "250px",
                    maxHeight: "250px",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center"
                  }}
                >
                  <img
                    src={imagem}
                    alt="Imagem do produto"
                    style={{
                      maxWidth: '100%',
                      maxHeight: '100%',
                      objectFit: 'contain'
                    }}
                  />
                </div>
              ) : (
                <div style={{
                  color: "lightgray", border: "1px solid lightgray", display: "flex", alignItems: "center",
                  justifyContent: "center", textAlign: "center", height: "100%", width: "auto", padding: "20px", minHeight: "250px"
                }}>
                  A prévia da imagem deste produto será carregada aqui!
                </div>
              )
              }

              <div className="campo-form" style={{ maxWidth: "250px" }}>
                <div style={{ position: 'relative' }}>
                  <input
                    type="text"
                    id="imagem"
                    value={imagem}
                    onChange={(e) => setImagem(e.target.value)}
                    placeholder="https://exemplo.com/imagem.jpg"
                    style={{ width: '100%', paddingRight: '25px' }}
                  />
                  {imagem && (
                    <button
                      type="button"
                      onClick={() => setImagem('')}
                      style={{
                        position: 'absolute',
                        right: '5px',
                        top: '50%',
                        transform: 'translateY(-50%)',
                        background: 'transparent',
                        border: 'none',
                        cursor: 'pointer',
                        padding: 0,
                      }}
                      aria-label="Limpar campo"
                    >
                      <FontAwesomeIcon icon={faTimes} color="#888" />
                    </button>
                  )}
                </div>
              </div>
            </section>


            <section className='campo-form'>
              <div className="linha-form" style={{ display: 'flex', gap: '20px', alignItems: 'flex-end' }}>
                <div className="campo-form" style={{ flex: 4 }}>
                  <label htmlFor="nome">Nome do Produto*</label>
                  <input
                    type="text"
                    id="nome"
                    value={nome}
                    onChange={(e) => setNome(e.target.value.toUpperCase())}
                    required
                    style={{
                      fontSize: "1.2rem",
                      fontWeight: "regular",
                      color: "#614b44"
                    }}
                  />
                </div>
                <div className="campo-form" style={{ flex: '0 0 auto', width: '12%' }}>
                  <label htmlFor="precoVenda">Preço (R$)*</label>
                  <input
                    type="text"
                    id="precoVenda"
                    value={precoVenda}
                    onChange={(e) => setPrecoVenda(e.target.value)}
                    required
                    style={{
                      fontSize: "1.2rem",
                      fontWeight: "bold",
                      color: "#614b44"
                    }}
                  />
                </div>
                <div className="campo-form" style={{ flex: '0 0 auto', width: '8%' }}>
                  <label htmlFor="estoque">Estoque*</label>
                  <input
                    type="number"
                    id="estoque"
                    value={estoque}
                    onChange={(e) => {
                      let val = Math.max(0, Math.floor(Number(e.target.value) || 0));
                      setEstoque(val);
                      if (estoque >= 1) setAtivo(true)
                    }}
                    min="0"
                    step="1"
                    inputMode="numeric"
                    pattern="[0-9]*"
                    style={{
                      fontSize: "1.2rem",
                      fontWeight: "regular",
                      color: "#614b44"
                    }}
                  />
                </div>
              </div>

              <div className="linha-form">

              </div>
              <div className="campo-form">
                <label htmlFor="descricao">Descrição</label>
                <textarea
                  id="descricao"
                  value={descricao}
                  onChange={(e) => setDescricao(e.target.value)}
                />
              </div>
            </section>
          </div>









          {categoria === 'cosmetico' && (
            <section className="form-section">
              <h2 className="section-title">
                <FontAwesomeIcon icon={faPumpSoap} /> Informações específicas do Cosmético
              </h2>
              <div className="campo-form">
                <label htmlFor="marca">Marca</label>
                <select
                  id="marca"
                  value={marca}
                  onChange={(e) => setMarca(e.target.value)}
                  required
                >
                  <option value="">---</option>
                  <option value="natura" selected>Natura</option>
                  <option value="avon">AVON</option>
                  <option value="blosson">BLOSSON VILLE</option>
                  <option value="eudora">Eudora</option>
                </select>
              </div>

              <div className="campo-form">
                <label htmlFor="volume">Volume (ml ou g)</label>
                <input
                  id="volume"
                  type="text"
                  value={volume}
                  onChange={(e) => setVolume(e.target.value)}
                  placeholder="Ex: 250ml"
                />
              </div>

              <div className="campo-form">
                <label htmlFor="validade">Validade</label>
                <input
                  id="validade"
                  type="date"
                  value={validade}
                  onChange={(e) => setValidade(e.target.value)}
                />
              </div>

              <div className="campo-form">
                <label htmlFor="tipo">Tipo de Cosmético</label>
                <input
                  id="tipo"
                  type="text"
                  value={tipo}
                  onChange={(e) => setTipo(e.target.value)}
                  placeholder="Ex: Creme, Sabonete..."
                />
              </div>

              <div className="campo-form">
                <label htmlFor="genero">Gênero</label>
                <select
                  id="genero"
                  value={genero}
                  onChange={(e) => setGenero(e.target.value)}
                >
                  <option value="U">Unissex</option>
                  <option value="F" selected>Feminino</option>
                  <option value="M">Masculino</option>
                </select>
              </div>
            </section>
          )}

          {categoria === 'casa' && (
            <section className="form-section">
              <h2 className="section-title">
                <FontAwesomeIcon icon={faCouch} /> Informações específicas do Item de Casa
              </h2>
              <div className="campo-form">
                <label htmlFor="tipo">Tipo de Item</label>
                <input
                  id="tipo"
                  type="text"
                  value={tipo}
                  onChange={(e) => setTipo(e.target.value)}
                  placeholder="Ex: Jarra, Tapete, Quadro..."
                />
              </div>

              <div className="campo-form">
                <label htmlFor="cor">Cor</label>
                <input
                  id="cor"
                  type="text"
                  value={cor}
                  onChange={(e) => setCor(e.target.value)}
                  placeholder="Ex: Branco, Azul..."
                />
              </div>

              <div className="campo-form">
                <label htmlFor="material-casa">Material</label>
                <input
                  id="material-casa"
                  type="text"
                  value={materialCasa}
                  onChange={(e) => setMaterialCasa(e.target.value)}
                  placeholder="Ex: Madeira, Vidro..."
                />
              </div>

              <div className="campo-form">
                <label htmlFor="dimensoes">Dimensões</label>
                <input
                  id="dimensoes"
                  type="text"
                  value={dimensoes}
                  onChange={(e) => setDimensoes(e.target.value)}
                  placeholder="Ex: 30cm x 20cm x 10cm"
                />
              </div>
            </section>
          )}

          {categoria === 'roupa' && (
            <section className="form-section">
              <h2 className="section-title">
                <FontAwesomeIcon icon={faShirt} /> Informações específicas da Roupa
              </h2>
              <div className="campo-form">
                <label htmlFor="tipo">Tipo</label>
                <input
                  id="tipo"
                  type="text"
                  value={tipo}
                  onChange={(e) => setTipo(e.target.value)}
                  placeholder="Ex: Calça, Moletom, chapéu..."
                />
              </div>
              <div className="campo-form">
                <label htmlFor="tamanho-roupa">Tamanho</label>
                <select
                  id="tamanho-roupa"
                  value={tamanhoRoupa}
                  onChange={(e) => setTamanhoRoupa(e.target.value)}
                >
                  <option value="PP">PP</option>
                  <option value="P">P</option>
                  <option value="M">M</option>
                  <option value="G" selected>G</option>
                  <option value="GG">GG</option>
                  <option value="XG">XG</option>
                  <option value="XGG">XGG</option>
                  <option value="EG">EG</option>
                  <option value="EGG">EGG</option>
                </select>
              </div>

              <div className="campo-form">
                <label htmlFor="tecido-roupa">Tecido</label>
                <input
                  id="tecido-roupa"
                  type="text"
                  value={tecidoRoupa}
                  onChange={(e) => setTecidoRoupa(e.target.value)}
                  placeholder="Ex: Algodão, Jeans..."
                />
              </div>

              <div className="campo-form">
                <label htmlFor="cor">Cor</label>
                <input
                  id="cor"
                  type="text"
                  value={cor}
                  onChange={(e) => setCor(e.target.value)}
                  placeholder="Ex: Azul, Preto..."
                />
              </div>

              <div className="campo-form">
                <label htmlFor="genero">Gênero</label>
                <select
                  id="genero"
                  value={genero}
                  onChange={(e) => setGenero(e.target.value)}
                >
                  <option value="U">Unissex</option>
                  <option value="F" selected>Feminino</option>
                  <option value="M">Masculino</option>
                </select>
              </div>
            </section>
          )}

          {categoria === 'calcado' && (
            <section className="form-section">
              <h2 className="section-title">
                <FontAwesomeIcon icon={faShoePrints} /> Informações específicas do Calçado
              </h2>

              <div className="campo-form">
                <label htmlFor="numero-calcado">Número*</label>
                <input
                  id="numero-calcado"
                  type="number"
                  required
                  value={numeroCalcado}
                  onChange={(e) => setNumeroCalcado(e.target.value)}
                  placeholder="Ex: 37, 40..."
                />
              </div>

              <div className="campo-form">
                <label htmlFor="tipo">Tipo</label>
                <select
                  id="tipo"
                  value={tipo}
                  onChange={(e) => setTipo(e.target.value)}
                >
                  <option value="">---</option>
                  <option value="tenis">Tênis</option>
                  <option value="sandalia">Sandália</option>
                  <option value="bota">Bota</option>
                  <option value="sapatilha">Sapatilha</option>
                  <option value="outro">Outro</option>
                </select>
              </div>

              <div className="campo-form">
                <label htmlFor="cor">Cor</label>
                <input
                  id="cor"
                  type="text"
                  value={cor}
                  onChange={(e) => setCor(e.target.value)}
                  placeholder="Ex: Preto, Vermelho..."
                />
              </div>

              <div className="campo-form">
                <label htmlFor="genero-calcado">Gênero</label>
                <select
                  id="genero"
                  value={genero}
                  onChange={(e) => setGenero(e.target.value)}
                >
                  <option value="U">Unissex</option>
                  <option value="F" selected>Feminino</option>
                  <option value="M">Masculino</option>
                </select>
              </div>

              <div className="campo-form">
                <label htmlFor="material-calcado">Material</label>
                <input
                  id="material-calcado"
                  type="text"
                  value={materialCalcado}
                  onChange={(e) => setMaterialCalcado(e.target.value)}
                  placeholder="Ex: Couro, Tecido..."
                />
              </div>
            </section>
          )}





          <div className="form-actions">
            <NavLink to="/produtos" className="btn-voltar">
              Voltar
            </NavLink>
            <button type="submit" className="btn-cadastrar-produto">
              Cadastrar Produto
            </button>
          </div>

        </form>
      </div>
    </div>
  );
};

export default AddProduto;