import {ProdutoId} from "@/types/produtos";
import {FornecedorId} from "@/types/fornecedores";

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

export function POST_CLIENTES() {
    return {
        url: `${API_URL}/clientes/cadastro`,
    }
}

export function GET_CLIENTE_ID(id: ProdutoId) {
    return {
        url: `${API_URL}/clientes/${id}`,
    }
}

export function PUT_CLIENTE_ID(id: ProdutoId) {
    return {
        url: `${API_URL}/clientes/${id}`,
    }

}

//Fornecedores
export function GET_FORNECEDORES() {
    return {
        url: `${API_URL}/fornecedores`,
    }
}

export function POST_FORNECEDORES() {
    return {
        url: `${API_URL}/fornecedores/cadastro`,
    }
}

export function GET_FORNECEDOR_ID(id: FornecedorId) {
    return {
        url: `${API_URL}/fornecedores/${id}`,
    }
}

export function PUT_FORNECEDOR_ID(id: FornecedorId) {
    return {
        url: `${API_URL}/fornecedores/${id}`,
    }
}

export function GET_VENDAS() {
    return {
        url: `${API_URL}/vendas`,
    }
}