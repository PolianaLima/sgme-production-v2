'use server'

import axios from "axios";
import {cookies} from "next/headers";
import {USER_GET} from "@/functions/api";
import apiError from "@/functions/api-erro";

export type User = {
    id: string;
    nome: string;
    login: string;
};

export default async function userGet() {

    try {
        const token = cookies().get('token')?.value;
        if(!token) throw new Error('Token não encontrado');

        const {url} = USER_GET();
        const response = await axios.get(url, {
            headers: {
                Authorization: `Bearer ${token}`,
            },
        });
        const data = await response.data as User;

        return {data, ok: true, error: ''}
    } catch (error: unknown) {
        return apiError(error)
    }
}

