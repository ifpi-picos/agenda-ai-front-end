'use client'

import PainelLanchonete from "@/components/Lanchonetes/PainelLanchonete";
import Navbar from "@/components/Navbar";
import Container from "@/components/layout/Container";
import styles from '../Gerente.module.css'

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCalendar, faFile, faHamburger, faList, faShoppingBag, faUtensilSpoon } from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";

import BuscaLanchonete from "@/services/BuscaLanchonete";
import PrivateRoute from "@/components/PrivateRouter";
import { useState, useEffect } from "react";

export default function GerenteLanchonetePage({ params }) {
    //const id = params.idLanchonete

    const [lanchonete, setLanchonete] = useState(null);

    useEffect(() => {
        BuscaLanchonete.buscarPorId(params.idLanchonete)
            .then((lanchoneteData) => {
                setLanchonete(lanchoneteData);
                console.log(lanchoneteData.nomeLanchonete);
            })
            .catch((error) => {
                console.error("Erro ao buscar lanchonete:", error);
            });
    }, [params.idLanchonete]);

    if (!lanchonete) {
        // Pode mostrar um indicador de carregamento aqui, se necessário
        return null;
    }

    return (
        <PrivateRoute tipoUsuario={'gerente'}>
            <Navbar opcoesGerente={true}/>
            <Container>
                <PainelLanchonete
                    lanchonete={lanchonete}
                    edit={true}
                    editUrl={`/gerente/${params.idLanchonete}/editar`}
                />
                <div className={styles.opcoes}>
                    <Link href={`/gerente/${params.idLanchonete}/lanches`} passHref>
                        <div className={styles.cardOpcao}>
                            <FontAwesomeIcon className={styles.icon} icon={faHamburger} />
                            <div className={styles.opcaoTexto}>
                                <h2>Lanches</h2>
                            </div>
                        </div>
                    </Link>
                    <Link href={`/gerente/${params.idLanchonete}/cardapio`} passHref>
                        <div className={styles.cardOpcao}>
                            <FontAwesomeIcon className={styles.icon} icon={faCalendar} />
                            <div className={styles.opcaoTexto}>
                                <h2>Cardápio</h2>
                            </div>
                        </div>
                    </Link>
                    <Link href={`/gerente/${params.idLanchonete}/agendamentos`} passHref>
                        <div className={styles.cardOpcao}>
                            <FontAwesomeIcon className={styles.icon} icon={faList} />
                            <div className={styles.opcaoTexto}>
                                <h2>Agendamentos</h2>
                            </div>
                        </div>
                    </Link>
                    <Link href={`/gerente/${params.idLanchonete}/historico-pedidos`} passHref>
                        <div className={styles.cardOpcao}>
                            <FontAwesomeIcon className={styles.icon} icon={faFile} />
                            <div className={styles.opcaoTexto}>
                                <h2>Histórico de Pedidos</h2>
                            </div>
                        </div>
                    </Link>

                </div>

            </Container>
        </ PrivateRoute>
    );
};

