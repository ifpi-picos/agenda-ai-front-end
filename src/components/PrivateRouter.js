"use client"

import { isTokenValid } from "@/services/token/verificarToken";
import Modal from "./layout/SucessErrorModal";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { jwtDecode } from "jwt-decode";

const PrivateRoute = ({ children, tipoUsuario, idUsuario }) => {
    const [token, setToken] = useState("");
    const [erro, setErro] = useState(null);
    const [modalOpen, setModalOpen] = useState(false); // Estado para controlar se a modal está aberta
    const router = useRouter();

    useEffect(() => {
        const storedToken = localStorage.getItem("token");
        if (!storedToken) {
            setErro("Faça login para acessar essa página")
            setModalOpen(true);
        } else {
            const statusToken = isTokenValid(storedToken);
            if (!statusToken.isValid) {
                if (statusToken.status === "expirado") {
                    setErro("Acesso expirado. Por favor, faça login novamente.");
                } else {
                    setErro("Faça login para acessar essa página")
                }
                setModalOpen(true);
            } else {
                const decodedToken = jwtDecode(storedToken)
                if (decodedToken.tipo !== tipoUsuario) {
                    setErro("Acesso negado!") //se alterar a mensagem de erro aqui altere em closeModal() também
                    setModalOpen(true)
                } else if (decodedToken.tipo === "gerente" && decodedToken.id !== idUsuario) {
                    setErro("Acesso negado!") //se alterar a mensagem de erro aqui altere em closeModal() também
                    setModalOpen(true)
                }
                 else {
                    setErro(`Ocorreu um erro`)
                }
            }
        }
    }, [router, tipoUsuario, idUsuario]);

    const closeModal = () => {
        if (erro === "Acesso negado!") {
            router.push('/')
        } else {
            router.push("/auth/signin");
        }
    };

    return (
        <>
            {!modalOpen && children}
            <Modal isOpen={modalOpen} message={erro} onClose={closeModal} />
        </>
    );
};

export default PrivateRoute;
