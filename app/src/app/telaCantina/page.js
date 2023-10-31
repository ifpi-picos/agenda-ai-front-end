import Image from 'next/image'
import Link from 'next/link'
import Navbar from '@/components/Navbar'
import Lanchonete from '/public/imagem-lanchonete1.jpg'
import logo from '/public/logo-agendaai.png'
import styles from '@/app/telaCantina/telaCantina.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClock } from '@fortawesome/free-solid-svg-icons';
import { faCalendarDays } from '@fortawesome/free-solid-svg-icons';
import { faLocationDot } from '@fortawesome/free-solid-svg-icons';
import Coxinha from '/public/coxinha.jpg'


export default function TelaCantina() {

    return (
    <>
    <Navbar />

        <section className={styles.mainLanchonete}>
            <div className={styles.lanchoneteInfo}>
                <Image src={Lanchonete} alt="Imagem amostral da lanchonete" />
                <div className={styles.textInfo}>
                    <h1>Cantina Lanches comíveis</h1>
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
            <div className={styles.amostragem}>
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
            </div>
        </section>
    </>
    )

}
