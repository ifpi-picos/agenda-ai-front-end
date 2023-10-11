'use client'
import styles from '@/app/cadastroLanchonete/cadastroCantina.module.css'
import Navbar from '@/components/Navbar'
import { yupResolver } from '@hookform/resolvers/yup'
import axios from 'axios'
import { useRouter } from 'next/navigation'
import { useForm } from 'react-hook-form'
import * as yup from 'yup'

const schema = yup.object().shape({
    nomeUsuario: yup.string().required('O nome deve ser preenchido'),
    email: yup.string().required('O nome deve ser preenchido'),
    password: yup.string().required('O nome deve ser preenchido'),
    nomeLanchonete: yup.string().required('O nome deve ser preenchido'),
    cnpj: yup.string().required('O cnpj deve ser preenchido'),
    cep: yup.string().required('O cep deve ser preenchido'),
    logradouro: yup.string().required('O logradouro deve ser preenchido'),
    numero: yup.string().required('O numero deve ser preenchido'),
    bairro: yup.string().required('O bairro deve ser preenchido'),
    cidade: yup.string().required('O cidade deve ser preenchido'),
    estado: yup.string().required('O estado deve ser preenchido'),
})

export default function FormCadastroCantina() {
    const router = useRouter()

    const { register, handleSubmit, formState: {errors}} = useForm({
        resolver: yupResolver(schema)
    })

    const onSubmit = (data) => axios.post("http://localhost:3001/lanchonetes/criar", {
        nomeUsuario: data.nomeUsuario,
        email: data.email,
        password: data.password,
        nomeLanchonete: data.nomeLanchonete,
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
                <label htmlFor="nomeUsuario">Nome do Gerente:</label>
                <input 
                    type="text"
                    id="nomeUsuario"
                    name="nomeUsuario"
                    placeholder="Digite o nome do gerente"
                    {...register("nomeUsuario")}
                />
                <label htmlFor="email">Email:</label>
                <input 
                    type="text"
                    id="email"
                    name="email"
                    placeholder="Digite o nome do gerente"
                    {...register("email")}
                />
                <label htmlFor="password">Senha:</label>
                <input 
                    type="password"
                    id="password"
                    name="password"
                    placeholder="Digite o nome do gerente"
                    {...register("password")}
                />
                <label htmlFor="nomeLanchonete">Nome da Cantina:</label>
                <input 
                    type="text"
                    id="nomeLanchonete"
                    name="nomeLanchonete"
                    placeholder="Digite o nome da cantina"
                    {...register("nomeLanchonete")}
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