'use client'
import CloudinaryUpload from "@/components/Cadastro/CloudinaryUpload";

// pages/adicionarLanche.js

import { useState } from 'react';
import axios from 'axios';
import Loading from "@/components/Loading";
import PainelLanchonete from "@/components/Lanchonetes/PainelLanchonete";
import BuscaLanchonete from "@/services/BuscaLanchonete";

export default async function AdicionarLanche() {
    const lanchonete = await BuscaLanchonete.buscarPorId(1)

    return (
        <>
            <PainelLanchonete 
            lanchonete={lanchonete}/>
        </>
    );
}
