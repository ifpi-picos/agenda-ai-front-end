"use client"
import { useEffect, useState } from 'react';
import jwt from 'jsonwebtoken';
import { useRouter } from 'next/navigation';
import { jwtDecode } from 'jwt-decode';
import { isTokenValid } from '@/services/token/verificarToken';
import Loading from '@/components/Loading';

export default function MinhaPaginaInicial() {
    const [tipo, setTipo] = useState('');
    const [erro, setErro] = useState(null);
    const [token, setToken] = useState('');
    const router = useRouter();

    useEffect(() => {
        const storedToken = localStorage.getItem('token');

        if (storedToken) {
            const tokenStatus = isTokenValid(storedToken)
            if (tokenStatus.isValid) {
                setToken(storedToken);

                try {
                    const decoded = jwtDecode(storedToken)
                    console.log(decoded);
                    setTipo(decoded.tipo)
                    if (decoded.tipo === 'cliente') {
                        router.push('/home');
                    } else if (decoded.tipo === 'gerente') {
                        router.push('/gerente');
                    }
                } catch (error) {
                    console.error(error);

                    if (error.name === 'TokenExpiredError') {
                        setErro(error.name);
                    } else if (error.name === 'JsonWebTokenError') {
                        setErro(error.name);
                    } else {
                        setErro(error.name);
                    }
                }
            } else if(tokenStatus.status === "expirado") {
                setErro("token expirado")
                router.push('/auth/signin')
            } else if(tokenStatus.status === "invalido") {
                setErro("acesso invalido")
                router.push('/auth/signin')
            }
        } else {
            router.push('/inicio')
        }
    }, [router]);

    return (
        <div>
            <Loading />
        </div>
    );
};
