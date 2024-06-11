 export const API_URL = process.env.PUBLIC_URL_API;

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

export function GET_VENDAS(){
    return{
        url: `${API_URL}/vendas`,
    }
}