'use server';

import {ApiResponseFornecedorId, Fornecedor, FornecedorId} from "@/types/fornecedores";
import apiError from "@/functions/api-erro";
import {cookies} from "next/headers";
import {GET_FORNECEDOR_ID} from "@/functions/api";
import axios from "axios";

export default async function getFornecedorId(id: FornecedorId):Promise<ApiResponseFornecedorId> {
    try {
        const token = cookies().get('token')?.value;
        const {url} = GET_FORNECEDOR_ID(id);
        const response = await axios.get<Fornecedor>(url, {
            headers: {
                Authorization: `Bearer ${token}`,
            },
        });
        const fornecedor: Fornecedor = response.data;
        return {data: fornecedor, ok: true, error: ""}
    }catch (error: unknown) {
        return apiError(error)
    }
}