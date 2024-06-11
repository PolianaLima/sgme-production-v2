'use server'

import {cookies} from "next/headers";
import axios from "axios";
import {TOKEN_VALIDATE} from "@/functions/api";
import logout from "@/actions/user/logout";

export default async function validateToken() {
    try {
        const token = cookies().get('token')?.value;
        if(!token) throw new Error('Token não encontrado');
        const {url} = TOKEN_VALIDATE();
        const response =  await axios.get(url, {
            headers: {
                Authorization: `Bearer ${token}`,
            },
        });
        return response.data
    }catch (error: unknown) {
       await logout()
    }
}