import {GET_RECEITAS} from "@/functions/api";
import apiError from "@/functions/api-erro";
import axios from "axios";
import {cookies} from "next/headers";
import {ApiResponseReceitas, Receita} from "@/types/receitas";

export default async function getReceitas():Promise<ApiResponseReceitas>{
    try{
        const token = cookies().get('token')?.value;
        const {url} = GET_RECEITAS();
        const response = await axios.get<Receita[]>(url,{
            headers: {
                Authorization: `Bearer ${token}`,
            },
        });
        const despesas:Receita[] = response.data;
        return {data: despesas, ok: true, error: ""};
    }catch(error: unknown){
        return apiError(error)
    }
}