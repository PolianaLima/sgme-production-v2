import {ProdutoId} from "@/types/produtos";

export const API_URL = process.env.URL_API;

export function USER_CADASTRO() {
    return {
        url: `${API_URL}/auth/register`,
    }
}

export function USER_LOGIN() {
    return {
        url: `${API_URL}/auth/login`,
    }
}

export function USER_GET() {
    return {
        url: `${API_URL}/auth/user`,
    }
}

export function TOKEN_VALIDATE() {
    return {
        url: `${API_URL}/auth/validateToken`,
    }
}

//produtos

export function GET_PRODUTOS() {
    return {
        url: `${API_URL}/produtos`,
    }
}

export function POST_PRODUTOS() {
    return {
        url: `${API_URL}/produtos/cadastro`,
    }
}

export function GET_PRODUTO_ID(id: ProdutoId) {
    return {
        url: `${API_URL}/produtos/${id}`,
    }
}

export function PUT_PRODUTO_ID(id: ProdutoId) {
    return {
        url: `${API_URL}/produtos/${id}`,
    }
}

//clientes
export function GET_CLIENTES() {
    return {
        url: `${API_URL}/clientes`,
    }

}

export function GET_VENDAS() {
    return {
        url: `${API_URL}/vendas`,
    }
}