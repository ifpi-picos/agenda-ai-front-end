import styles from '@/app/lanche/lanche.module.css';
import { apiUrl } from '@/config/config';
import Image from 'next/image';
import { useEffect, useState } from 'react';

function AlterarLanche({ lanche, editMode, idLanche, setLanche, setEditMode }) {
    const [formData, setFormData] = useState({
        nomeLanche: lanche.nomeLanche,
        descricao: lanche.descricao,
        preco: lanche.preco,
        tipo: lanche.tipo,
        urlImagem: lanche.urlImagem,
    });
    const [token, setToken] = useState('')
    const [erro, setErro] = useState(null)

    useEffect(() => {
        const storedToken = localStorage.getItem("token")
        if(storedToken) {
            setToken(storedToken)
        }
    }, [])

    const handleCancelClick = () => {
        setEditMode(false);
    };

    const handleSaveClick = async () => {
        const precoRegex = /^\d+(\.\d{1,2})?$/;
        if (!precoRegex.test(formData.preco)) {
            setErro('Formato inválido para o preço. Use o formato X.XX');
            return;
        }
        try {
            const response = await fetch(`${apiUrl}/lanche/alterar/${lanche.idLanche}`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `${token}`
                },
                body: JSON.stringify(formData),
            });

            if (response.ok) {
                const data = await response.json();
                setErro(null)
                console.log('Lanche atualizado com sucesso:', data);
                window.location.reload()
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
                <label>Nome do lanche:</label>
                <input type="text" name="nomeLanche" value={formData.nomeLanche} onChange={handleInputChange} required />

                <label>Descrição:</label>
                <input type="text" name="descricao" value={formData.descricao} onChange={handleInputChange} required />

                <label>Tipo:</label>
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

                <label>Preço:</label>
                <input type="text" name="preco" value={formData.preco} onChange={handleInputChange} required />
                {erro && <p className={styles.erro}>{erro}</p>}
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
