"use client"
import Navbar from "@/components/Navbar"

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye } from '@fortawesome/free-solid-svg-icons';

import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from 'yup'
import axios from 'axios'
import { useRouter } from "next/navigation"
import { useForm } from 'react-hook-form';

import styles from '@/app/auth/signup/signup.module.css'


const schema = yup.object().shape({
    nomeUsuario: yup.string().required('O nome deve vser preenchido'),
    email: yup.string().required('O email deve ser preenchido'),
    password: yup.string().required('A senha deve ser preenchida')
})

export default function signup() {
    const router = useRouter()

    const { register, handleSubmit, formState: {errors}} = useForm({
        resolver: yupResolver(schema)
    })

    const onSubmit = (data) => axios.post("http://localhost:3001/auth/signup", {
        nomeUsuario: data.nomeUsuario,
        email: data.email,
        password: data.password,
        tipo: 'cliente'
    }).then((response) => {
        router.push('/auth/signin')
    })

    return (
        <>
            <Navbar />
            <section className={styles.cadastro}>
            <div className={styles.cardCadastro}>
                <h1>Cadastro</h1>
                <form onSubmit={handleSubmit(onSubmit)} className={styles.formCadastro}>
                    <input
                        type='text'
                        id='nomeUsuario'
                        name='nomeUsuario'
                        placeholder='Digite seu nome'
                        required
                        {...register("nomeUsuario")}
                    />
                    <input
                        type='text'
                        id='email'
                        name='email'
                        placeholder='Digite seu email'
                        required
                        {...register("email")}
                    />

                    <div className={styles.inputSenha}>
                        <input
                            type='password'
                            id='password'
                            name='password'
                            placeholder='Digite sua senha'
                            required
                            {...register("password")}
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
                    
                    <button id='buttonLogin' className={styles.submitButton} type='submit'>Cadastrar</button>

                </form>
            </div>
        </section>
        </>
    )
}