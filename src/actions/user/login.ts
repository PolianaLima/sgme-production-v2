'use server'

import axios from "axios";
import {cookies} from "next/headers";
import {API_URL, USER_LOGIN} from "@/functions/api";
import apiError from "@/functions/api-erro";


export default async function login({}, formData: FormData) {

    const loginRequest = {
        login: formData.get('login'),
        senha: formData.get('senha')
    }
    try {

        if (!loginRequest.login || !loginRequest.senha) {
            return {data: null, ok: false, error: 'Preencha todos os campos'}
        }
       const {url} = USER_LOGIN();

        const response = await axios.post(url, loginRequest);
        cookies().set('token', response.data.token, {
            httpOnly: true,
            secure: true,
            sameSite: 'lax',
            maxAge: 60 * 60 * 24
        })

        return {data: response.data, ok: true, error: ''}
    } catch (error: unknown) {
        return apiError(error)
    }
}

