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
                <div className={styles.boxEdit}>
                    <div className={styles.cantinaInfo}>
                        <form className={styles.formInfo}>
                            <h1>Edição de informações</h1>
                            <label htmlFor="imagem">Imagem da cantina:</label>
                            <Image src={imagemLanchonete} alt="Imagem da lanchonete" width={360} height={210} />
                            <input type="file" id="imagem" name="imagem" />
                            <label>Nome Cantina:</label>
                            <input type="text" id="nomeCantina" name="nomeCantina" placeholder="Digite o novo nome da Cantina" />
                            <label>Nome Gerente:</label>
                            <input type="text" id="NomeGerente" name="NomeGerente" placeholder="Digite o novo nome de gerente" />
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