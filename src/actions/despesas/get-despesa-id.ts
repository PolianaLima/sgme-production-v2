'use server';

import {ApiResponseDespesaId, Despesa, DespesaId} from "@/types/despesas";
import apiError from "@/functions/api-erro";
import {cookies} from "next/headers";
import {GET_DESPESA_ID} from "@/functions/api";
import axios from "axios";

export default async function getDespesaId(id: DespesaId): Promise<ApiResponseDespesaId> {
    try {
        const token = cookies().get('token')?.value;
        const {url} = GET_DESPESA_ID(id);
        const response = await axios.get<Despesa>(url, {
            headers: {
                Authorization: `Bearer ${token}`,
            },
        });
        const despesa: Despesa = response.data;
        return {data: despesa, ok: true, error: ""}
    } catch (error: unknown) {
        return apiError(error)
    }
}