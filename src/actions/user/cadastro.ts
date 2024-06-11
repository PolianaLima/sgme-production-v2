'use server'

import axios from "axios";
import {API_URL} from "@/functions/api";
import apiError from "@/functions/api-erro";

export default  async function cadastro({}, formData: FormData) {
    const cadastroRequest = {
        login: formData.get('login'),
        senha: formData.get('senha'),
        nome: formData.get('nome')
    }

    try {

        if (!cadastroRequest.login ||!cadastroRequest.nome || !cadastroRequest.senha) {
            return {data: null, ok: false, error: 'Preencha todos os campos'}
        }
        const url = API_URL + '/auth/register';
        const response = await axios.post(url, cadastroRequest);

        return {data: response.data, ok: true, error: ''}
    } catch (error: unknown) {
        return apiError(error)
    }
}
