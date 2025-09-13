import './Produtos.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye, faEdit, faTrash } from '@fortawesome/free-solid-svg-icons';
import { useState } from 'react';

const CardProduto = ({ produto }) => {
    function noCartao(valor) {
        let dec = valor.split(",")
        let v = Number(dec[0]) + Number(dec[1]) / 100
        return String((v * 1.1).toFixed(2)).replace(".", ",")
    }

    const {
        id,
        categoria,
        nome,
        precoVenda,
        estoque,
        descricao,
        imagem,
        cor,
        genero,
        tipo,
        marca,
        volume,
        validade,
        materialCasa,
        dimensoes,
        tamanhoRoupa,
        tecidoRoupa,
        numeroCalcado,
        materialCalcado,
    } = produto;


    return (
        <div className="card-produto">
            <div className="card-header">
                {
                    estoque !== 0 ? (
                        <span className="status-badge disponivel">Disponível</span>
                    ) : (
                        <span className="status-badge esgotado">Esgotado</span>
                    )
                }

                <div className="img-produto">
                    {imagem ? (
                        <img
                            src={imagem}
                            alt="Imagem do produto"
                            style={{
                            maxWidth: '200px',
                            maxHeight: '200px',
                            objectFit: 'contain'
                            }}
                        />
                    ) : (
                        <span>

                        </span>
                    )}
                </div>
                <div className="info-pessoal">
                    <h3>{nome}</h3>
                </div>
                <span className="status-badge categoria">
                    {categoria === "Item de Casa"? categoria : ""} 
                    {categoria === "Cosmético" ? (
                            <>
                                {tipo + " | " + marca}
                            </> 
                        ) : (<></>)
                    }
                    {categoria === "Calçado" ? (
                            <>
                                {tipo + " | Tamanho " + numeroCalcado}
                            </> 
                        ) : (<></>)
                    }
                    {categoria === "Roupa" ? (
                            <>
                                {tipo + " | Tamanho " + tamanhoRoupa}
                            </> 
                        ) : (<></>)
                    }
                </span>
            </div>

            <div className="card-body">
                <p style={{
                      fontSize: "1.5rem",
                      fontWeight: "bold",
                      color: "#614b44"
                    }}>
                    R$ {precoVenda}
                </p>
                <p>
                    ou R$ {noCartao(precoVenda)} no cartão
                </p>
            </div>

            <div className="card-footer">
                <button className="btn-editar"><FontAwesomeIcon icon={faEdit} /> Editar</button>
                <button className="btn-excluir"><FontAwesomeIcon icon={faTrash} /> Excluir</button>
                <button className="btn-detalhes" ><FontAwesomeIcon icon={faEye} /> Visualizar como cliente</button>
            </div>
        </div>
    );
}

export default CardProduto;