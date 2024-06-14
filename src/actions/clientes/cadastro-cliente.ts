'use server';

import apiError from "@/functions/api-erro";
import {POST_CLIENTES} from "@/functions/api";
import {cookies} from "next/headers";
import axios from "axios";

export default async function cadastroCliente({}, formData: FormData) {
    const clienteRequest = {
        nome: formData.get('nome'),
        documento: formData.get('documento'),
        data_nascimento: formData.get('data_nascimento'),
        telefone: formData.get('telefone'),
    }
    try{
        if(!clienteRequest.nome  || !clienteRequest.data_nascimento){
            return {data: null, ok: false, error: 'Preencha todos os campos obrigatorios'}
        }
        const {url} = POST_CLIENTES();
        const token = cookies().get('token')?.value;
        const response = await axios.post(url,clienteRequest,{
            headers: {
                Authorization: `Bearer ${token}`
            }
        })
        return {data: response.data, ok: true, error: ''}
    }catch (error: unknown){
        return apiError(error)
    }
}