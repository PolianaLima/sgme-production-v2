export type Fornecedor = {
    id: string;
    usuario_id: string;
    nome: string;
    documento: string;
    status: string;
    data_created: Date;
    data_updated: Date;
}

export type ApiResponseFornecedores = {
    data: Fornecedor[] | null;
    ok: boolean;
    error: string;
};

export type ApiResponseFornecedorId = {
    data: Fornecedor | null;
    ok: boolean;
    error: string;
};

export type FornecedorId = {
    id: string;
}