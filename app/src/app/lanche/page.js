import Image from 'next/image'
import Navbar from '@/components/Navbar'
import Coxinha from '/public/coxinha.jpg'
import styles from '@/app/lanche/lanche.module.css'
import Container from '@/components/layout/Container'

export default function Lanche(){

    return (
        <>
            <Navbar />
            <Container>

            <div className={styles.boxLanche}>
                <Image src={Coxinha} alt="Imagem amostral de lanche" />
                <form className={styles.formLanche}>
                    <h1>Edição de lanche</h1>
                    <input
                        type='text'
                        id='nomeLanche'
                        name='nomeLanche'
                        placeholder='Nome do lanche'
                        required
                    />
                    <select id="categoria" name="categoria" className={styles.comboBox} defaultValue="" required>
                        <option value="salgado">Salgado</option>
                        <option value="bebida">Bebida</option>
                        <option value="bolo">Bolo</option>
                    </select>
                    <input
                        type='text'
                        id='descricaoLanche'
                        name='descricaoLanche'
                        placeholder='Descrição do lanche'
                        required
                    />
                    <input
                        type='text'
                        id='precoLanche'
                        name='precoLanche'
                        placeholder='Preço do lanche'
                        required
                    />
                    <div className={styles.botoes}>
                        <button className={styles.cancelar}>Cancelar</button>
                        <button>Salvar</button>
                    </div>
                </form>
            </div>

            </Container>
        </>
    )

}