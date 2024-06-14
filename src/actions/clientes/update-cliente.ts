'use server';

import apiError from "@/functions/api-erro";
import {cookies} from "next/headers";
import axios from "axios";
import {ClienteId} from "@/types/clientes";
import {PUT_CLIENTE_ID} from "@/functions/api";

export default async function updateCliente({}, formData: FormData) {
    const id = formData.get('id') as unknown as ClienteId;
    const updateClienteRequest = {
        nome: formData.get('nome'),
        documento: formData.get('documento'),
        data_nascimento: formData.get('data_nascimento'),
        telefone: formData.get('telefone'),
        status: formData.get('status')
    };
    try {
        if (!updateClienteRequest.nome || !updateClienteRequest.data_nascimento) {
            return { data: null, ok: false, error: 'Preencha todos os campos obrigatorios' };
        }
        const {url} = PUT_CLIENTE_ID(id);
        const token = cookies().get('token')?.value;
        const response = await axios.put(url, updateClienteRequest, {
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
