'use server';
import {ApiResponseProdutoId, Produto, ProdutoId} from "@/types/produtos";
import apiError from "@/functions/api-erro";
import {cookies} from "next/headers";
import {GET_PRODUTO_ID} from "@/functions/api";
import axios from "axios";


export default async function getProdutoId(id:ProdutoId):Promise<ApiResponseProdutoId>{

    try {
        const token = cookies().get('token')?.value;
        const {url} = GET_PRODUTO_ID(id);
        const response = await axios.get<Produto>(url,{
            headers: {
                Authorization: `Bearer ${token}`,
            },
        });

        const produto:Produto = response.data;
        return {data: produto, ok: true, error: ""}
    }catch (error: unknown) {
        return apiError(error)
    }

}
