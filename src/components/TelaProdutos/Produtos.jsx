import './Produtos.css';
import axios from 'axios';
import { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
    faCalendarDay, faClock, faSearch, faFilter, faPlus,
    faBox,
    faBoxOpen
 } from '@fortawesome/free-solid-svg-icons';
import CardProduto from './CardProduto';
import { NavLink } from 'react-router-dom';

const Produtos = () => {

    function esgotados() {
        let cont = 0;
        for (let p of produtos) {
            if (p.estoque == 0) cont++
        }
        return cont
    }

    const [produtos, setProdutos] = useState([
        {
            "id": 1,
            "categoria": "Cosmético",
            "nome": "DEO PARFUM OUD ESSENCIAL FEMININO",
            "precoVenda": "139,99",
            "estoque": 1,
            "descricao": "Deo Parfum Oud Essencial Feminino é uma fragrância poderosa e envolvente que combina a sofisticação das notas florais com a intensidade do oud, madeira mais nobre do mundo. uma combinação que exala elegância e força, ideal para mulheres que buscam uma presença marcante.",
            "imagem": "https://cdn.dooca.store/63055/products/fcskw1kp2uij4tqygnx7qd9loykdhqjosln8_640x640+fill_ffffff.png?v=1731610422&webp=0",
            "marca": "Natura",
            "volume": "100ml",
            "validade": "",
            "tipo": "Perfume",
            "genero": "F",
        },
        {
            "id": 2,
            "categoria": "Cosmético",
            "nome": "ULTRA COLOR BATOM MATTE",
            "precoVenda": "14,99",
            "estoque": 0,
            "descricao": "O batom com uma textura aveludada que entrega um acabamento bem opaco com cores hiper pigmentadas mas com conforto máximo e aplicação deliciosa. Ele colore completamente na primeira passada e não deixa os lábios ressecados, além de não craquelar entregando uma duração alta ao longo do dia.",
            "imagem": "https://production.na01.natura.com/on/demandware.static/-/Sites-avon-br-storefront-catalog/default/dw3ab29b27/produtos/800x800/AVNBRA-177767.jpg",
            "marca": "AVON",
            "volume": "3,6g",
            "validade": "",
            "tipo": "Batom",
            "genero": "F",
        },
        {
            "id": 3,
            "categoria": "Calçado",
            "nome": "BOTA DISCRETA PRA IR PRA IGREJA",
            "tipo": "Bota",
            "numeroCalcado": "42",
            "precoVenda": "60,99",
            "estoque": 4,
            "imagem": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ4wYbhWJ0kZdHYdoq6X1uMJX_Swm2_D1XcpA&s",
            "genero": "U",
        },
        {
            "id": 4,
            "categoria": "Calçado",
            "nome": "TÊNIS AZUL INFANTIL BASIQUINHO",
            "tipo": "Tênis",
            "numeroCalcado": "56",
            "precoVenda": "0,67",
            "estoque": "4",
            "imagem": "https://pbs.twimg.com/media/F7ohPFjW4AAu0Lf.jpg:large",
            "genero": "U",
        },
        {
            "id": 5,
            "categoria": "Item de Casa",
            "nome": "CANECA TSÉ TUNG GABIGOL",
            "precoVenda": "26,01",
            "estoque": 10,
            "imagem": "https://down-br.img.susercontent.com/file/br-11134207-7r98o-lq41rk6361aba1",
        },
        {
            "id": 6,
            "categoria": "Roupa",
            "nome": "BLUSA BARATA JOHN",
            "precoVenda": "0,16",
            "tamanhoRoupa": "G",
            "estoque": 10,
            "tipo": "Blusa",
            "imagem": "https://rlv.zcache.com.br/camiseta_john_shitpost_meme_engracado_de_baixa_qualidade-rdf7cb987b1ba424eb52c6f09032f765a_k2gm8_306.jpg",
        },
        {
            "id": 7,
            "categoria": "Item de Casa",
            "nome": "REGADOR CÍCLICO",
            "precoVenda": "19,98",
            "estoque": 2,
            "imagem": "https://casa.abril.com.br/wp-content/uploads/2021/05/Captura-de-Tela-2021-05-04-a%CC%80s-02.05.59.png?quality=70&w=720&crop=1",
        },
        {
            "id": 8,
            "categoria": "Item de Casa",
            "nome": "GUARDA-CHUVA DE PÉ",
            "precoVenda": "1,00",
            "estoque": 21,
            "imagem": "https://mega.ibxk.com.br/2024/05/10/10173926470483.jpg",
        },
        {
            "id": 9,
            "categoria": "Item de Casa",
            "nome": "CAMA ERGONÔMICA",
            "precoVenda": "342,77",
            "estoque": 0,
            "imagem": "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjHwM2jUdGfqnkfA2TsqieYgMaZv8KCnprxOgsH2a2w0p-BfKOVQzI6lP1RVpfKnhcoJTMcHE2UwCFBO9yyKNc4xF0IONXHp0W8fCSVhhRg_PXx87ZQXWbIdQK5NCkeWea_Oqb5hp4qj9vi/s1600/inven%25C3%25A7%25C3%25B5es_burras+%25281%2529.jpg",
        },

    ]);
    const [busca, setBusca] = useState("");
    const [filtroStatus, setFiltroStatus] = useState("todos");

    useEffect(() => {
        axios.get('')
            .then(response => {
                setProdutos(response.data)
            })
            .catch(error => {
                console.error('Erro ao buscar produtos:', error)
            });
    }, []);

    const produtosFiltrados = produtos.filter((produto) => {
        const nomeCorresponde = produto.nome.toLowerCase().includes(busca.toLowerCase());
        
        const estoque = Number(produto.estoque); // garantir que seja número

        if (filtroStatus === "disponivel") {
            return nomeCorresponde && estoque > 0;
        } else if (filtroStatus === "esgotado") {
            return nomeCorresponde && estoque === 0;
        }

        return nomeCorresponde; // "todos"
    });

    return (
        <div className="pagina-produtos">
            <header className="header-produtos">
                <h1>Meus Produtos</h1>
                <p>Gerencie seus produtos.</p>
                <div className="add-produto-container">
                    <NavLink to="/addProduto" className="btn-novo-produto">
                        <FontAwesomeIcon icon={faPlus} /> Novo Produto
                    </NavLink>
                </div>
            </header>

            <main className="conteudo-principal">
                <section className="stats-container">
                    <div className="stat-card">
                        <div className="stat-info">
                            <p>Produtos cadastrados</p>
                            <span>{produtos.length}</span>
                        </div>
                        <FontAwesomeIcon icon={faBox} className="stat-icon" />
                    </div>

                    <div className="stat-card">
                        <div className="stat-info">
                            <p>Produtos esgotados</p>
                            <span>{esgotados(produtos)}</span>
                        </div>
                        <FontAwesomeIcon icon={faBoxOpen} className="stat-icon" />
                    </div>

                    <div className="stat-card">
                        <div className="stat-info">
                            <p>Outra informação</p>
                            <span>5h6min</span>
                        </div>
                        <FontAwesomeIcon icon={faClock} className="stat-icon" />
                    </div>
                </section>

                <section className="filtro-container">
                    <div className="input-busca">
                        <FontAwesomeIcon icon={faSearch} />
                        <input
                            type="text"
                            placeholder="Digite o nome de um produto..."
                            value={busca}
                            onChange={(e) => setBusca(e.target.value)}
                        />
                    </div>

                    <div className="input-filtro">
                        <FontAwesomeIcon icon={faFilter} />
                        <select value={filtroStatus} onChange={(e) => setFiltroStatus(e.target.value)}>
                            <option value="todos">Todos os produtos</option>
                            <option value="disponivel">Disponíveis</option>
                            <option value="esgotado">Esgotados</option>
                        </select>
                    </div>
                </section>

                <section className="lista-produtos">
                    {produtosFiltrados.map(produto => (
                        <CardProduto key={produto.id} produto={produto} />
                    ))}
                </section>
            </main>
        </div>
    );
};

export default Produtos;