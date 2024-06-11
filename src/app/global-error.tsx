'use client';
import Image from "next/image";
import React from "react";

export default function GlobalError() {
    return (
        <html>
        <body>
        <div className="container d-sm-flex justify-content-center align-items-center"
             style={{height: '100vh'}}>
                <Image src="/img/erro_global.svg" alt="Pagina não encontrada" height={400} width={400} sizes="100vw"
                       priority={true}/>
        </div>
        </body>
        </html>
    );
}