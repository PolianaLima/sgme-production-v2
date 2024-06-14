export type Produto =
    {
        id:string;
        nome:string;
        codigo:string;
        preco:number;
        custo:number;
        status:string;
        usuario_id:string;
        data_created:Date;
        data_updated:Date;
    }


export type ApiResponseProdutos = {
        data: Produto[] | null;
        ok: boolean;
        error: string;
};


export type ApiResponseProdutoId = {
        data: Produto | null;
        ok: boolean;
        error: string;
};


export type ProdutoId = {
    id: string;
}