'use client'

import CardLanchonete from "@/components/CardLanchonete";
import PainelLanchonete from "@/components/Lanchonetes/PainelLanchonete";
import Navbar from "@/components/Navbar";
import Container from "@/components/layout/Container";

export default function GerenteLanchonetePage({ params }) {
    console.log(params)

    return (
        <>
            <Navbar />
            <Container>
                <PainelLanchonete />
            </Container>
        </>
    );
};
