import Navbar from "@/components/Navbar";
import Container from "@/components/layout/Container";
import BuscaLanchonete from "@/services/BuscaLanchonete";

export default async function EditarLanchonete({params}) {
    const lanchonete = await BuscaLanchonete.buscarPorId(params.idLanchonete)

    return (
        <>
            <Navbar />
        </>
    )
}