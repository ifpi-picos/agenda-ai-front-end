import Navbar from "@/components/Navbar";
import Container from "@/components/layout/Container";
import BuscaLanchonete from "@/services/BuscaLanchonete";
import styles from "@/app/gerente/[idLanchonete]/editar/editar.module.css";
import Image from "next/image";
import imagemLanchonete from "../../../../../public/imagem-lanchonete1.jpg";


export default async function EditarLanchonete({params}) {
    const lanchonete = await BuscaLanchonete.buscarPorId(params.idLanchonete)

    return (
        <>
            <Navbar />
            <Container>
                <div className={styles.boxImage}>
                    <Image src={imagemLanchonete} alt="Imagem da lanchonete" width={300} height={200} />
                    <form className={styles.formImage}>
                        <label>Editar: </label>
                        <input type="file" id="imagem" name="imagem" />
                    </form>
                </div>
                <div className={styles.boxEdit}>
                    <div className={styles.cantinaInfo}>
                        <form className={styles.formInfo}>
                            <h1>Edição de informações</h1>
                            <label>Nome Cantina:</label>
                            <input type="text" id="nomeCantina" name="nomeCantina" placeholder="Digite o novo nome da Cantina" />
                            <label>Nome Gerente:</label>
                            <input type="text" id="NomeGerente" name="NomeGerente" placeholder="Digite o novo nome de gerente" />
                            <label>Email:</label>
                            <input type="text" id="Email" name="Email" placeholder="Digite o novo Email" />
                            <label>Senha:</label>
                            <input type="password" id="password" name="password" placeholder="Digite a nova senha" />
                            <label>Confirmar senha:</label>
                            <input type="password" id="password" name="password" placeholder="Confirme a nova senha" />
                            <label>CNPJ:</label>
                            <input type="text" id="CNPJ" name="CNPJ" placeholder="Digite o novo CNPJ" />
                        </form>
                    </div>
                    <div className={styles.cantinaEndereco}>
                        <form className={styles.formEndereco}>
                            <h1>Edição de endereço</h1>
                            <label>CEP:</label>
                            <input type="text" id="cep" name="cep" placeholder="Digite o novo CEP" />
                            <label>Logradouro:</label>
                            <input type="text" id="logradouro" name="logradouro" placeholder="Digite o novo logradouro" />
                            <label>Número:</label>
                            <input type="text" id="numero" name="numero" placeholder="Digite o novo número da casa" />
                            <label>Bairro:</label>
                            <input type="text" id="bairro" name="bairro" placeholder="Digite o novo bairro" />
                            <label>Cidade:</label>
                            <input type="text" id="cidade" name="cidade" placeholder="Digite a nova cidade" />
                            <label>Estado:</label>
                            <input type="text" id="estado" name="estado" placeholder="Digite o novo estado" />
                            <div className={styles.botoes}>
                                <button>cancelar</button>
                                <button>Salvar</button>
                            </div>
                        </form>
                    </div>
                </div>
            </Container>
        </>
    )
}