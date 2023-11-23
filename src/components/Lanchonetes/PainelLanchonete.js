
import styles from '@/components/Lanchonetes/PainelLanchonete.module.css'
import Image from 'next/image'
import imagemLanchonete from '/public/imagem-lanchonete1.jpg'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClock } from '@fortawesome/free-solid-svg-icons';
import { faCalendarDays } from '@fortawesome/free-solid-svg-icons';
import { faLocationDot } from '@fortawesome/free-solid-svg-icons';
import { faPen } from '@fortawesome/free-solid-svg-icons';
import Link from 'next/link';

export default function PainelLanchonete({ lanchonete, edit, editUrl }) {
    const endereco = lanchonete.endereco;
    const enderecoFormatado = `${endereco.logradouro}, ${endereco.numero} - ${endereco.bairro}, ${endereco.cidade}`;

    const enderecoGoogleMapsURL = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(enderecoFormatado)}`;

    return (
        <div className={styles.painelLanchonete}>
            <div className={styles.imageArea}>
                <Image src={imagemLanchonete} alt='Imgem representativa da lanchonete'/>
            </div>
            <div className={styles.textInfo}>
                <h1>{lanchonete.nomeLanchonete}</h1>
                <div className={styles.textDescryption}>
                    <div className={styles.singleInfo}>
                        <div className={styles.divIcon}>
                            <FontAwesomeIcon className={styles.icon} icon={faLocationDot} />
                        </div>
                        <h3>
                            <a href={enderecoGoogleMapsURL} target="_blank" rel="noopener noreferrer">
                                {enderecoFormatado}
                            </a>
                        </h3>
                    </div>
                    <div className={styles.singleInfo}>
                        <div className={styles.divIcon}>
                            <FontAwesomeIcon className={styles.icon} icon={faCalendarDays} />
                        </div>
                        <h3>SEG - SEX</h3>
                    </div>
                    <div className={styles.singleInfo}>
                        <div className={styles.divIcon}>
                            <FontAwesomeIcon className={styles.icon} icon={faClock} />
                        </div>
                        <h3> 8:00 - 11:00 / 15:00 - 21:00</h3>
                    </div>
                </div>
                {edit && (
                    <Link href={editUrl} className={styles.buttonEdit} passHref>
                        <div><FontAwesomeIcon icon={faPen}/></div>
                        Editar
                    </Link>
                )}
            </div>
        </div>
    )
}