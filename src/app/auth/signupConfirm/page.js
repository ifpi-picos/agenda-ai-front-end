"use client"
import Navbar from "@/components/Navbar"
import Link from 'next/link'

import React, { useState, useContext } from "react";
import axios from 'axios';
import { useRouter } from "next/navigation";

import styles from '@/app/auth/signup/signup.module.css'
import Modal from "@/components/layout/SucessErrorModal";
import Loading from "@/components/Loading";

import { useAuthUserContext } from "@/context/users/user";
import { useForm } from "react-hook-form";
import { apiUrl } from "@/config/config";

export default function SignupConfirm() {
    const router = useRouter();

    const { nomeUsuario, email, password } = useAuthUserContext()
    const [loading, setLoading] = useState(false);
    const [errorMessage, setErrorMessage] = useState(null);

    const { register, handleSubmit } = useForm({})

    const onSubmit = (data) => {
        const { confirmationCode } = data
        setLoading(true);
        axios.post(`${apiUrl}/auth/confirmSignup`, {
            cod: confirmationCode,
            nomeUsuario: nomeUsuario,
            email: email,
            password: password
        }).then((response) => {
            router.push('/auth/signin')
        }).catch((error) => {
            setLoading(false);
            if (error.response) {
                const responseData = error.response.data;
                if (responseData.error) {
                    setErrorMessage(responseData.error);
                }
            }
        })
    }

    if (nomeUsuario) {
        return (
            <>
                <Navbar />
                {loading ? (
                    <Loading />
                ) : (
                    <section className={styles.cadastro}>
                        <div className={styles.cardCadastro}>
                            <h1>Confirmação de Cadastro</h1>
                            <form onSubmit={handleSubmit(onSubmit)} className={styles.formCadastro}>
                                <input
                                    type='text'
                                    id='confirmationCode'
                                    name='confirmationCode'
                                    placeholder='Digite o código de confirmação'
                                    required
                                    {...register("confirmationCode")}
                                />
                                <button
                                    id='buttonConfirm'
                                    className={styles.submitButton} type='submit'
                                >
                                    Confirmar Cadastro
                                </button>
                            </form>
                            {errorMessage &&
                                <Modal
                                    isOpen={true}
                                    onClose={() => setErrorMessage(null)}
                                    message={errorMessage}
                                />
                            }
                        </div>
                    </section>
                )}
            </>
        )
    } else {
        router.push('/auth/signup')
    }
};