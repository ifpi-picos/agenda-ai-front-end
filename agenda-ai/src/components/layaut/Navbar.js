import styles from './Navbar.module.css'
import {Link, useLocation} from 'react-router-dom'
import Container from './Container'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fas } from '@fortawesome/free-solid-svg-icons';


import logo from '../../img/logo-agendaai.png';

function Navbar() {
    const location = useLocation();

    const getLinkBasedOnLocation = () => {
        if (location.pathname === '/Home') {
            return (
                <ul className={styles.list}>
                    <Link to="/" className={styles.item}>
                        <FontAwesomeIcon icon={'clipboard-list'}/>
                    </Link>
                    <Link to="/" className={styles.item}>
                        <FontAwesomeIcon icon={'clock'}/>
                    </Link>
                </ul>
            )
        } else if (location.pathname === '/FormCadastroCantina') {
            return (
                <Link to="/" className={styles.item}>Voltar</Link>
            ) 
        }
        return null
    }

    return (
        <nav className={styles.navbar}>
            <Container>
                <Link className={styles.logo} to='/Home'>
                    <img src={logo} alt="MyCodes" />
                </Link>
                <ul className={styles.list}>
                    <li className={styles.item}>
                        {getLinkBasedOnLocation()}
                    </li>
                </ul>
            </Container>
        </nav>
    )
}

export default Navbar