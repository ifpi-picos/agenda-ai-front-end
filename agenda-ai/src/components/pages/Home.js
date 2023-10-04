import styles from './Home.module.css'
import CardLanchonete from '../layaut/CardLanchonete'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom'

function Home() {
    return (
        <main className={styles.home_page}>
            <div className={styles.search_section}>
                <h3>Lanchonetes disponíveis:</h3>
                <div className={styles.search_bar}>
                    <input
                        type="text"
                        placeholder="Buscar lanchonetes..."
                    />
                    <div className={styles.search_icon}>
                        <FontAwesomeIcon icon={faSearch} />
                    </div>
                </div>
            </div>
            <div className={styles.lanchonetes}>
                <Link to="/Cantina">
                    <CardLanchonete />
                </Link>
                <Link to="/Cantina">
                    <CardLanchonete />
                </Link>
                <Link to="/Cantina">
                    <CardLanchonete />
                </Link>
                <Link to="/Cantina">
                    <CardLanchonete />
                </Link>
            </div>
        </main>
    )
}

export default Home