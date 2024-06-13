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

    const updateRequest = {
        codigo: formData.get('codigo'),
        nome: formData.get('nome'),
        custo: custoFormatado,
        preco:precoFormatado,
        status: formData.get('status')
    }

    console.log("updateRequest",updateRequest)

    try {
        if(!updateRequest.nome || !updateRequest.custo || !updateRequest.preco){
            return {data: null, ok: false, error: 'Preencha todos os campos'}
        }

        const {url} = PUT_PRODUTO_ID(id);
        const token = cookies().get('token')?.value;
        const response = await axios.put(url,updateRequest,{
            headers: {
                Authorization: `Bearer ${token}`
            }
        })

        return {data:response.data, ok: true, error: ''}

    }catch (error: unknown) {
        return apiError(error)
    }
}