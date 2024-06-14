'use client';

import FiltroDados from "@/components/shared/filtro-dados";
import Link from "next/link";
import React, {useEffect, useState} from "react";
import {Fornecedor} from "@/types/fornecedores";
import Image from "next/image";

type Props = {
    fornecedores?: Fornecedor[] | null
}

export default function FornecedorLista({fornecedores}: Props) {

    const [search, setSearch] = useState('');
    const [filteredFornecedores, setFilteredFornecedores] = useState(fornecedores);

    useEffect(() => {
        if (!fornecedores) {
            setFilteredFornecedores([]);
            return;
        }

        const newFilteredFornecedores = fornecedores?.filter(fornecedor => {
            return fornecedor.nome.includes(search) || fornecedor.documento.includes(search);
        });
        setFilteredFornecedores(newFilteredFornecedores);
    }, [search, fornecedores]);

    return (
        <div className="mt-3">
            <FiltroDados onSearchChange={setSearch} mPlaceholder="Pesquise pelo nome ou pelo documento"/>
            <table className="table table-borderless">
                <thead>
                <tr>
                    <th scope="col" style={{minWidth: 100}}>Codigo</th>
                    <th scope="col" className="w-100">Nome</th>
                    <th scope="col" className="w-100">CPF/Cnpj</th>
                    <th scope="col" className="w-100">Status</th>
                    <th scope="col" style={{minWidth: 100}}>Editar</th>
                </tr>
                </thead>
                <tbody>
                {filteredFornecedores && filteredFornecedores.length > 0 ? (
                    filteredFornecedores?.map((fornecedor: Fornecedor, index: number) => (
                        <tr key={fornecedor.id}>
                            <td>{index + 1}</td>
                            <td>{fornecedor.nome}</td>
                            <td>{fornecedor.documento}</td>
                            <td>{fornecedor.status.toLowerCase()}</td>
                            <td>
                                <Link href={`/sgme/cadastro/fornecedor/${fornecedor.id}`} className="btn btn-success"> <i
                                    className="bi bi-pencil text-white"></i></Link>
                            </td>
                        </tr>
                    ))) : (
                    <tr>
                        <td colSpan={6} className="text-center">
                            <Image src="/img/dado_nao_encontrado.svg" alt="Not Found" width={350} height={350}
                                   priority={false}/>
                            <h3>Você nao tem fornecedores cadastrado no sistema</h3>
                            <Link href="/sgme/cadastro/fornecedor/novo" className="btn btn-primary">Adicione seu primeiro
                                fornecedor aqui</Link>
                        </td>
                    </tr>
                )}
                </tbody>
            </table>

        </div>
    )
}