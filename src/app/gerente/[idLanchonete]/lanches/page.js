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
import PrivateRoute from "@/components/PrivateRouter";
import BuscaLanchonete from "@/services/BuscaLanchonete";

export default function Lanches({ params }) {
    const [lanches, setLanches] = useState(null)
    const [lanchonete, setLanchonete] = useState(null)

    useEffect(() => {
        BuscaLanchonete.buscarPorId(params.idLanchonete)
            .then((lanchoneteData) => {
                setLanchonete(lanchoneteData);
                console.log(lanchoneteData.nomeLanchonete);
            })
            .catch((error) => {
                console.error("Erro ao buscar lanchonete:", error);
            });
        ListarLanches.listarLanches(params.idLanchonete)
            .then((lanchesData) => {
                setLanches(lanchesData)
            })
            .catch((error) => {
                console.error("Erro ao buscar lanches:", error)
            })
    }, [params.idLanchonete])

    if (!lanches || !lanchonete) {
        return (
            <Loading />
        );
    }

    //const lanches = await ListarLanches.listarLanches(params.idLanchonete)

    return (
        <PrivateRoute
            tipoUsuario={'gerente'}
            idUsuario={lanchonete.idUsuario}
        >
            <Navbar />
            <Container>
                <div className={styles.acoes}>
                    <BarraDePesquisa placeholder="Pesquisar Lanche..." />
                    <div className={styles.nomeLanchonete}><h1>{lanchonete.nomeLanchonete}</h1></div>
                    <Link href={`/gerente/${params.idLanchonete}/adicionar_lanche`} className={styles.novo_lanche} passHref>
                        <FontAwesomeIcon icon={faPlus} className={styles.iconFaPlus} />
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
        </PrivateRoute>
    )
}