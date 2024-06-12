import Image from "next/image";
import React from "react";
import {Metadata} from "next";
import LoginForm from "@/components/usuario/login";
import Link from "next/link";

export const metadata: Metadata = {
    title: "Login",
    description: "Pagina de Login Sgme",
}

export default function Home() {
    return (
        <div className="container-fluid d-flex align-items-center justify-content-center"
             style={{
                 height: '100vh',
             }}>

            <div className="d-sm-flex justify-content-center align-items-center w-100 p-5">
                <div className="container d-flex flex-column w-100">
                    <h3 style={{fontSize: '60px'}}>Transforme sua</h3>
                    <h1 style={{fontSize: '100px'}}> Paixão</h1>
                    <h3 style={{fontSize: '50px'}}>Em Negócio com </h3>
                    <h1 className="fw-bold" style={{fontSize: '80px'}}>Gestão Eficiente</h1>

                    <Link className="d-flex  align-items-center text-decoration-none" href='login'>
                        <p className="fs-3 btn btn-success">Faça login e descubra </p>
                        <i className="h3 bi bi-arrow-right"></i>
                    </Link>

                </div>

                <div className="w-100 d-flex justify-content-start">
                    <Image src="/img/icone_home_v2.svg"
                           alt="Imagem de login"
                           width={700}
                           height={700}
                           sizes="100vw"
                           priority={true}
                    />


                </div>



            </div>

        </div>
    );
}
