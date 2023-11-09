

class ListarLanches {
    async listarLanches(idLanchonete) {
        try {
            const res = await fetch(`http://localhost:3001/lanche/${idLanchonete}/listarLanches`, {
                headers: {
                    'Cache-Control': 'no-cache',
                    'Pragma': 'no-cache',
                },
            })
            const lanches = await res.json()
            console.log(lanches)
            return lanches
        } catch (error) {
            console.error(error)
        }
    }
}

export default new ListarLanches()