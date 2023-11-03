import styles from '@/components/Lanchonetes/PainelLanchonete.module.css'
import Image from 'next/image'
import imagemLanchonete from '/public/imagem-lanchonete1.jpg'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClock } from '@fortawesome/free-solid-svg-icons';
import { faCalendarDays } from '@fortawesome/free-solid-svg-icons';
import { faLocationDot } from '@fortawesome/free-solid-svg-icons';

export default function PainelLanchonete() {

    return (
        <div className={styles.painelLanchonete}>
            <div className={styles.imageArea}>
                <Image src={imagemLanchonete}/>
            </div>
            <div className={styles.textInfo}>
                <h1>Cantina - IFPI Picos</h1>
                <div className={styles.textDescryption}>
                    <div className={styles.singleInfo}>
                        <FontAwesomeIcon className={styles.icon} icon={faLocationDot} />
                        <h3>Parque Industrial, Picos</h3>
                    </div>
                    <div className={styles.singleInfo}>
                        <FontAwesomeIcon className={styles.icon} icon={faCalendarDays} />
                        <h3>SEG - SEX</h3>
                    </div>
                    <div className={styles.singleInfo}>
                        <FontAwesomeIcon className={styles.icon} icon={faClock} />
                        <h3> 8:00 - 11:00 / 15:00 - 21:00</h3>
                    </div>
                </div>
            </div>
        </div>
    )
}