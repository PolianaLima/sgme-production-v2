import Image from "next/image";
import React from "react";
import {Metadata} from "next";
import LoginForm from "@/components/usuario/login";
import Link from "next/link";

export const metadata :Metadata={
    title:"Login",
    description:"Pagina de Login Sgme",
}

export default function Home() {
    return (
        <main className="container-fluid d-flex align-items-center"
              style={{
                  height: '100vh',
              }}>
            <div className="container-sm d-sm-flex justify-content-center align-items-center pt-2">
                <div className="w-100 d-flex justify-content-center me-3">
                    <Image src="/img/login.svg"
                           alt="Imagem de login"
                           width={500}
                           height={500}
                           sizes="100vw"
                           priority={true}
                    />
                </div>
                <div className="w-100 border p-5 rounded-2 d-flex flex-column align-items-center">
                    <div className='d-flex flex-row justify-content-center'>
                        <Image src="/img/logotipo.svg"
                               alt="Imagem de login"
                               width={100}
                               height={50}
                               sizes="100vw"
                               priority={true}
                               className="m-0"
                        />
                        <h1 >Bem vindo(a)</h1>
                    </div>
                    <div>
                      <Link className="btn btn-primary" href="login">
                          <i className="bi bi-airplane-engines text-white"> </i>
                          ACESSAR SISTEMA</Link>
                    </div>
                </div>


            </div>

        </main>
    );
}
