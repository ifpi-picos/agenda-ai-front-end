import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import styles from './Cadastro.module.css'
import { useState, useEffect } from 'react'
import { faEye } from '@fortawesome/free-solid-svg-icons';
import { useNavigate } from 'react-router-dom';

function Cadastro() {
    const [estados, setEstados] = useState([])
    const [cidades, setCidades] = useState([])
    const [estadoSelecionado, setEstadoSelecionado] = useState('');
    const [cidadeSelecionada, setCidadeSelecionada] = useState('');
    const navigate = useNavigate()

    const handleSubmit = (event) => {
        event.preventDefault();
        navigate('/Login')
    }

    useEffect(() => {
        fetch('https://servicodados.ibge.gov.br/api/v1/localidades/estados')
            .then(response => response.json())
            .then(data => {
                const estadosOrdenados = data.sort((a, b) => a.nome.localeCompare(b.nome));
                setEstados(estadosOrdenados);
            })
            .catch(error => {
                console.error('Erro ao buscar estados:', error);
            });
    }, []);

    const handleEstadoChange = (event) => {
        const estadoId = event.target.value;
        setEstadoSelecionado(estadoId);
        setCidadeSelecionada('');

        fetch(`https://servicodados.ibge.gov.br/api/v1/localidades/estados/${estadoId}/municipios`)
            .then(response => response.json())
            .then(data => {
                setCidades(data);
            })
            .catch(error => {
                console.error('Erro ao buscar cidades:', error);
            });
    };

    const handleCidadeChange = (event) => {
        const cidadeId = event.target.value;
        setCidadeSelecionada(cidadeId);
    };


    return (
        <section className={styles.cadastro}>
            <div className={styles.cardCadastro}>
                <h1>Cadastro</h1>
                <form onSubmit={handleSubmit} className={styles.formCadastro}>
                    <input
                        type='text'
                        id='nome'
                        name='nome'
                        placeholder='Digite seu nome'
                        required
                    />
                    <input
                        type='text'
                        id='email'
                        name='email'
                        placeholder='Digite seu email'
                        required
                    />

                    <div className={styles.divSelect}>
                        <label>Estado: </label>
                        <select value={estadoSelecionado} onChange={handleEstadoChange}>
                            <option value="">Selecione o estado que você mora</option>
                            {estados.map(estado => (
                                <option key={estado.id} value={estado.id}>{estado.nome}</option>
                            ))}
                        </select>
                    </div>

                    <div className={styles.divSelect}>
                        <label>Cidade: </label>
                        <select value={cidadeSelecionada} onChange={handleCidadeChange} disabled={!estadoSelecionado}>
                            <option value="">Selecione a cidade que você mora</option>
                            {cidades.map(cidade => (
                                <option key={cidade.id} value={cidade.id}>{cidade.nome}</option>
                            ))}
                        </select>
                    </div>

                    <div className={styles.inputSenha}>
                        <input
                            type='password'
                            id='senha'
                            name='senha'
                            placeholder='Digite sua senha'
                            required
                        />
                        <FontAwesomeIcon className={styles.icon} icon={faEye}/>
                    </div>

                    <div className={styles.inputSenha}>
                        <input
                            type='password'
                            id='confirmarSenha'
                            name='confirmarSenha'
                            placeholder='Confirme sua senha'
                            required
                        />
                        <FontAwesomeIcon className={styles.icon} icon={faEye}/>
                    </div>
                    
                    <button id='buttonLogin' type='submit'>Entrar</button>

                </form>
            </div>
        </section>
    )
}

export default Cadastro