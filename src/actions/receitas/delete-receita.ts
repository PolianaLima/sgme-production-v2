'use server'
import apiError from "@/functions/api-erro";
import {cookies} from "next/headers";
import {DELETE_RECEITA_ID} from "@/functions/api";
import axios from "axios";
import {ReceitaId} from "@/types/receitas";

export default async function deleteReceita(id: ReceitaId) {
   try {
       const token = cookies().get('token')?.value
       const {url} = DELETE_RECEITA_ID(id)

       const response = axios.delete(url,{
           headers:{
               Authorization: `Bearer ${token}`
           }
       })
   }catch (error:unknown){
       apiError(error)
   }
}