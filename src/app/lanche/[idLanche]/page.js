'use client'
import Image from 'next/image'
import Navbar from '@/components/Navbar'
import Coxinha from '/public/coxinha.jpg'
import styles from '@/app/lanche/lanche.module.css'
import Container from '@/components/layout/Container'
import CloudinaryUpload from '@/components/Cadastro/CloudinaryUpload'
import { useState, useEffect } from 'react'
import BuscaLanche from '@/services/Lanche'
import AlterarLanche from '@/components/Lanchonetes/AlterarLanche'
import VerLanche from '@/components/Lanchonetes/VerLanche'
import Loading from '@/components/Loading'

export default function Lanche({ params }) {
    const [editMode, setEditMode] = useState(false)
    const [lanche, setLanche] = useState(null)

    useEffect(() => {
        BuscaLanche.buscaPorId(params.idLanche)
            .then((lancheData) => {
                setLanche(lancheData)
            })
            .catch((error) => {
                console.error("Erro ao buscar lanche", error)
            })
    }, [params.idLanche])

    if (!lanche) {
        return (
            <Loading />
        )
    }

    return (
        <>
            <Navbar />
            <Container>
                {editMode && (
                    <AlterarLanche
                        lanche={lanche}
                        idLanche={params.idLanche}
                        editMode={editMode}
                        setLanche={setLanche}
                        setEditMode={setEditMode}
                    />
                ) || (

                        <VerLanche
                            lanche={lanche}
                            editMode={editMode}
                            setEditMode={setEditMode}
                        />
                    )}



            </Container>
        </>
    )

}