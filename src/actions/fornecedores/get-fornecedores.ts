'use server';

import {ApiResponseFornecedores} from "@/types/fornecedores";
import apiError from "@/functions/api-erro";
import {cookies} from "next/headers";
import {GET_FORNECEDORES} from "@/functions/api";
import axios from "axios";

export default async function getFornecedores(): Promise<ApiResponseFornecedores> {
    try {
        const token = cookies().get('token')?.value;
        const {url} = GET_FORNECEDORES();
        const response = await axios.get(url,{
            headers: {
                Authorization: `Bearer ${token}`,
            },
        });
        const fornecedores = response.data;
        return {data: fornecedores, ok: true, error: ""};
    }catch (error: unknown) {
        return apiError(error)
    }
}