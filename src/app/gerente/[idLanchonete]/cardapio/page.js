"use client"
import Loading from "@/components/Loading";
import Navbar from "@/components/Navbar";
import PrivateRoute from "@/components/PrivateRouter";
import BuscaLanchonete from "@/services/BuscaLanchonete";
import { useEffect, useState } from "react";

export default function Cardapio({ params }) {
  const [lanchonete, setLanchonete] = useState(null)

  useEffect(() => {
    BuscaLanchonete.buscarPorId(params.idLanchonete)
      .then((lanchoneteData) => {
        setLanchonete(lanchoneteData);
        console.log(lanchoneteData.nomeLanchonete);
      })
      .catch((error) => {
        console.error("Erro ao buscar lanchonete:", error);
      });
  }, [params.idLanchonete])

  if (!lanchonete) {
    return (
      <Loading />
    )
  }

  return (
    <PrivateRoute
      tipoUsuario='gerente'
      idUsuario={lanchonete.idUsuario}
    >
      <Navbar />
      <p>página em produção</p>
    </PrivateRoute>
  );
}