
class BuscaLanchonete {
    async buscarPorId(id) {
        try {
            const res = await fetch(`https://agendaai-api.onrender.com/lanchonetes/buscar/${id}`)
            const info = await res.json()
            console.log(info)
            return info
        } catch (error) {
            console.error(error)
        }
    }
}

export default new BuscaLanchonete()