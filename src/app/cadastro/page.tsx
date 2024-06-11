import {Metadata} from "next";
import Image from "next/image";
import LoginForm from "@/components/usuario/login";
import React from "react";
import CadastroForm from "@/components/usuario/cadastro";

export const metadata :Metadata={
    title:"Cadastro de usuarios",
    description:"Pagina de cadastro de usuarios",
}

export default  function CadastroPage(){


    return (
        <main className="container-fluid d-flex align-items-center"
              style={{
                  height: '100vh',
              }}>
            <div className="container-sm d-sm-flex justify-content-center align-items-center pt-2">
                <div className="w-100 d-flex justify-content-center me-3">
                    <Image src="/img/icone_cadastro.svg"
                           alt="Imagem de login"
                           width={500}
                           height={500}
                           sizes="100vw"
                           priority={true}
                    />
                </div>
                <div className="w-100 border p-5 rounded-2 d-flex flex-column align-items-center">
                        <h1 className="w-100">Crie sua conta Grátis</h1>
                    <CadastroForm />
                </div>


            </div>

        </main>
    );
}