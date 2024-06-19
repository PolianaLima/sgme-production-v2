'use server';

import {DespesaId} from "@/types/despesas";
import apiError from "@/functions/api-erro";
import {cookies} from "next/headers";
import axios from "axios";
import {PUT_DESPESA_ID} from "@/functions/api";

export default async function updateDespesa({}, formData: FormData) {
    const id = formData.get('id') as unknown as DespesaId;

    const valorFormatado = Number(formData.get('valor')?.toString()
        .replace(',', '.'));

    const updateDespesaRequest = {
        valor: valorFormatado,
        data_vencimento: formData.get('data_vencimento'),
        forma_pagamento: formData.get('forma_pagamento'),
        status: formData.get('status'),
        observacao: formData.get('observacao')
    };

    try {
        if(!updateDespesaRequest.valor || !updateDespesaRequest.data_vencimento ||
            !updateDespesaRequest.status){
            return {data: null, ok: false, error: '\*Preencha todos os campos do formulário.'}
        }

        if(updateDespesaRequest.status==="Selecione o Status"){
            return {data: null, ok: false, error: '\*Selecione um Status valido.'}
        }

        if(updateDespesaRequest.forma_pagamento==="Selecione a forma de pagamento"){
            return {data: null, ok: false, error: '\*Selecione uma forma de pagamento valida.'}
        }

        const {url} = PUT_DESPESA_ID(id);
        const token = cookies().get('token')?.value;
        const response = await axios.put(url, updateDespesaRequest,{
            headers: {
                Authorization: `Bearer ${token}`
            }
        });
        return {data: response.data, ok: true, error: ''}

    }catch (error: unknown) {
        return apiError(error)
    }

}
