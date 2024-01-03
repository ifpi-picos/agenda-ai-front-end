"use client"
import Navbar from "@/components/Navbar"
import Link from 'next/link'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons'

import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from 'yup'
import axios from 'axios'
import { useRouter } from "next/navigation"
import { useForm } from 'react-hook-form';

import styles from '@/app/auth/signup/signup.module.css'
import { useState } from "react";
import { apiUrl } from "@/config/config";
import Modal from "@/components/layout/SucessErrorModal";
import Loading from "@/components/Loading";


const schema = yup.object().shape({
    nomeUsuario: yup.string().required('O nome deve vser preenchido'),
    email: yup.string().required('O email deve ser preenchido'),
    password: yup.string().required('A senha deve ser preenchida'),
    confirmPassword: yup.string().required('A confirmação de senha deve ser preenchida')
})

export default function useSignup() {
    const router = useRouter()

    const [confirmModal, setConfirmModal] = useState(false)
    const [loading, setLoading] = useState(false)

    const [errorMessage, setErrorMessage] = useState(null)
    const [successMessage, setSuccessMessage] = useState(null);

    const [confirmationCode, setConfirmationCode] = useState('')


    const { register, handleSubmit, formState: { errors } } = useForm({
        resolver: yupResolver(schema)
    })
    //"https://agendaai-api.onrender.com/auth/signup"
    const onSubmit = (data) => {
        setLoading(true)
        axios.post(`${apiUrl}/auth/signup`, {
            nomeUsuario: data.nomeUsuario,
            email: data.email,
            password: data.password,
            confirmPassword: data.confirmPassword
        }).then((response) => {
            //router.push('/auth/signin')
            setLoading(false)
            setConfirmModal(true)
        }).catch((error) => {
            setLoading(false)
            if (error.response) {
                const responseData = error.response.data;
                if (responseData.error) {
                    setErrorMessage(responseData.error)
                }
            }
        })
    }

    const [showPassword, setShowPassword] = useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);

    const togglePasswordVisibility = (field) => {
        if (field === 'password') {
            setShowPassword((prevShowPassword) => !prevShowPassword);
        } else if (field === 'confirmPassword') {
            setShowConfirmPassword((prevShowConfirmPassword) => !prevShowConfirmPassword);
        }
    };

    const onSubmitConfirm = (data) => {
        setLoading(true)
        axios.post(`${apiUrl}/auth/confirmSignup`, {
            cod: confirmationCode,
            nomeUsuario: data.nomeUsuario,
            email: data.email,
            password: data.password,
        })
            .then((response) => {
                setErrorMessage(null)
                setLoading(false);
                setConfirmModal(false);
                setSuccessMessage("Cadastro confirmado com sucesso!");
                router.push('/auth/signin')
            })

            .catch((error) => {
                setLoading(false);
                if (error.response) {
                    const responseData = error.response.data;
                    if (responseData.error) {
                        setErrorMessage(responseData.error);
                    }
                }
            });
    }

    return (
        <>
            <Navbar />
            {loading ? (
                <Loading />
            ) : (
                <section className={styles.cadastro}>
                    {confirmModal ? (
                        <div className={styles.cardCadastro}>
                            <h1>Confirmar cadastro</h1>
                            <form
                                className={styles.formCadastro}
                                onSubmit={handleSubmit(onSubmitConfirm)}>
                                <p className={styles.text}>Um código de confirmação foi enviado para o seu email. Insira ele no campo abaixo:</p>
                                <input
                                    type="text"
                                    id="confirmationCode"
                                    name="confirmationCode"
                                    maxLength={6}
                                    value={confirmationCode}
                                    onChange={(e) => {
                                        const numericValue = e.target.value.replace(/\D/g, '');
                                        if (!isNaN(numericValue) && numericValue.length <= 6) {
                                            setConfirmationCode(numericValue);
                                        }
                                    }}
                                />
                                {errorMessage &&
                                    <p>{errorMessage}</p>}
                                <button
                                    id="buttonConfirm"
                                    className={styles.submitButton}
                                    type='submit'
                                >
                                    Enviar
                                </button>
                            </form>
                        </div>
                    ) : (
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
                                        type={showPassword ? "text" : "password"}
                                        id='password'
                                        name='password'
                                        placeholder='Digite sua senha'
                                        required
                                        {...register("password")}
                                    />
                                    <FontAwesomeIcon className={styles.icon} icon={showPassword ? faEyeSlash : faEye} onClick={() => togglePasswordVisibility('password')} />
                                </div>

                                <div className={styles.inputSenha}>
                                    <input
                                        type={showConfirmPassword ? 'text' : 'password'}
                                        id='confirmPassword'
                                        name='confirmPassword'
                                        placeholder='Confirme sua senha'
                                        required
                                        {...register("confirmPassword")}
                                    />
                                    <FontAwesomeIcon className={styles.icon} icon={showConfirmPassword ? faEyeSlash : faEye} onClick={() => togglePasswordVisibility('confirmPassword')} />
                                </div>

                                <button
                                    id='buttonLogin'
                                    className={styles.submitButton} type='submit'
                                >
                                    Cadastrar
                                </button>

                            </form>
                            {errorMessage &&
                                <Modal
                                    isOpen={true}
                                    onClose={() => setErrorMessage(null)}
                                    message={errorMessage}
                                />
                            }

                            <div className={styles.ref}>
                                <span>Já possui uma conta?</span>
                                <Link href='/auth/signin'>Login</Link>
                            </div>
                        </div>
                    )}
                </section>
            )}
        </>
    )
}