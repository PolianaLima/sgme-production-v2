'use server';

import axios from "axios";
import {USER_CADASTRO} from "@/functions/api";
import apiError from "@/functions/api-erro";

export default  async function cadastro({}, formData: FormData) {
    const cadastroUsuarioRequest = {
        login: formData.get('login'),
        senha: formData.get('senha'),
        nome: formData.get('nome')
    }

    try {

        if (!cadastroUsuarioRequest.login ||!cadastroUsuarioRequest.nome || !cadastroUsuarioRequest.senha) {
            return {data: null, ok: false, error: 'Preencha todos os campos'}
        }
        const {url} = USER_CADASTRO();
        const response = await axios.post(url, cadastroUsuarioRequest);
        return {data: response.data, ok: true, error: ''}
    } catch (error: unknown) {
        return apiError(error)
    }
}
