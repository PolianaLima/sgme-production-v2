'use server'
import getUsuarioCokkies from "@/functions/get-usuario-cokkies";
import {API_URL, GET_VENDAS} from "@/functions/api";
import axios from "axios";
import apiError from "@/functions/api-erro";

export default async function getVendas() {
    const token = getUsuarioCokkies();
    const {url} = GET_VENDAS();
    try {
        const response = await axios.get(url,{
            headers:{
                Authorization: `Bearer ${token}`
            }
        })
        return {data: response.data, ok:true, error:''}
    }catch (error: unknown) {
        return apiError(error)
    }


}