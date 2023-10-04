import LinkButton from "../layaut/LinkButton"
import styles from './Apresentacao.module.css'
import logo from '../../img/logo-agendaai.png'

function Apresentacao() {
    return (
        <section className={styles.apresentacao}>
            <div className={styles.titulo}>
                <h1>Agenda aí</h1>
                <h2>Não espere pelo lanche, faça ele esperar por você!</h2>
            </div>
            <div className={styles.botoes}>
                <LinkButton to='/Login' text="Entrar" />
            </div>
            <div className={styles.img}>
                <img src={logo} alt="" />
            </div>
            <div className={styles.vantagens}>
                <h3>Vantagens de usar o nosso software:</h3>
                <ul>
                    <li>Praticidade ao agendar a compra do seu lanche</li>
                    <li>Menor tempo gasto ao resgatar o lanche na cantina</li>
                    <li>Garantia de adquirir seu lanche preferencial</li>
                    <li>Facilidade na compra do lanche de seus filhos na(s) escola(s)</li>
                </ul>
            </div>
            <div className={styles.passosSimples}>
                <h3>Passos simples para agendar seu lanche:</h3>
                <ol>
                    <li>Selecione a cantina em nossa plataforma.</li>
                    <li>Escolha o lanche desejado e o horário de retirada.</li>
                    <li>Retire seu lanche na cantina no horário agendado.</li>
                </ol>
            </div>
            <div className={styles.botoes}>
                <LinkButton text="Cadastrar cantina" to="/FormCadastroCantina" />
            </div>
        </section>
    )
}

export default Apresentacao