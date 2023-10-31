"use client"
import { faEye } from '@fortawesome/free-solid-svg-icons'
import styles from '@/app/auth/signin/signin.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Link from 'next/link'
import Navbar from '@/components/Navbar'
import { useRouter } from 'next/navigation'
import { useForm } from 'react-hook-form'
import axios from 'axios'
import { useState } from 'react'
import Loading from '@/components/Loading'


export default function Signin() {
    const router = useRouter();

    const [errorMessage, setErrorMessage] = useState(null); // State to store error message
    const [loading, setLoading] = useState(false);

    const { register, handleSubmit, formState: { errors } } = useForm({

    })
    const onSubmit = (data) => {
        setLoading(true);

        axios.post("http://localhost:3001/auth/signin", {
            email: data.email,
            password: data.password
        }).then((response) => {
            localStorage.setItem('token', response.data.token);
            router.push('/home')
        }).catch((error) => {
            if (error.response && error.response.status === 401) {
                setErrorMessage('Credenciais inválidas');
            } else {
                setErrorMessage('Ocorreu um erro no servidor. Tente novamente mais tarde.');
            }
        })
        .finally(() => {
            setLoading(false); // Define loading como falso após a conclusão da solicitação
        });
    }
    return (
        <>
            <Navbar />
            {loading ? (
                <Loading />
            ) : (
                <div className={styles.login}>
                    <div className={styles.cardLogin}>
                        <h1>Login</h1>
                        <form className={styles.formLogin} onSubmit={handleSubmit(onSubmit)}>
                            <div>
                                <input
                                    id="login"
                                    type="email"
                                    placeholder="Email"
                                    required
                                    {...register("email")}
                                />
                            </div>
                            <div className={styles.inputDiv}>
                                <input
                                    type="password"
                                    id="password"
                                    placeholder="Senha"
                                    required
                                    {...register('password')}
                                />
                                <FontAwesomeIcon className={styles.icon} icon={faEye} />
                            </div>
                            <button id='buttonLogin' className={styles.submitButton} type='submit'>Entrar</button>
                        </form>

                        {errorMessage && <p className={styles.errorMessage}>{errorMessage}</p>}

                        <div>
                            <span>Não possui conta ainda?</span>
                            <Link href='/auth/signup'>Criar conta</Link>
                        </div>
                    </div>
                </div>
            )}

        </>
    )
}