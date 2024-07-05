'use server';

import {cookies} from "next/headers";
import axios from "axios";
import apiError from "@/functions/api-erro";
import {POST_RECEITAS} from "@/functions/api";

export default async function postReceita({}, formData: FormData) {
    const valorFormatado = Number(formData.get('valor')?.toString()
        .replace(',', '.'));

    const receitaRequest = {
      valor: valorFormatado,
       cliente_id: formData.get('cliente_id'),
        data_vencimento: formData.get('data_vencimento'),
        forma_pagamento: formData.get('forma_pagamento'),
        status: formData.get('status'),
        observacao: formData.get('observacao'),
    }

    console.log(receitaRequest)

    try {
        if(!receitaRequest.valor || !receitaRequest.cliente_id|| !receitaRequest.data_vencimento || !receitaRequest.status){
            return {data: null, ok: false, error: '\*Preencha todos os campos do formulário.'}
        }

        if(receitaRequest.status==="Selecione o Status"){
            return {data: null, ok: false, error: '\*Selecione um Status valido.'}
        }

        if(receitaRequest.forma_pagamento==="Selecione a forma de pagamento"){
            return {data: null, ok: false, error: '\*Selecione uma forma de pagamento valida.'}
        }
        const {url} = POST_RECEITAS();
        const token= cookies().get('token')?.value;

        const response =await axios.post(url,receitaRequest,{
            headers: {
                Authorization: `Bearer ${token}`
            }
        })
        return {data:response.data, ok: true, error: ''}
    }catch (error: unknown) {
        return apiError(error)
    }
}