export type Receita={
    id: ReceitaId;
    usuario_id: string;
    cliente_id: string;
    nome:string;
    valor: number;
    data_vencimento: string;
    status: string;
    forma_pagamento: string;
    observacao: string;
    data_created: Date;
    data_updated: Date;
}

export type ApiResponseReceitas={
    data: Receita[] | null;
    ok: boolean;
    error: string;
};

export type ApiResponseReceitaId={
    data: Receita | null;
    ok: boolean;
    error: string;
}

export type ReceitaId={
    id: string;
}