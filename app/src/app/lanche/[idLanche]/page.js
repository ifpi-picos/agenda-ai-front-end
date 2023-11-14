'use client'
import Image from 'next/image'
import Navbar from '@/components/Navbar'
import Coxinha from '/public/coxinha.jpg'
import styles from '@/app/lanche/lanche.module.css'
import Container from '@/components/layout/Container'
import CloudinaryUpload from '@/components/Cadastro/CloudinaryUpload'
import { useState, useEffect } from 'react'
import BuscaLanche from '@/services/BuscaLanche'
import AlterarLanche from '@/components/Lanchonetes/AlterarLanche'
import VerLanche from '@/components/Lanchonetes/VerLanche'

export default async function Lanche({ params }) {
    const [editMode, setEditMode] = useState(false)
    const lanche = await BuscaLanche.buscaPorId(params.idLanche)

    return (
        <>
            <Navbar />
            <Container>
                {editMode && (
                    <AlterarLanche
                        lanche={lanche}
                        editMode={editMode}
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