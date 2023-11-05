'use client'

import PainelLanchonete from "@/components/Lanchonetes/PainelLanchonete";
import Navbar from "@/components/Navbar";
import Container from "@/components/layout/Container";
import styles from '../Gerente.module.css'

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCalendar, faFile, faHamburger, faList, faShoppingBag, faUtensilSpoon } from "@fortawesome/free-solid-svg-icons";

import BuscaLanchonete from "@/services/BuscaLanchonete";

export default async function GerenteLanchonetePage({ params }) {
    console.log(params.id)
    //const id = params.idLanchonete

    const lanchonete = await BuscaLanchonete.buscarPorId(params.idLanchonete)
    console.log(lanchonete.nomeLanchonete)

    return (
        <>
            <Navbar />
            <Container>
                <PainelLanchonete
                    lanchonete={lanchonete}
                />
                <div className={styles.opcoes}>
                    <div className={styles.cardOpcao}>
                        <FontAwesomeIcon className={styles.icon} icon={faHamburger} />
                        <div className={styles.opcaoTexto}>
                            <h2>Lanches</h2>
                        </div>
                    </div>
                    <div className={styles.cardOpcao}>
                        <FontAwesomeIcon className={styles.icon} icon={faCalendar} />
                        <div className={styles.opcaoTexto}>
                            <h2>Cardápio</h2>
                        </div>
                    </div>
                    <div className={styles.cardOpcao}>
                        <FontAwesomeIcon className={styles.icon} icon={faList} />
                        <div className={styles.opcaoTexto}>
                            <h2>Agendamentos</h2>
                        </div>
                    </div>
                    <div className={styles.cardOpcao}>
                        <FontAwesomeIcon className={styles.icon} icon={faFile} />
                        <div className={styles.opcaoTexto}>
                            <h2>Histórico de Pedidos</h2>
                        </div>
                    </div>
                </div>

            </Container>
        </>
    );
};
