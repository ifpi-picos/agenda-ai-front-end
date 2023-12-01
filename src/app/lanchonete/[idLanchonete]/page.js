'use client'
import Image from 'next/image'
import Navbar from '@/components/Navbar'
import styles from '@/app/lanchonete/lanchonete.module.css'
import Coxinha from '/public/coxinha.jpg'
import PainelLanchonete from '@/components/Lanchonetes/PainelLanchonete'
import Container from '@/components/layout/Container'
import BuscaLanchonete from '@/services/BuscaLanchonete'
import { useEffect, useState } from 'react'
import Loading from '@/components/Loading'
import ListarLanches from '@/services/ListarLanches'
import CardLanche from '@/components/Lanchonetes/CardLanche'

export default function TelaCantina({ params }) {
    //const lanchonete = await BuscaLanchonete.buscarPorId(params.idLanchonete)
    const [lanchonete, setLanchonete] = useState(null)
    const [lanches, setLanches] = useState(null)

    useEffect(() => {
        BuscaLanchonete.buscarPorId(params.idLanchonete)
            .then((lanchoneteData) => {
                setLanchonete(lanchoneteData)
            }).catch((error) => {
                console.error("Erro ao buscar lanchonete")
            })
        ListarLanches.listarLanches(params.idLanchonete)
            .then((lanchesData) => {
                setLanches(lanchesData)
            })
            .catch((error) => {
                console.error("Erro ao buscar lanches:", error)
            })
    }, [params.idLanchonete])

    if (!lanchonete || !lanches) {
        return (
            <Loading />
        )
    }

    return (
        <>
            <Navbar />
            <Container>
                <PainelLanchonete
                    lanchonete={lanchonete}
                />
                <h3 className={styles.h3LanchesDisponiveis}>Lanches disponíveis:</h3>
                <div className={styles.lanches}>
                    {lanches.length > 0 ? (
                        lanches.map((lanche) => (
                            <CardLanche
                                key={lanche.idLanche}
                                idLanche={lanche.idLanche}
                                nomeLanche={lanche.nomeLanche}
                                preco={lanche.preco}
                                urlImagem={lanche.urlImagem}
                                urlHref={`/cliente/lanche/${lanche.idLanche}`}
                            />
                        ))
                    ) : (
                        <p>Não há lanches cadastrados nessa lanchonete</p>
                    )}
                </div>
                {/*<div className={styles.amostragem}>
                    <div className={styles.categoria}>
                        <h2>Salgados</h2>
                    </div>
                    <div className={styles.amostragemSalgado}>
                        <div className={styles.cardSalgado}>
                            <Image src={Coxinha} alt="Imagem amostral de lanche" />
                            <div className={styles.salgadoInfo}>
                                <h2>Coxinha de frango</h2>
                                <h3>R$ 2,50</h3>
                            </div>
                        </div>
                        <div className={styles.cardSalgado}>
                            <Image src={Coxinha} alt="Imagem amostral de lanche" />
                            <div className={styles.salgadoInfo}>
                                <h2>Coxinha de frango</h2>
                                <h3>R$ 2,50</h3>
                            </div>
                        </div>
                        <div className={styles.cardSalgado}>
                            <Image src={Coxinha} alt="Imagem amostral de lanche" />
                            <div className={styles.salgadoInfo}>
                                <h2>Coxinha de frango</h2>
                                <h3>R$ 2,50</h3>
                            </div>
                        </div>
                        <div className={styles.cardSalgado}>
                            <Image src={Coxinha} alt="Imagem amostral de lanche" />
                            <div className={styles.salgadoInfo}>
                                <h2>Coxinha de frango</h2>
                                <h3>R$ 2,50</h3>
                            </div>
                        </div>
                    </div>
                    <div className={styles.categoria}>
                        <h2>Bolos</h2>
                    </div>
                    <div className={styles.amostragemSalgado}>
                        <div className={styles.cardSalgado}>
                            <Image src={Coxinha} alt="Imagem amostral de lanche" />
                            <div className={styles.salgadoInfo}>
                                <h2>Coxinha de frango</h2>
                                <h3>R$ 2,50</h3>
                            </div>
                        </div>
                        <div className={styles.cardSalgado}>
                            <Image src={Coxinha} alt="Imagem amostral de lanche" />
                            <div className={styles.salgadoInfo}>
                                <h2>Coxinha de frango</h2>
                                <h3>R$ 2,50</h3>
                            </div>
                        </div>
                        <div className={styles.cardSalgado}>
                            <Image src={Coxinha} alt="Imagem amostral de lanche" />
                            <div className={styles.salgadoInfo}>
                                <h2>Coxinha de frango</h2>
                                <h3>R$ 2,50</h3>
                            </div>
                        </div>
                    </div>
                    <div className={styles.categoria}>
                        <h2>Bebidas</h2>
                    </div>
                    <div className={styles.amostragemSalgado}>
                        <div className={styles.cardSalgado}>
                            <Image src={Coxinha} alt="Imagem amostral de lanche" />
                            <div className={styles.salgadoInfo}>
                                <h2>Coxinha de frango</h2>
                                <h3>R$ 2,50</h3>
                            </div>
                        </div>
                        <div className={styles.cardSalgado}>
                            <Image src={Coxinha} alt="Imagem amostral de lanche" />
                            <div className={styles.salgadoInfo}>
                                <h2>Coxinha de frango</h2>
                                <h3>R$ 2,50</h3>
                            </div>
                        </div>
                        <div className={styles.cardSalgado}>
                            <Image src={Coxinha} alt="Imagem amostral de lanche" />
                            <div className={styles.salgadoInfo}>
                                <h2>Coxinha de frango</h2>
                                <h3>R$ 2,50</h3>
                            </div>
                        </div>
                    </div>
                </div>*/}
            </Container>
        </>
    )

}
