import './LoginCadastro.css';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import logoAriStore from '../../assets/logo-aristore.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';

const Login = () => {
    const navigate = useNavigate();
    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');
    const [showPassword, setShowPassword] = useState(false);
    const [errorMessage, setErrorMessage] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();

        if (email === 'email@email.com' && senha === 'senha') {
            setErrorMessage('');
            navigate('/produtos');
        } else if (!email || !senha) {
            setErrorMessage('Por favor, preencha todos os campos.');
        } else {
            setErrorMessage('Email ou senha incorretos. Tente novamente.');
        }
    };

    return (
        <div className="pagina-logincadastro-container">
            <img src={logoAriStore} alt="Logo" className="logo-login" />
            <div className="conteudo">
                <h1>Bem-vindo(a) de volta!</h1>

                <form className="form-group" onSubmit={handleSubmit}>
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
                            Entrar
                        </button>
                        <br></br>
                        <p>
                            Esqueceu sua senha? <a href="#">Clique aqui.</a>
                        </p>
                        <p>
                            Não tem uma conta? <a href="/cadastro">Cadastre-se.</a>
                        </p>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Login;
