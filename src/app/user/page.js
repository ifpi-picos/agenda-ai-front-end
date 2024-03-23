"use client"

import Navbar from "@/components/Navbar"
import PrivateRoute from "@/components/PrivateRouter"
import { jwtDecode } from "jwt-decode"
import { useEffect, useState } from "react"

export default function User() {
    const [userId, setUserId] = useState("")

    useEffect(() => {
        const storedToken = localStorage.getItem("token")
        if (!storedToken) {
            setErro("Faça login para acessar essa página")
            setModalOpen(true);
        } else {
            const decodedToken = jwtDecode(storedToken)
            if (decodedToken.tipo !== 'cliente') {

            } else {
                setUserId(decodedToken.id)
            }
        }
    }, []);

    return (
        <PrivateRoute tipoUsuario='cliente'>
            <Navbar opcoesCliente={true}/>
            <p>Página em desenvolvimento</p>
        </PrivateRoute>
    )
}