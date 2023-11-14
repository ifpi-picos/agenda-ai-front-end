

class ListarLanches {
    async listarLanches(idLanchonete) {
        try {
            const res = await fetch(`http://localhost:3001/lanche/${idLanchonete}/listarLanches`, {
                cache: 'no-store'
            })
            const lanches = await res.json()
            return lanches
        } catch (error) {
            console.error(error)
        }
    }
}

export default new ListarLanches()