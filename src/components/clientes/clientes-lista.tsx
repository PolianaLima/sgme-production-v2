'use client'

import {Cliente} from "@/types/clientes";
import React, {useEffect, useState} from "react";
import FiltroDados from "@/components/shared/filtro-dados";
import {format, parseISO} from "date-fns";
import {ptBR} from "date-fns/locale";
import Link from "next/link";
import Image from "next/image";

type Props = {
    clientes?: Cliente[] | null
}

export default function ClientesLista({clientes}: Props) {
    const [search, setSearch] = useState('');
    const [filteredProdutos, setFilteredProdutos] = useState(clientes);

    useEffect(() => {
        if (!clientes) {
            setFilteredProdutos([]);
            return;
        }

        const newFilteredProdutos = clientes?.filter(cliente => {
            return cliente.nome.includes(search) || cliente.documento.includes(search);
        });
        setFilteredProdutos(newFilteredProdutos);
    }, [search, clientes]);

    return (
        <div className="mt-3">
            <FiltroDados onSearchChange={setSearch} mPlaceholder="Pesquise pelo nome ou pelo documento"/>
            <table className="table table-borderless">
                <thead>
                <tr>
                    <th scope="col" style={{minWidth: 100}}>Codigo</th>
                    <th scope="col" className="w-100">Nome</th>
                    <th scope="col" className="w-100">CPF/Cnpj</th>
                    <th scope="col" className="w-100" style={{minWidth: 150}}>Telefone</th>
                    <th scope="col" className="w-100" style={{minWidth: 150}}>Data Nascimento</th>
                    <th scope="col" className="w-100">Status</th>
                    <th scope="col" style={{minWidth: 100}}>Editar</th>
                </tr>
                </thead>
                <tbody>
                {filteredProdutos && filteredProdutos.length > 0 ? (
                    filteredProdutos?.map((cliente: Cliente, index: number) => (
                        <tr key={cliente.id}>
                            <td>{index+1}</td>
                            <td>{cliente.nome}</td>
                            <td>{cliente.documento}</td>
                            <td>{cliente.telefone}</td>
                            <td>{format(parseISO(cliente.data_nascimento), 'dd/MM/yyyy', {locale:ptBR})}</td>
                            <td>{cliente.status.toLowerCase()}</td>
                            <td>
                                <Link href={`/sgme/cadastro/cliente/${cliente.id}`}  className="btn btn-success"> <i
                                    className="bi bi-pencil text-white"></i></Link>
                            </td>
                        </tr>
                    ))): (
                    <tr>
                        <td colSpan={6} className="text-center">
                            <Image src="/img/dado_nao_encontrado.svg" alt="Not Found" width={350} height={350}
                                   priority={false}/>
                            <h3>Você nao tem clientes cadastrado no sistema</h3>
                            <Link href="/sgme/cadastro/cliente/novo" className="btn btn-primary">Adicione seu primeiro
                                cliente aqui</Link>
                        </td>
                    </tr>
                )}
                </tbody>
            </table>

        </div>
    )
}