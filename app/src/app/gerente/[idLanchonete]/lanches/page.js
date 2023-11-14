import CardLanche from "@/components/Lanchonetes/CardLanche";
import Navbar from "@/components/Navbar";
import Container from "@/components/layout/Container";

import styles from './lanches.module.css'

import ListarLanches from '@/services/ListarLanches'

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";
import BarraDePesquisa from "@/components/layout/BarraDePesquisa";
export default async function Lanches({ params }) {
    console.log(params.idLanchonete)
    const lanches = await ListarLanches.listarLanches(params.idLanchonete)

    return (
        <>
            <Navbar />
            <Container>
                <div className={styles.acoes}>
                    <BarraDePesquisa placeholder="Pesquisar Lanche..."/>
                    <Link href={`/gerente/${params.idLanchonete}/adicionar_lanche`} className={styles.novo_lanche} passHref>
                        <FontAwesomeIcon icon={faPlus} className={styles.iconFaPlus}/>
                        Adicionar lanche
                    </Link>
                </div>
                <div className={styles.lanches}>
                    {lanches.length > 0 &&
                        lanches.map((lanche) => (
                                    <CardLanche
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