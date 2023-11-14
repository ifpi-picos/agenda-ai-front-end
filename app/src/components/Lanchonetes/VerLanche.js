import styles from '@/app/lanche/lanche.module.css'
import Image from 'next/image'
import { useState } from 'react';

function VerLanche({ lanche, editMode, setEditMode }) {
    
    const handleEditClick = () => {
        console.log('setEditMode(true);')
        setEditMode(true);
    };
    return (
        <div className={styles.boxLanche}>
            <div className={styles.imageArea}>
                <Image width={300} height={300} src={lanche.urlImagem} alt="Imagem amostral de lanche" />
            </div>
            <div className={styles.infoLanche}>
                <h1>{lanche.nomeLanche}</h1>
                <div className={styles.item}>{lanche.descricao}</div>
                <div className={styles.item}>{lanche.tipo}</div>
                <div className={styles.item}>R$ {lanche.preco.toFixed(2)}</div>
                <div className={styles.botoes}>
                    <button onClick={handleEditClick}>Editar</button>
                </div>
            </div>
        </div>
    )
}

export default VerLanche