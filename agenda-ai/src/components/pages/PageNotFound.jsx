import styles from "./PageNotFound.module.css"
import imgErro from "../../img/agendaai_erro_img.png"

function PageNotFound() {
    return (
        <div className={styles.pageNotFound}>
            <img src={imgErro}/>
            <div className={styles.erroCod}>404</div>
            <div className={styles.erroMsg}>Página não encontrada!</div>
        </div>
    )
}

export default PageNotFound