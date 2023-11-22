"use client"

import { isTokenValid } from "@/services/token/verificarToken";
import Modal from "./layout/SucessErrorModal";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { jwtDecode } from "jwt-decode";

const PrivateRoute = ({ children, tipoUsuario }) => {
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
                    setErro("Você não tem permissão para acessar essa página")
                    setModalOpen(true)
                } else {
                    setErro(`Ocorreu um erro`)
                }
            }
        }
    }, [router, tipoUsuario]);

    const closeModal = () => {
        setModalOpen(false);
        if (erro === "Você não tem permissão para acessar essa página") {
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
