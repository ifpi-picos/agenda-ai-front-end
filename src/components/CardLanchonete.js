import styles from './CardLanchonete.module.css'
import { faStore } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Link from 'next/link'

function CardLanchonete ({id, nomeLanchonete, endereco}) {
    return (
        <div className={styles.card}>
            <Link href={`/lanchonete/${id}`}>
                <div className={styles.card_lanchonete}>
                    <div className={styles.divImagem}>
                        <FontAwesomeIcon className={styles.icon} icon={faStore}/>
                    </div>
                    <div className={styles.divInfo}>
                        <h2>{nomeLanchonete}</h2>
                        <h3 className={styles.endereco}>{endereco}</h3>
                        <h3>Horário</h3>
                    </div>
                </div>
            </Link>
        </div>
    )
}

export default CardLanchonete