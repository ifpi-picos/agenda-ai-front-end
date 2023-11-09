'use client'
import CloudinaryUpload from "@/components/Cadastro/CloudinaryUpload";

// pages/adicionarLanche.js

import { useState } from 'react';
import axios from 'axios';

export default function AdicionarLanche() {
    const [formData, setFormData] = useState({
        nomeLanche: '',
        descricao: '',
        preco: '',
        tipo: '',
        urlImagem: '',
        idLanchonete: '',
    });

    const [successMessage, setSuccessMessage] = useState('');
    const [errorMessage, setErrorMessage] = useState('');
    const [errors, setErrors] = useState({});

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('http://localhost:3001/lanche/adicionarLanche', formData);
            console.log('Resposta do servidor:', response.data);
            setSuccessMessage('Lanche adicionado com sucesso!');
            setErrorMessage('');
        } catch (error) {
            console.error('Erro ao enviar solicitação POST:', error);
            setErrorMessage('Erro ao adicionar o lanche. Por favor, tente novamente.');
            setSuccessMessage('');
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
            <h1>Adicionar Lanche</h1>
            {successMessage && <p className="success-message">{successMessage}</p>}
            {errorMessage && <p className="error-message">{errorMessage}</p>}

            <form onSubmit={handleSubmit}>
                <div>
                    <label>Nome do Lanche</label>
                    <input
                        type="text"
                        name="nomeLanche"
                        value={formData.nomeLanche}
                        onChange={handleChange}
                    />
                </div>
                <div>
                    <label>Descrição</label>
                    <input
                        type="text"
                        name="descricao"
                        value={formData.descricao}
                        onChange={handleChange}
                    />
                </div>
                <div>
                    <label>Preço</label>
                    <input
                        type="text"
                        name="preco"
                        value={formData.preco}
                        onChange={handleChange}
                    />
                </div>
                <div>
                    <label>Tipo</label>
                    <input
                        type="text"
                        name="tipo"
                        value={formData.tipo}
                        onChange={handleChange}
                    />
                </div>
                <div>
                    <label>idLanchonete</label>
                    <input
                        type="text"
                        name="idLanchonete"
                        value={formData.idLanchonete}
                        onChange={handleChange}
                    />
                </div>
                <div>
                    <label>Imagem do Lanche</label>
                    <CloudinaryUpload
                        onURLChange={handleImageURLChange}
                        defaultImage={formData.urlImagem}
                    />
                    {errors.imagem && (
                        <div className="error">{errors.imagem.message}</div>
                    )}
                </div>
                <button type="submit">Adicionar Lanche</button>
            </form>
        </div>
    );
}
