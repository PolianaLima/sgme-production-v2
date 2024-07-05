'use server';

import apiError from "@/functions/api-erro";
import {cookies} from "next/headers";
import {GET_RECEITA_ID} from "@/functions/api";
import axios from "axios";
import {ApiResponseReceitaId, Receita, ReceitaId} from "@/types/receitas";

export default async function getReceitaId(id: ReceitaId): Promise<ApiResponseReceitaId> {
    try {
        const token = cookies().get('token')?.value;
        const {url} = GET_RECEITA_ID(id);
        const response = await axios.get<Receita>(url, {
            headers: {
                Authorization: `Bearer ${token}`,
            },
        });
        const receita: Receita = response.data;
        return {data: receita, ok: true, error: ""}
    } catch (error: unknown) {
        return apiError(error)
    }
}