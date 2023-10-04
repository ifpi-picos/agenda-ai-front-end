import styles from './FormCadastroCantina.module.css'

function FormCadastroCantina() {
    return (
        <form className={styles.formulario_cantina}>
            <h1>Formulário para cadastro de sua Cantina</h1>
            <label htmlFor="nomeCantina">Nome:</label>
            <input 
                type="text"
                id="nomeCantina"
                name="nomeCantina"
                placeholder="Digite o nome da cantina"
            />
            <label htmlFor="cnpj">CNPJ:</label>
            <input 
                type="text"
                id="cnpj"
                name="cnpj"
                placeholder="Digite o CNPJ da cantina"
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
            />

            <label for="rua">Logradouro:</label>
            <input
                type="text"
                id="logradouro" 
                name="logradouro" 
                placeholder="Digite o logradouro"/>

            <label for="numero">Número:</label>
            <input 
                type="text" 
                id="numero" 
                name="numero" 
                placeholder="Digite o numero"
            />

            <label for="bairro">Bairro:</label>
            <input 
                type="text" 
                id="bairro" 
                name="bairro" 
                placeholder="Digite o nome do bairro"
            />

            <label for="cidade">Cidade:</label>
            <input
                type="text"
                id="cidade"
                name="cidade"
                placeholder="Digite o nome da cidade"
            />

            <label for="estado">Estado:</label>
            <input
                type="text"
                name="estado"
                id="estado"
                placeholder="Digite o nome do estado"
            />

            <button className={styles.botao_formulario} type="submit">Enviar</button>  
        </form>
    )
}

export default FormCadastroCantina