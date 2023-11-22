"use client"
import BuscaLanchonete from "@/services/BuscaLanchonete";
import { useRouter } from "next/navigation";

export default async function RedirectGerente(idUsuario) {
    const router = useRouter()
    try {
        const info = await BuscaLanchonete.buscaIdLanchonetePorUsuario(idUsuario);

        // Verifica se há um erro na resposta
        if (info && info.error) {
            throw new Error(info.error);
        }

        return router.push(`/gerente/${info}`)
    } catch (error) {
        console.error("Erro ao buscar ID da Lanchonete:", error);
        return <div>Erro ao buscar ID da Lanchonete</div>;
    }
}