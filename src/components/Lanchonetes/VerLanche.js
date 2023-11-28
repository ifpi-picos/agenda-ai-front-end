import Lanche from '@/services/Lanche';
import styles from '@/app/lanche/lanche.module.css'
import stylesModal from '@/components/layout/SucessErrorModal.module.css'
import Image from 'next/image'
import { useEffect, useState } from 'react';

function VerLanche({ lanche, editMode, setEditMode }) {
    const [token, setToken] = useState('')
    const [showDeleteModal, setShowDeleteModal]= useState(false)

    useEffect(() => {
        const storedToken = localStorage.getItem("token")
        if (storedToken) {
            setToken(storedToken)
        }
    }, [])

    const handleEditClick = () => {
        console.log('setEditMode(true);')
        setEditMode(true);
    };
    const handleRemoveClick = () => {
        setShowDeleteModal(true)
        /*if (token) {
            await Lanche.deletarPorId(lanche.idLanche, token)
        }*/
        //redirecionar()
    }
    const onClose = () => {
        setShowDeleteModal(false)
    }
    const confirmarRemoverLanche = async () => {
        if (token) {
            await Lanche.deletarPorId(lanche.idLanche, token)
            redirecionar()
        }
    }
    const redirecionar = () => {
        window.location.href = (`/gerente/${lanche.idLanchonete}/lanches`)
    }
    return (
        <div className={styles.boxLanche}>
            <div className={styles.imageArea}>
                <Image width={300} height={300} src={lanche.urlImagem} alt="Imagem amostral de lanche" />
            </div>
            <div className={styles.infoLanche}>
                <h1>{lanche.nomeLanche}</h1>
                <div className={styles.tituloInfo}>Descrição:</div>
                <div className={styles.item}>{lanche.descricao}</div>

                <div className={styles.tituloInfo}>Tipo de lanche:</div>
                <div className={styles.item}>{lanche.tipo}</div>

                <div className={styles.tituloInfo}>Preço:</div>
                <div className={styles.item}>R$ {lanche.preco.toFixed(2)}</div>
                <div className={styles.botoes}>
                    <button onClick={handleRemoveClick}>Remover</button>
                    <button onClick={handleEditClick}>Editar</button>
                </div>
                {showDeleteModal && (
                    <div className={styles.modal}>
                    <div className={styles.modal_content}>
                      <p>Realmente deseja remover esse lanche de sua lanchonete?</p>
                      <div className={styles.botoesModal}>
                          <button onClick={onClose}>Cancelar</button>
                          <button onClick={confirmarRemoverLanche}>Confirmar</button>
                      </div>
                    </div>
                  </div>
                )}
            </div>
        </div>
    )
}

export default VerLanche