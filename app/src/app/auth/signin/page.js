"use client"
import { faEye } from '@fortawesome/free-solid-svg-icons'
import styles from '@/app/auth/signin/signin.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Link from 'next/link'
import Navbar from '@/components/Navbar'
import { useRouter } from 'next/navigation'

export default function Signin() {
    const router = useRouter();

    const handleSubmit = (event) => {
        event.preventDefault()
        router.push('/')
    }
    return (
        <>
            <Navbar />
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
                        <button id='buttonLogin' className={styles.submitButton} type='submit'>Entrar</button>
                    </form>
                    
                    <div>
                        <span>Não possui conta ainda?</span>
                        <Link href='/auth/signup'>Criar conta</Link>
                    </div>
                </div>
            </div>
        </>
    )
}