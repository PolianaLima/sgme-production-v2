 export const API_URL = process.env.URL_API;
 export function USER_CADASTRO(){
     return {
         url: `${API_URL}/auth/register`,
     }
 }

export function USER_LOGIN(){
    return {
        url: `${API_URL}/auth/login`,
    }
}

export function USER_GET(){
    return {
        url: `${API_URL}/auth/user`,
    }
}

export function TOKEN_VALIDATE(){
    return{
        url: `${API_URL}/auth/validateToken`,
    }
}

//produtos

 export function GET_PRODUTOS(){
     return{
            url: `${API_URL}/produtos`,
     }
 }

export function GET_VENDAS(){
    return{
        url: `${API_URL}/vendas`,
    }
}