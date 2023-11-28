import { apiUrl } from "@/config/config"


class ListarLanches {
    async listarLanches(idLanchonete) {
        try {
            const res = await fetch(`${apiUrl}/lanche/${idLanchonete}/listarLanches`, {
                cache: 'no-store'
            })
            const lanches = await res.json()
            return lanches
        } catch (error) {
            console.error(error)
        }
    }
}

const listaLancheInstance = new ListarLanches()

export default listaLancheInstance