'use client'
import CloudinaryUpload from "@/components/Cadastro/CloudinaryUpload";
import { useEffect, useState } from 'react';
import axios from 'axios';
import Navbar from "@/components/Navbar";
import Container from "@/components/layout/Container";

import styles from './AdicionarLanche.module.css'
import Modal from "@/components/layout/SucessErrorModal";
import { useRouter } from "next/navigation";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";

export default function AdicionarLanche({ params }) {
    const [formData, setFormData] = useState({
        nomeLanche: '',
        descricao: '',
        preco: '',
        tipo: '',
        urlImagem: '',
        idLanchonete: params.idLanchonete,
    });

    const router = useRouter()

    const [successMessage, setSuccessMessage] = useState('');
    const [errorMessage, setErrorMessage] = useState('');
    const [errors, setErrors] = useState({});
    const [isModalOpen, setModalOpen] = useState(false);

    const handleModalClose = () => {
        setModalOpen(false);
        if (successMessage) {
            window.location.href = `/gerente/${params.idLanchonete}/lanches`
        } else {
            setSuccessMessage('');
            setErrorMessage('');
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log(formData)
        try {
            const response = await axios.post('https://agendaai-api.onrender.com/lanche/adicionarLanche', formData);
            console.log('Resposta do servidor:', response.data);
            setSuccessMessage('Lanche adicionado com sucesso!');
            setErrorMessage('');
            setModalOpen(true);
        } catch (error) {
            console.error('Erro ao enviar solicitação POST:', error);
            setErrorMessage('Erro ao adicionar o lanche. Por favor, tente novamente.');
            setSuccessMessage('');
            setModalOpen(true);
        }
    };

    const handleImageURLChange = (imageUrl) => {
        setFormData({ ...formData, urlImagem: imageUrl });
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    return (
        <div>
            <Navbar />
            <Container>

                <form onSubmit={handleSubmit} className={styles.form}>

                    <h1>Adicionar Lanche</h1>

                    <div className={styles.formArea}>
                        <label>Imagem do Lanche</label>
                        <CloudinaryUpload
                            onURLChange={handleImageURLChange}
                            defaultImage={formData.urlImagem}
                            height={250}
                            width={250}
                        />
                        {errors.imagem && (
                            <div className="error">{errors.imagem.message}</div>
                        )}
                    </div>
                    <div className={styles.formArea}>
                        <label>Nome do Lanche</label>
                        <input
                            type="text"
                            name="nomeLanche"
                            placeholder="Digite o nome do lanche"
                            value={formData.nomeLanche}
                            onChange={handleChange}
                        />
                    </div>
                    <div className={styles.formArea}>
                        <label>Descrição</label>
                        <input
                            type="text"
                            name="descricao"
                            placeholder="Digite uma pequena descrição do lanche"
                            value={formData.descricao}
                            onChange={handleChange}
                        />
                    </div>
                    <div className={styles.formArea}>
                        <label>Preço</label>

                        <input
                            type="text"
                            name="preco"
                            placeholder="Informe o preço"
                            value={formData.preco}
                            onChange={handleChange}
                        />
                    </div>
                    <div className={styles.formArea}>
                        <label>Tipo</label>
                        <select
                            name="tipo"
                            value={formData.tipo}
                            onChange={handleChange}
                        >
                            <option value="Salgado">Salgado</option>
                            <option value="Bolo">Bolo</option>
                            <option value="Doce">Doce</option>
                            <option value="Bebida">Bebida</option>
                            <option value="Outro">Outro tipo</option>
                        </select>
                    </div>
                    <button type="submit" className={styles.buttonSubmit}>Adicionar Lanche</button>
                </form>

                {successMessage && <Modal
                    isOpen={isModalOpen}
                    message={successMessage}
                    onClose={handleModalClose}
                />}
                {errorMessage && <Modal
                    isOpen={isModalOpen}
                    message={errorMessage}
                    onClose={handleModalClose}
                />}
                <button className={styles.botaoVoltar} onClick={() => router.back()}>
                    <FontAwesomeIcon icon={faArrowLeft} />
                    Voltar
                </button>
            </Container>

        </div>
    );
}
