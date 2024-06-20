import React from "react";
import Image from "next/image";
import Link from "next/link";
import {AiFillProduct} from "react-icons/ai";

export default function MenuLateral() {

    return (
        <div className="row flex-nowrap bg-paleta_Azul" style={{height: '100%', width:'15%'}}>
            <div
                className="d-flex flex-column align-items-center align-items-sm-start w-100 pt-2 min-vh-100 ps-4">
                <Link href="/sgme"
                    className="d-flex align-items-center pb-3 mb-md-0 me-md-auto text-white text-decoration-none">
                                <span className="fs-5 d-none d-sm-inline text-white">
                                    <Image src="/img/logotipo.svg" alt="Logotipo" width={200}
                                        height={100}
                                        priority={true}
                                    />
                                </span>
                </Link>
                <ul className="nav nav-pills flex-column mb-sm-auto mb-0 align-items-center align-items-sm-start w-100"
                    id="menu">

                    <li className="w-100">
                        <Link href="/sgme" className="nav-link px-0 align-middle">
                            <i className="fs-2 bi-speedometer2"></i>
                            <span
                                className="ms-1 d-none d-sm-inline ">Dashboard</span></Link>
                    </li>

                    <li className="w-100">
                        <Link href="#submenu2" data-bs-toggle="collapse"
                            className="nav-link px-0 align-middle ">
                            <i className="fs-2 bi bi-folder-plus"></i>
                            <span className="ms-1 d-none d-sm-inline ">Cadastro</span></Link>
                        <ul className="collapse nav flex-column ms-1" id="submenu2" data-bs-parent="#menu">
                            <li className="w-100">
                                <Link href="/sgme/cadastro/produto" className="nav-link px-0">
                                    <AiFillProduct className="fs-5"/>
                                    <span
                                        className="d-none d-sm-inline ">Produto</span> </Link>
                            </li>
                            <li className="w-100">
                                <Link href="/sgme/cadastro/cliente" className="nav-link px-0 ">
                                    <i className="bi bi-person-fill-add fs-5"></i>
                                    <span
                                        className="d-none d-sm-inline "> Clientes</span></Link>
                            </li>
                            <li className="w-100">
                                <Link href="/sgme/cadastro/fornecedor" className="nav-link px-0 ">
                                    <i className="bi bi-box-seam-fill fs-5"></i>
                                    <span
                                        className="d-none d-sm-inline "> Fornecedores</span> </Link>
                            </li>
                        </ul>
                    </li>
                    <li className="w-100">
                        <Link href="#" className="nav-link px-0 align-middle">
                            <i className="fs-2 bi bi-pc-display"></i> <span
                            className="ms-1 d-none d-sm-inline ">PDV</span></Link>
                    </li>

                    <li className="w-100">
                        <Link href="#submenu3" data-bs-toggle="collapse"
                            className="nav-link px-0 align-middle">
                            <i className="fs-2 bi bi-cash-coin"></i> <span
                            className="ms-1 d-none d-sm-inline">Financeiro</span> </Link>
                        <ul className="collapse nav flex-column ms-1" id="submenu3" data-bs-parent="#menu">
                            <li className="w-100">
                                <Link href="/sgme/financeiro/contas-a-pagar"
                                    className="nav-link px-0">
                                    <i className="fs-5 bi bi-arrow-down-square-fill"></i>
                                    <span
                                        className="d-none d-sm-inline"> Contas a pagar</span> </Link>
                            </li>
                            <li className="w-100">
                                <Link href="/sgme/financeiro/contas-a-receber"
                                    className="nav-link px-0">
                                    <i className="fs-5 bi bi-arrow-up-square-fill"></i><span
                                    className="d-none d-sm-inline "> Contas a receber</span> </Link>
                            </li>

                            <li className="w-100">
                                <Link href="#" className="nav-link px-0">
                                    <i className="fs-5 bi bi-currency-exchange"></i><span
                                    className="d-none d-sm-inline "> Fluxo Caixa</span> </Link>
                            </li>
                        </ul>
                    </li>
                    <li className="w-100">
                        <Link href="#" className="nav-link px-0 align-middle">
                            <i className="fs-4 bi bi-newspaper"></i> <span
                            className="ms-1 d-none d-sm-inline">Relatorios</span> </Link>
                    </li>
                </ul>
            </div>
        </div>
    );
}