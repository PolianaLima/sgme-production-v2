export type Despesa={
    id: DespesaId;
    usuario_id: string;
    fornecedor_id: string;
    nome:string;
    valor: number;
    data_vencimento: string;
    status: string;
    forma_pagamento: string;
    observacao: string;
    data_created: Date;
    data_updated: Date;
}

export type ApiResponseDespesas={
    data: Despesa[] | null;
    ok: boolean;
    error: string;
};

export type ApiResponseDespesaId={
    data: Despesa | null;
    ok: boolean;
    error: string;
}

export type DespesaId={
    id: string;
}