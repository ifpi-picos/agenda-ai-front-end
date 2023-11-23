"use client"
import BuscaLanchonete from "@/services/BuscaLanchonete";
import { useRouter } from "next/navigation";

export default function RedirectGerente(idUsuario) {
    const router = useRouter();

    return new Promise(async (resolve, reject) => {
        try {
            const info = await BuscaLanchonete.buscaIdLanchonetePorUsuario(idUsuario);

            if (info && info.error) {
                throw new Error(info.error);
            }

            router.push(`/gerente/${info}`);
            resolve();
        } catch (error) {
            console.error("Erro ao buscar ID da Lanchonete:", error);
            reject(error);
        }
    });
}