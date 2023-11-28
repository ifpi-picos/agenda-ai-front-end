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

export default function TelaCantina({params}) {
    //const lanchonete = await BuscaLanchonete.buscarPorId(params.idLanchonete)
    const [lanchonete, setLanchonete] = useState(null)

    useEffect(() => {
        BuscaLanchonete.buscarPorId(params.idLanchonete)
            .then((lanchoneteData) => {
                setLanchonete(lanchoneteData)
            }).catch((error) => {
                console.error("Erro ao buscar lanchonete")
            })
    }, [params.idLanchonete])

    if (!lanchonete) {
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
                <p>.</p>
                <p>.</p>
                <p>.</p>
                <p>.</p>
                <p>Visualização de cardápio em produção</p>
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
