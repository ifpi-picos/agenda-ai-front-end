import { apiUrl } from "@/config/config"

class BuscaLanchonete {
    async buscarPorId(id) {
        try {
            const res = await fetch(`${apiUrl}/lanchonetes/buscar/${id}`)
            const info = await res.json()
            console.log(info)
            return info
        } catch (error) {
            console.error(error)
        }
    }
    async buscaIdLanchonetePorUsuario(idUsuario) {
        try {
          const res = await fetch(`${apiUrl}/lanchonetes/buscarIdLanchonete/${idUsuario}`);
          const idLanchonete = await res.json();
          console.log(idLanchonete)
    
          if (!idLanchonete) {
            throw new Error('Lanchonete não encontrada');
          }
    
          return idLanchonete;
        } catch (error) {
          console.error('Erro ao buscar lanchonete por usuário:', error);
          throw error; // Rejeita o erro para que seja tratado pelo código chamador
        }
      }
}

const buscaLanchoneteInstance = new BuscaLanchonete()

export default buscaLanchoneteInstance