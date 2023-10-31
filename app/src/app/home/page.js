'use client'
import styles from './home.module.css'
import CardLanchonete from '@/components/CardLanchonete'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'
import Link from 'next/link'
import Navbar from '@/components/Navbar'
import { useEffect, useState } from 'react'
import Loading from '@/components/Loading'

export default function Home() {
    const [lanchonetes, setLanchonetes] = useState([])
    const [loading, setLoading] = useState(true)

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
                setLoading(false);
            })
            .catch((err) => console.log(err))
    }, [])

    return (
        <>
            <Navbar />
            {loading ? (
                <Loading />
            ) : (
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
                            ))
                        }
                        {lanchonetes.length === 0 && (
                            <p>Não há lanchonetes cadastradas!</p>
                        )}
                    </div>

                </main>
            )}
        </>
    )
}