'use server';

import {FornecedorId} from "@/types/fornecedores";
import {PUT_FORNECEDOR_ID} from "@/functions/api";
import {cookies} from "next/headers";
import axios from "axios";
import apiError from "@/functions/api-erro";

export default async function updateFornecedor({}, formData: FormData){
    const id = formData.get('id') as unknown as FornecedorId;
    const updateFornecedorRequest = {
        nome: formData.get('nome'),
        documento: formData.get('documento'),
        status: formData.get('status')
    };
    try {
        if (!updateFornecedorRequest.nome) {
            return { data: null, ok: false, error: 'Preencha todos os campos obrigatorios' };
        }
        const {url} = PUT_FORNECEDOR_ID(id);
        const token = cookies().get('token')?.value;
        const response = await axios.put(url, updateFornecedorRequest, {
            headers: {
                Authorization: `Bearer ${token}`
            }
        });
        return { data: response.data, ok: true, error: '' };
    }
    catch (error) {
        return apiError(error);
    }

}