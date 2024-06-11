import {Metadata} from "next";

export const metadata: Metadata = {
    title: "Cadastro de produtos",
    description: "Pagina  de cadastro de produto no sistema",
}


export default function CadastroProduto(){
    return(
        <div className="mt-4 p-2">
            <h1>Cadastro de produtos</h1>
        </div>
    )
}