import styles from '@/app/lanche/lanche.module.css';
import Image from 'next/image';
import { useState } from 'react';

function AlterarLanche({ lanche, editMode, setEditMode }) {
    const [formData, setFormData] = useState({
        nomeLanche: lanche.nomeLanche,
        descricao: lanche.descricao,
        preco: lanche.preco,
        tipo: lanche.tipo,
        urlImagem: lanche.urlImagem,
    });

    const handleCancelClick = () => {
        setEditMode(false);
    };

    const handleSaveClick = async () => {
        try {
            const response = await fetch(`http://localhost:3001/lanche/alterar/${lanche.idLanche}`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            });

            if (response.ok) {
                const data = await response.json();
                console.log('Lanche atualizado com sucesso:', data);
                setEditMode(false);
            } else {
                console.error('Erro ao atualizar lanche:', response.statusText);
            }
        } catch (error) {
            console.error('Erro ao atualizar lanche:', error);
        }
    };

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };

    return (
        <div className={styles.boxLanche}>
            <div className={styles.imageArea}>
                <Image width={300} height={300} src={lanche.urlImagem} alt="Imagem amostral de lanche" />
            </div>
            <form className={styles.formLanche}>
                <h1>Edição de lanche</h1>
                <input type="text" name="nomeLanche" value={formData.nomeLanche} onChange={handleInputChange} required />
                <input type="text" name="descricao" value={formData.descricao} onChange={handleInputChange} required />
                <select
                    className={styles.comboBox}
                    name="tipo"
                    value={formData.tipo}
                    onChange={handleInputChange}
                    required
                >
                    <option value="Salgado">Salgado</option>
                    <option value="Bolo">Bolo</option>
                    <option value="Doce">Doce</option>
                    <option value="Bebida">Bebida</option>
                    <option value="Outro">Outro tipo</option>
                </select>
                <input type="text" name="preco" value={formData.preco.toFixed(2)} onChange={handleInputChange} required />
                <div className={styles.botoes}>
                    <button type="button" onClick={handleCancelClick}>
                        Cancelar
                    </button>
                    <button type="button" onClick={handleSaveClick}>
                        Salvar
                    </button>
                </div>
            </form>
        </div>
    );
}

export default AlterarLanche;
