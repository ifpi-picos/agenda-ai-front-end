
class BuscaLanchonete {
    async buscarPorId(id) {
        try {
            const res = await fetch(`http://localhost:3001/lanchonetes/buscar/${id}`)
            const info = await res.json()
            console.log(info)
            return info
        } catch (error) {
            console.error(error)
        }
    }
}

export default new BuscaLanchonete()