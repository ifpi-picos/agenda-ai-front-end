"use client"
import { faEye } from '@fortawesome/free-solid-svg-icons'
import styles from '@/app/auth/signin/signin.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Link from 'next/link'
import Navbar from '@/components/Navbar'
import { useRouter } from 'next/navigation'
import { useForm } from 'react-hook-form'
import axios from 'axios'



export default function Signin() {
    const router = useRouter();

    const { register, handleSubmit, formState: {errors}} = useForm({

    })
    const onSubmit = (data) => axios.post("http://localhost:3001/auth/signin", {
        email: data.email,
        password: data.password
    }).then((response) => {
        localStorage.setItem('token', response.data.token);
        router.push('/home')
    })
    return (
        <>
            <Navbar />
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