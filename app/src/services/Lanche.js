class Lanche {
    async buscaPorId(idLanche) {
        try {
            const res = await fetch(`https://agendaai-api.onrender.com/lanche/buscar/${idLanche}`, {
                cache: 'no-store'
            })
            const info = await res.json()
            //console.log(info)
            return info
        } catch (error) {
            console.error(error)
        }
    }
    async deletarPorId(idLanche) {
        try {
            const res = await fetch(`https://agendaai-api.onrender.com/lanche/deletar/${idLanche}`, {
                method: 'DELETE',
                headers: {
                    'Content-Type': 'application/json',
                },
            })
            if (res.status === 204) {
                console.log('Lanche excluído com sucesso.');
            } else if (res.status === 404) {
                console.log('Lanche não encontrado.');
            } else {
                console.error('Erro ao excluir lanche:', res.statusText);
            }
        } catch (error) {
            console.error('Erro ao excluir lanche:', error);
        }
    }
}

export default new Lanche()