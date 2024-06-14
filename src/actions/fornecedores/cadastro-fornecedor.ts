'use server';

import apiError from "@/functions/api-erro";
import {POST_FORNECEDORES} from "@/functions/api";
import axios from "axios";
import {cookies} from "next/headers";

export default async function cadastroFornecedor({}, formData: FormData){
    const fornecedorRequest = {
        nome: formData.get('nome'),
        documento: formData.get('documento'),
    }

    try {
        if(!fornecedorRequest.nome){
            return {data: null, ok: false, error: 'Preencha todos os campos obrigatorios'}
        }
            const token = cookies().get('token')?.value;
            const {url} = POST_FORNECEDORES();

            const response = await axios.post(url, fornecedorRequest, {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            })
            return {data: response.data, ok: true, error: ''}
    }catch (error: unknown){
        return apiError(error)
    }

}