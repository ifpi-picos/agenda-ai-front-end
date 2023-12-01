'use client'
import Image from 'next/image'
import Navbar from '@/components/Navbar'
import styles from '@/app//cliente/lanche/lanche.module.css'
import Container from '@/components/layout/Container'
import { useState, useEffect } from 'react'
import BuscaLanche from '@/services/Lanche'
import Loading from '@/components/Loading'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMinus, faPlus } from '@fortawesome/free-solid-svg-icons'


export default function Lanche({ params }) {
    const [lanche, setLanche] = useState(null)
    const [quantidade, setQuantidade] = useState(1)

    useEffect(() => {
        BuscaLanche.buscaPorId(params.idLanche)
            .then((lancheData) => {
                setLanche(lancheData)
            })
            .catch((error) => {
                console.error("Erro ao buscar lanche", error)
            })
    }, [params.idLanche])

    const aumentarQuantidade = () => {
        setQuantidade(quantidade + 1);
    };

    const diminuirQuantidade = () => {
        if (quantidade > 1) {
            setQuantidade(quantidade - 1);
        }
    };

    if (!lanche) {
        return (
            <Loading />
        )
    }

    return (
        <>
            <Navbar />
            <Container>
                <div className={styles.boxLanche}>
                    <div className={styles.imageArea}>
                        <Image width={300} height={300} src={lanche.urlImagem} alt="Imagem amostral de lanche" />
                    </div>
                    <div className={styles.infoLanche}>
                        <div className={styles.nomeLanche}>
                            <h1>{lanche.nomeLanche}</h1>
                        </div>

                        <div className={styles.descricao}>
                            <h3>{lanche.descricao}</h3>
                        </div>

                        <div className={styles.precoUnidade}>
                            <h3> Unidade: R$ {lanche.preco.toFixed(2)}</h3>
                        </div>

                        <div className={styles.detalhes}>
                            <div className={styles.quantidade}>
                                <button className={styles.icon} onClick={diminuirQuantidade}>
                                    <FontAwesomeIcon icon={faMinus} />
                                </button>
                                <h3>{quantidade}</h3>
                                <button className={styles.icon} onClick={aumentarQuantidade}>
                                    <FontAwesomeIcon icon={faPlus} />
                                </button>
                            </div>
                            <button className={styles.adicionar}>
                                <h3>Adicionar</h3>
                                <h3>R$ {(lanche.preco * quantidade).toFixed(2)}</h3>
                            </button>
                        </div>
                    </div>
                </div>
            </Container>
        </>
    )

}