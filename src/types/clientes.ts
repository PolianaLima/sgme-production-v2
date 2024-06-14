export type Cliente = {
    id: string;
    usuario_id:string;
    nome:string;
    documento:string;
    telefone:string;
    status:string;
    data_nascimento:string;
    data_created:Date;
    data_updated:Date;
}

export type ApiResponseClientes = {
    data: Cliente[] | null;
    ok: boolean;
    error: string;
};

export type ApiResponseClienteId = {
    data: Cliente | null;
    ok: boolean;
    error: string;
};

export type ClienteId = {
    id: string;
}