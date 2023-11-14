import Link from 'next/link'
import styles from './CardLanche.module.css'
import Image from 'next/image'

export default function CardLanche({idLanche, nomeLanche, preco, urlImagem, urlHref}) {
    console.log(urlImagem)
    
    return (
        <div className={styles.cardLanche}>
            <Link href={urlHref}className={styles.LinkCardLanche}>
            <div className={styles.divImagem}>
                <Image width={100} height={100} src={urlImagem} alt="Imagem amostral de lanche" />
            </div>

            <div className={styles.info}>
                <h2>{nomeLanche}</h2>
                <h3>R$ {preco.toFixed(2)}</h3>
            </div>
            </Link>
        </div>
    )
}