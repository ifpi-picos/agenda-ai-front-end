import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import styles from './Cadastro.module.css'
import { useState, useEffect } from 'react'
import { faEye } from '@fortawesome/free-solid-svg-icons';

import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from 'yup'
import axios from 'axios'
import { useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';

const schema = yup.object().shape({
    nome: yup.string().required('O nome deve vser preenchido'),
    email: yup.string().required('O email deve ser preenchido'),
    password: yup.string().required('A senha deve ser preenchida')
})

function Cadastro() {
    let navigate = useNavigate()

    const { register, handleSubmit, formState: {errors} } = useForm({
        resolver: yupResolver(schema)
    })

    const onSubmit = (data) => axios.post("http://localhost:3001/auth/signup", {
        nome: data.nome,
        email: data.email,
        password: data.password,
        tipo: 'cliente'
    }).then((response) => {
        navigate("/Home")
    })

    return (
        <section className={styles.cadastro}>
            <div className={styles.cardCadastro}>
                <h1>Cadastro</h1>
                <form onSubmit={handleSubmit(onSubmit)} className={styles.formCadastro}>
                    <input
                        type='text'
                        id='nome'
                        name='nome'
                        placeholder='Digite seu nome'
                        required
                        {...register("nome")}
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
                    
                    <button id='buttonLogin' type='submit'>Entrar</button>

                </form>
            </div>
        </section>
    )
}

export default Cadastro