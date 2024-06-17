import { GET_DESPESAS } from "@/functions/api";
import apiError from "@/functions/api-erro";
import { ApiResponseDespesas, Despesa } from "@/types/despesas";
import axios from "axios";
import { cookies } from "next/headers";

export default async function getDespesas():Promise<ApiResponseDespesas>{
    try{
        const token = cookies().get('token')?.value;
        const {url} = GET_DESPESAS();
        const response = await axios.get<Despesa[]>(url,{
            headers: {
                Authorization: `Bearer ${token}`,
            },
        });
        const despesas = response.data;
        return {data: despesas, ok: true, error: ""};
    }catch(error: unknown){
        return apiError(error)
    }
}