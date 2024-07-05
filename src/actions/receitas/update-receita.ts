'use server';

import apiError from "@/functions/api-erro";
import {cookies} from "next/headers";
import axios from "axios";
import {PUT_DESPESA_ID, PUT_RECEITA_ID} from "@/functions/api";
import {ReceitaId} from "@/types/receitas";

export default async function updateReceita({}, formData: FormData) {
    const id = formData.get('id') as unknown as ReceitaId;
    console.log("id receita update",id)

    const valorFormatado = Number(formData.get('valor')?.toString()
        .replace(',', '.'));

    const updateReceitaRequest = {
        valor: valorFormatado,
        data_vencimento: formData.get('data_vencimento'),
        forma_pagamento: formData.get('forma_pagamento'),
        status: formData.get('status'),
        observacao: formData.get('observacao')
    };

    try {
        if(!updateReceitaRequest.valor || !updateReceitaRequest.data_vencimento ||
            !updateReceitaRequest.status){
            return {data: null, ok: false, error: '\*Preencha todos os campos do formulário.'}
        }

        if(updateReceitaRequest.status==="Selecione o Status"){
            return {data: null, ok: false, error: '\*Selecione um Status valido.'}
        }

        if(updateReceitaRequest.forma_pagamento==="Selecione a forma de pagamento"){
            return {data: null, ok: false, error: '\*Selecione uma forma de pagamento valida.'}
        }

        const {url} = PUT_RECEITA_ID(id);
        console.log("url update",url)
        const token = cookies().get('token')?.value;
        const response = await axios.put(url, updateReceitaRequest,{
            headers: {
                Authorization: `Bearer ${token}`
            }
        });
        return {data: response.data, ok: true, error: ''}

    }catch (error: unknown) {
        return apiError(error)
    }

}
