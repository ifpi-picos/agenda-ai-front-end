import { faEye } from '@fortawesome/free-solid-svg-icons'
import styles from './Login.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Link, useNavigate } from 'react-router-dom'

function Login () {
    const navigate = useNavigate();

    const handleSubmit = (event) => {
        event.preventDefault();
        navigate('../Home')
    }

    return (
        <div className={styles.login}>
            <div className={styles.cardLogin}>
                <h1>Login</h1>
                <form className={styles.formLogin} onSubmit={handleSubmit}>
                    <div>
                        <input id="login" type="email" placeholder="Email" required />
                    </div>
                    <div className={styles.inputDiv}>
                        <input type="password" id="password" placeholder="Senha" required />
                        <FontAwesomeIcon className={styles.icon} icon={faEye}/>
                    </div>
                    <button id='buttonLogin' type='submit'>Entrar</button>
                </form>
                
                <div>
                    <span>Não possui conta ainda?</span>
                    <Link to='/Cadastro'>Criar conta</Link>
                </div>
            </div>
        </div>
    )
}

export default Login