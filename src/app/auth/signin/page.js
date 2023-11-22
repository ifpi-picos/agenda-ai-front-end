"use client"
import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons'
import styles from '@/app/auth/signin/signin.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Link from 'next/link'
import Navbar from '@/components/Navbar'
import { useRouter } from 'next/navigation'
import { useForm } from 'react-hook-form'
import axios from 'axios'
import { useState } from 'react'
import Loading from '@/components/Loading'
import { apiUrl } from '@/config/config'
import Modal from '@/components/layout/SucessErrorModal'


export default function Signin() {
    const router = useRouter();

    const [errorMessage, setErrorMessage] = useState(null); // State to store error message
    const [loading, setLoading] = useState(false);

    const { register, handleSubmit, formState: { errors } } = useForm({

    })

    const [showPassword, setShowPassword] = useState(false);

    const togglePasswordVisibility = () => {
    setShowPassword((prevShowPassword) => !prevShowPassword);
    };

    const onSubmit = (data) => {
        setLoading(true);

        axios.post(`${apiUrl}/auth/signin`, {
            email: data.email,
            password: data.password
        }).then((response) => {
            localStorage.setItem("token", response.data.token);

            if (response.data.tipo === 'cliente') {
                return router.push('/home')
            } else if (response.data.tipo === 'gerente') {
                return router.push(`/gerente/${response.data.idLanchonete}`)
            }
        }).catch((error) => {
            if (error.response && error.response.status === 401) {
                setLoading(false);
                return setErrorMessage('Credenciais inválidas');
            } else {
                setLoading(false);
                return setErrorMessage('Ocorreu um erro no servidor. Tente novamente mais tarde.');
            }
        })
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
                                    type={showPassword ? "text" : "password"}
                                    id="password"
                                    placeholder="Senha"
                                    required
                                    {...register('password')}
                                />
                                <FontAwesomeIcon className={styles.icon} icon={showPassword ? faEyeSlash : faEye} onClick={togglePasswordVisibility} />
                            </div>
                            <button id='buttonLogin' className={styles.submitButton} type='submit'>Entrar</button>
                        </form>

                        {errorMessage &&
                            <Modal
                                isOpen={true}
                                onClose={() => setErrorMessage(null)}
                                message={errorMessage}
                            />
                        }

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