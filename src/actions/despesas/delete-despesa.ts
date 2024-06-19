'use server'
import apiError from "@/functions/api-erro";
import {cookies} from "next/headers";
import {DELETE_DESPESA_ID} from "@/functions/api";
import {DespesaId} from "@/types/despesas";
import axios from "axios";

export default async function deleteDespesa(id: DespesaId) {
   try {
       const token = cookies().get('token')?.value
       const {url} = DELETE_DESPESA_ID(id)

       const response = axios.delete(url,{
           headers:{
               Authorization: `Bearer ${token}`
           }
       })
   }catch (error:unknown){
       apiError(error)
   }
}