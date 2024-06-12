import apiError from "@/functions/api-erro";
import {cookies} from "next/headers";
import {GET_PRODUTOS} from "@/functions/api";
import axios from "axios";
import {ApiResponse, Produto} from "@/types/produtos";

export default async function getProdutos(): Promise<ApiResponse> {
    try{
        const token = cookies().get('token')?.value;
        const {url} = GET_PRODUTOS();

        const response = await axios.get<Produto[]>(url,{
            headers: {
                Authorization: `Bearer ${token}`,
            },
        });

        const produtos = response.data;
        return { data: produtos, ok: true, error: "" };
    }catch (error: unknown) {
        return apiError(error)
    }
}