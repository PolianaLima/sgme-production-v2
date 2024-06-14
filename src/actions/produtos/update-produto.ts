'use server';
import {PUT_PRODUTO_ID} from "@/functions/api";
import {cookies} from "next/headers";
import {ProdutoId} from "@/types/produtos";
import apiError from "@/functions/api-erro";
import axios from "axios";

export default async function updateProduto({} ,formData: FormData){
    const precoFormatado = Number(formData.get('preco')?.toString()
        .replace(',', '.'));

    const custoFormatado = Number(formData.get('custo')?.toString()
        .replace(',', '.'));

    const id = formData.get('id') as unknown as ProdutoId;

    const updateProdutoRequest = {
        codigo: formData.get('codigo'),
        nome: formData.get('nome'),
        custo: custoFormatado,
        preco:precoFormatado,
        status: formData.get('status')
    }


    try {
        if(!updateProdutoRequest.nome || !updateProdutoRequest.custo || !updateProdutoRequest.preco){
            return {data: null, ok: false, error: 'Preencha todos os campos obrigatorios'}
        }

        const {url} = PUT_PRODUTO_ID(id);
        const token = cookies().get('token')?.value;
        const response = await axios.put(url,updateProdutoRequest,{
            headers: {
                Authorization: `Bearer ${token}`
            }
        })

        return {data:response.data, ok: true, error: ''}

    }catch (error: unknown) {
        return apiError(error)
    }
}