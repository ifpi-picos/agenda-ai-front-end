import styles from './BarraDePesquisa.module.css'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'

export default function BarraDePesquisa({placeholder}) {
    return (
        <div className={styles.search_bar}>
            <input
                type="text"
                placeholder={placeholder}
            />
            <div className={styles.search_icon}>
                <FontAwesomeIcon icon={faSearch} />
            </div>
        </div>
    )
}