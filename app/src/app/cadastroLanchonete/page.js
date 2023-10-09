'use client'
import styles from '@/app/cadastroLanchonete/cadastroCantina.module.css'
import Navbar from '@/components/Navbar'
import { yupResolver } from '@hookform/resolvers/yup'
import axios from 'axios'
import { useRouter } from 'next/navigation'
import { useForm } from 'react-hook-form'
import * as yup from 'yup'

const schema = yup.object().shape({
    nome: yup.string().required('O nome deve vser preenchido'),
    cnpj: yup.string().required('O cnpj deve vser preenchido'),
    cep: yup.string().required('O cep deve vser preenchido'),
    logradouro: yup.string().required('O logradouro deve vser preenchido'),
    numero: yup.string().required('O numero deve vser preenchido'),
    bairro: yup.string().required('O bairro deve vser preenchido'),
    cidade: yup.string().required('O cidade deve vser preenchido'),
    estado: yup.string().required('O estado deve vser preenchido'),
})

export default function FormCadastroCantina() {
    const router = useRouter()

    const { register, handleSubmit, formState: {errors}} = useForm({
        resolver: yupResolver(schema)
    })

    const onSubmit = (data) => axios.post("http://localhost:3001/lanchonetes/criar", {
        nome: data.nome,
        cnpj: data.cnpj,
        cep: data.cep,
        logradouro: data.logradouro,
        numero: data.numero,
        bairro: data.bairro,
        cidade: data.cidade,
        estado: data.estado
    }).then((response) => {
        router.push('/home')
    })

    return (
        <>
            <Navbar />
            <form onSubmit={handleSubmit(onSubmit)} className={styles.formulario_cantina}>
                <h1>Formulário para cadastro de sua Cantina</h1>
                <label htmlFor="nomeCantina">Nome:</label>
                <input 
                    type="text"
                    id="nomeCantina"
                    name="nomeCantina"
                    placeholder="Digite o nome da cantina"
                    {...register("nome")}
                />
                <label htmlFor="cnpj">CNPJ:</label>
                <input 
                    type="text"
                    id="cnpj"
                    name="cnpj"
                    placeholder="Digite o CNPJ da cantina"
                    {...register("cnpj")}
                />
                <label for="imagem">Anexe uma imagem da cantina</label>
                <input 
                    type="file"
                    id="imagem"
                    name="imagem"
                />
                
                <h3>Endereço</h3>
                <label for="cep">Informe seu CEP:</label>
                <input
                    type="text"
                    id="cep"
                    name="cep" 
                    placeholder="Digite o CEP"
                    pattern="[0-9]{5}-[0-9]{3}"
                    required
                    {...register("cep")}
                />

                <label for="rua">Logradouro:</label>
                <input
                    type="text"
                    id="logradouro" 
                    name="logradouro" 
                    placeholder="Digite o logradouro"
                    {...register("logradouro")}/>
                <label for="numero">Número:</label>
                <input 
                    type="text" 
                    id="numero" 
                    name="numero" 
                    placeholder="Digite o numero"
                    {...register("numero")}
                />

                <label for="bairro">Bairro:</label>
                <input 
                    type="text" 
                    id="bairro" 
                    name="bairro" 
                    placeholder="Digite o nome do bairro"
                    {...register("bairro")}
                />

                <label for="cidade">Cidade:</label>
                <input
                    type="text"
                    id="cidade"
                    name="cidade"
                    placeholder="Digite o nome da cidade"
                    {...register("cidade")}
                />

                <label for="estado">Estado:</label>
                <input
                    type="text"
                    name="estado"
                    id="estado"
                    placeholder="Digite o nome do estado"
                    {...register("estado")}
                />

                <button className={styles.botao_formulario} type="submit">Enviar</button>  
            </form>
        </>
    )
}