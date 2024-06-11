import {cookies} from "next/headers";

export  default  function getUsuarioCokkies() {
    try {
        const token = cookies().get('token')?.value;
        if (!token) return ("");
      return token;
    }catch (error){
        return ("");
    }
}