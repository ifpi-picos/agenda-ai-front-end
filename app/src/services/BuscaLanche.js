class BuscaLanche {
    async buscaPorId(idLanche) {
        try {
            const res = await fetch(`http://localhost:3001/lanche/buscar/${idLanche}`, {
                cache: 'no-store'
            })
            const info = await res.json()
            //console.log(info)
            return info
        } catch (error) {
            console.error(error)
        }
    }
}

export default new BuscaLanche()