"use client"
import CardLanche from "@/components/Lanchonetes/CardLanche";
import Navbar from "@/components/Navbar";
import Container from "@/components/layout/Container";

import styles from './lanches.module.css'

import ListarLanches from '@/services/ListarLanches'

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";
import BarraDePesquisa from "@/components/layout/BarraDePesquisa";
import { useEffect, useState } from "react";
import Loading from "@/components/Loading";
export default async function Lanches({ params }) {
    const [lanches, setLanches] = useState(null)

    useEffect(() => {
        ListarLanches.listarLanches(params.idLanchonete)
            .then((lanchesData) => {
                setLanches(lanchesData)
            })
            .catch((error) => {
                console.error("Erro ao buscar lanches:", error)
            })
    }, [params.idLanchonete])

    if (!lanches) {
        return (
            <Loading />
        );
    }

    //const lanches = await ListarLanches.listarLanches(params.idLanchonete)

    return (
        <>
            <Navbar />
            <Container>
                <div className={styles.acoes}>
                    <BarraDePesquisa placeholder="Pesquisar Lanche..."/>
                    <Link href={`/gerente/${params.idLanchonete}/adicionar_lanche`} className={styles.novo_lanche} passHref>
                        <FontAwesomeIcon icon={faPlus} className={styles.iconFaPlus}/>
                        <p>Adicionar lanche</p>
                    </Link>
                </div>
                <div className={styles.lanches}>
                    {lanches.length > 0 &&
                        lanches.map((lanche) => (
                                    <CardLanche
                                        key={lanche.idLanche}
                                        idLanche={lanche.idLanche}
                                        nomeLanche={lanche.nomeLanche}
                                        preco={lanche.preco}
                                        urlImagem={lanche.urlImagem}
                                        urlHref={`/lanche/${lanche.idLanche}`}
                                    />
                        ))
                    }
                </div>
            </Container>
        </>
    )
}