import Image from "next/image";
import React from "react";
import {Metadata} from "next";
import LoginForm from "@/components/usuario/login";

export const metadata: Metadata = {
    title: "Login",
    description: "Pagina de Login Sgme",
}

export default function LoginPage() {
    return (
        <main className="container-fluid d-flex align-items-center"
              style={{
                  height: '100vh',
              }}>
            <div className="container-sm d-sm-flex justify-content-center align-items-center pt-2">
                <div className="w-100 d-flex flex-column justify-content-center me-3">
                    <Image src="/img/icone_home.svg"
                           alt="Imagem de login"
                           width={500}
                           height={500}
                           sizes="100vw"
                           priority={true}
                    />

                </div>
                <div className="w-100 border p-5 rounded-2 d-flex flex-column align-items-center">
                    <h1 className="w-100 text-center">Bem vindo(a)  ao</h1>
                        <h1 className="text-center fw-bold title ">SGME</h1>
                    <p>Faça o login para entrar no sistema!!</p>
                    <LoginForm/>
                </div>


            </div>

        </main>
    );
}
