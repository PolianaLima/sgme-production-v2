'use server';

import apiError from "@/functions/api-erro";
import {POST_PRODUTOS} from "@/functions/api";
import {cookies} from "next/headers";
import axios from "axios";

export default async function cadastroProduto({}, formData: FormData) {
    const precoFormatado = Number(formData.get('preco')?.toString()
        .replace(',', '.'));

    const custoFormatado = Number(formData.get('custo')?.toString()
        .replace(',', '.'));

    const cadastroRequest = {
        codigo: formData.get('codigo'),
        nome: formData.get('nome'),
        custo: custoFormatado,
        preco:precoFormatado,
    }


    try {
        if(!cadastroRequest.nome || !cadastroRequest.custo || !cadastroRequest.preco){
            return {data: null, ok: false, error: 'Preencha todos os campos'}
        }

        const {url} = POST_PRODUTOS();
        const token = cookies().get('token')?.value;

        const response =await axios.post(url,cadastroRequest,{
            headers: {
                Authorization: `Bearer ${token}`
            }
        })
        return {data:response.data, ok: true, error: ''}
    }catch (error: unknown) {
        return apiError(error)
    }
}