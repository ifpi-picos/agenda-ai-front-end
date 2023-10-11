'use client'
import styles from './home.module.css'
import CardLanchonete from '@/components/CardLanchonete'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'
import Link from 'next/link'
import Navbar from '@/components/Navbar'
import { useEffect, useState } from 'react'


export default function Home() {
    const [lanchonetes, setLanchonetes] = useState([])

    useEffect(() => {
        fetch('http://localhost:3001/lanchonetes/listar', {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            },
        }).then(resp => resp.json())
        .then((data) => {
            console.log(data)
            setLanchonetes(data)
        })
        .catch((err) => console.log(err))
    }, [])

    return (
        <>
            <Navbar />
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
                {lanchonetes.length > 0 &&
                    lanchonetes.map((lanchonete) => (
                        <CardLanchonete 
                        id={lanchonete.id}
                        nomeLanchonete={lanchonete.nomeLanchonete}
                        endereco={lanchonete.endereco}
                        />
                    ))}
            {lanchonetes.length == 0 && (
                <p>Não há projetos cadastrados!</p>
            )}
                </div>
            </main>
        </>
    )
}