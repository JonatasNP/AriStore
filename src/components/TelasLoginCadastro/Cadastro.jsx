import './LoginCadastro.css';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import logoAriStore from '../../assets/logo-aristore.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';

const Cadastro = () => {
    const navigate = useNavigate();

    const [nome, setNome] = useState('');
    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');
    const [showPassword, setShowPassword] = useState(false);
    const [errorMessage, setErrorMessage] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();

        if (nome && email && senha) {
            setErrorMessage('');
            // despois adicionar logica do cadastro com POST!!!!!!!!!
            alert(`Cadastro realizado com sucesso, ${nome}!`)
            console.log('cadastro:', { nome, email, senha });
            navigate('/');
        } else {
            setErrorMessage('Por favor, preencha todos os campos.');
        }
    };

    return (
        <div className="pagina-logincadastro-container">
            <img src={logoAriStore} alt="Logo" className="logo-login" />
            <div className="conteudo">
                <h1>Crie sua conta</h1>

                <form className="form-group" onSubmit={handleSubmit}>
                    <input
                        id="nome"
                        type="text"
                        placeholder="Nome"
                        value={nome}
                        onChange={(e) => setNome(e.target.value)}
                    />

                    <input
                        id="email"
                        type="email"
                        placeholder="Email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />

                    <div className="senha-container">
                        <input
                            type={showPassword ? 'text' : 'password'}
                            placeholder="Senha"
                            value={senha}
                            onChange={(e) => setSenha(e.target.value)}
                        />
                        <button
                            type="button"
                            className="toggle-senha"
                            onClick={() => setShowPassword(!showPassword)}
                            aria-label={showPassword ? 'Ocultar senha' : 'Mostrar senha'}
                        >
                            <FontAwesomeIcon icon={showPassword ? faEyeSlash : faEye} />
                        </button>
                    </div>

                    {errorMessage && (
                        <div className="error-message">{errorMessage}</div>
                    )}

                    <div className="form-options">
                        <button type="submit" className="btn-submit">
                            Cadastrar
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Cadastro;
