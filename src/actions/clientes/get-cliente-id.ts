'use server';


import {ApiResponseClienteId, Cliente, ClienteId} from "@/types/clientes";
import apiError from "@/functions/api-erro";
import axios from "axios";
import {cookies} from "next/headers";
import {GET_CLIENTE_ID} from "@/functions/api";

export default async function getClienteId(id: ClienteId): Promise<ApiResponseClienteId> {
    try {
        const token = cookies().get('token')?.value;
        const {url} = GET_CLIENTE_ID(id);
        const response = await axios.get<Cliente>(url, {
            headers: {
                Authorization: `Bearer ${token}`,
            },
        });

        const cliente: Cliente = response.data;
        return {data: cliente, ok: true, error: ""}
    } catch (error: unknown) {
        return apiError(error)
    }
}
