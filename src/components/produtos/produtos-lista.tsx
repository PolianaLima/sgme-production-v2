'use client'
import {Produto} from "@/types/produtos";
import Link from "next/link";
import React, {useEffect, useState} from "react";
import Image from "next/image";
import FiltroDados from "@/components/shared/filtro-dados";

type Props = {
    produtos?: Produto[] | null
}

export default function ProdutosLista({ produtos}: Props) {
    const [search, setSearch] = useState('');
    const [filteredProdutos, setFilteredProdutos] = useState(produtos);


    useEffect(() => {
        if (!produtos) {
            setFilteredProdutos([]);
            return;
        }

        const newFilteredProdutos = produtos?.filter(produto => {
            return produto.nome.includes(search) || produto.codigo.includes(search) ;
        });
        setFilteredProdutos(newFilteredProdutos);
    }, [search, produtos]);


    return (
        <div className="mt-3">
            <FiltroDados onSearchChange={setSearch}  mPlaceholder="Pesquise pela descrição ou pelo código"/>
            <table className="table table-borderless">
                <thead>
                <tr>
                    <th scope="col" style={{minWidth: 100}}>Codigo</th>
                    <th scope="col" className="w-100">Nome</th>
                    <th scope="col" className="w-100">Custo</th>
                    <th scope="col" className="w-100">Preço</th>
                    <th scope="col" className="w-100">Status</th>
                    <th scope="col" style={{minWidth: 100}}>Editar</th>
                </tr>
                </thead>
                <tbody>
                {filteredProdutos && filteredProdutos.length > 0 ? (
                    filteredProdutos?.map((produto: Produto) => (
                        <tr key={produto.id}>
                            <td>{produto.codigo}</td>
                            <td>{produto.nome}</td>
                            <td>{produto.custo.toLocaleString('pt-br', {
                                style: 'currency',
                                currency: 'BRL'
                            })}</td>
                            <td>{produto.preco.toLocaleString('pt-br', {
                                style: 'currency',
                                currency: 'BRL'
                            })}</td>
                            <td>{produto.status.toLowerCase()}</td>
                            <td>
                                <Link href={`/sgme/cadastro/produto/${produto.id}`} className="btn btn-success"> <i
                                    className="bi bi-pencil-square text-white">

                                </i></Link>
                            </td>
                        </tr>
                    ))) : (
                    <tr>
                        <td colSpan={6} className="text-center">
                            <Image src="/img/dado_nao_encontrado.svg" alt="Not Found" width={350} height={350}
                                   priority={false}/>
                            <h3>Você nao tem produtos cadastrado no sistema</h3>
                            <Link href="/sgme/cadastro/produto/novo" className="btn btn-primary">Adicione seu primeiro produto aqui</Link>
                        </td>
                    </tr>

                )}

                </tbody>
            </table>
        </div>
    )
}