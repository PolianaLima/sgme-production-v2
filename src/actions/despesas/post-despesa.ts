'use server';

import {cookies} from "next/headers";
import axios from "axios";
import apiError from "@/functions/api-erro";
import {POST_DESPESAS} from "@/functions/api";

export default async function postDespesa({}, formData: FormData) {
    const valorFormatado = Number(formData.get('valor')?.toString()
        .replace(',', '.'));

    const despesaRequest = {
      valor: valorFormatado,
        fornecedor_id: formData.get('fornecedor_id'),
        data_vencimento: formData.get('data_vencimento'),
        forma_pagamento: formData.get('forma_pagamento'),
        status: formData.get('status'),
        observacao: formData.get('observacao'),
    }

    console.log(despesaRequest)

    try {
        if(!despesaRequest.valor || !despesaRequest.fornecedor_id|| !despesaRequest.data_vencimento || !despesaRequest.status){
            return {data: null, ok: false, error: '\*Preencha todos os campos do formulário.'}
        }

        if(despesaRequest.status==="Selecione o Status"){
            return {data: null, ok: false, error: '\*Selecione um Status valido.'}
        }

        if(despesaRequest.forma_pagamento==="Selecione a forma de pagamento"){
            return {data: null, ok: false, error: '\*Selecione uma forma de pagamento valida.'}
        }
        const {url} = POST_DESPESAS();
        const token= cookies().get('token')?.value;

        const response =await axios.post(url,despesaRequest,{
            headers: {
                Authorization: `Bearer ${token}`
            }
        })
        return {data:response.data, ok: true, error: ''}
    }catch (error: unknown) {
        return apiError(error)
    }
}