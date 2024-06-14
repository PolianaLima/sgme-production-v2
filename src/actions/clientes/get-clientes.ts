import {ApiResponseClientes} from "@/types/clientes";
import apiError from "@/functions/api-erro";
import {cookies} from "next/headers";
import {GET_CLIENTES} from "@/functions/api";
import axios from "axios";

export default async function getClientes(): Promise<ApiResponseClientes> {
    try {
        const token = cookies().get('token')?.value;
        const {url} = GET_CLIENTES();

        const response = await axios.get(url,{
            headers: {
                Authorization: `Bearer ${token}`,
            },
        });
        const clientes = response.data;
        return {data: clientes, ok: true, error: ""};
    } catch (error: unknown) {
        return apiError(error)
    }

}