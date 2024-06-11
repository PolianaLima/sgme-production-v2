import React from "react";
import Link from "next/link";
import Image from "next/image";

export default function NotFound(){
    return (
        <div className="container d-sm-flex flex-row justify-content-center align-items-center" style={{height:'100vh'}}>
            <div>
                <Image src="/img/not_found.svg" alt="Pagina não encontrada" height={400} width={400} sizes="100vw" priority={true} />
            </div>
            <div className="d-flex flex-column justify-content-center align-items-center">
                <h1>404</h1>
                <p>Pagina não encontrada!!</p>
                {/* eslint-disable-next-line react/jsx-no-undef */}
                <Link href="/sgme" className="button text-decoration-none">Voltar para a página inicial</Link>
            </div>
        </div>
    );
}