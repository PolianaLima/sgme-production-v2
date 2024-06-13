"use client"
import Input from "@/components/forms/input";
import ErrorMessage from "@/components/message/erro-message";
import React, {useEffect} from "react";
import {useFormState, useFormStatus} from "react-dom";
import {Produto} from "@/types/produtos";
import updateProduto from "@/actions/produtos/update-produto";
import InputRadio from "@/components/forms/input-radio";

type Props = {
    produto?: Produto
}

function FormButton() {
    const {pending} = useFormStatus();
    return (
        <>
            {pending ? (
                <button disabled={pending} className="bg-warning button">Salvando dados</button>
            ) : (
                <div className="d-flex">
                    <button className="button me-3">SALVAR</button>
                    <button className="button bg-danger" onClick={(event) => {
                        event.preventDefault();
                        window.location.href = '/sgme/cadastro/produto';
                    }}>CANCELAR
                    </button>
                </div>

            )}
        </>
    )
}

export default function UpdateProdutoForm({produto}: Props) {

    const [state, action] = useFormState(updateProduto, {
        ok: false,
        error: '',
        data: produto
    });

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const {name, value,type,checked} = event.target;
    }

    useEffect(() => {
        if (state.ok) {
            window.location.href = '/sgme/cadastro/produto';
        }
    }, [state]);

    return (
        <div className="w-100 p-3">
            <form action={action} className="w-100">
                <input defaultValue={state.data?.id}
                       type="text"
                       readOnly={true}
                       hidden={true}
                       name="id"
                />

                <Input label="Codigo"
                       name="codigo"
                       type="text"
                       defaultValue={state.data?.codigo}
                       readOnly={true}
                       placeholder="Digite o codigo do produto"/>

                <Input label="Nome"
                       name="nome"
                       type="text"
                       defaultValue={state.data?.nome}
                       error={state.error}
                       onChange={handleChange}

                       placeholder="Digite o descrição do produto"/>

                <Input label="Custo"
                       name="custo"
                       type="text"
                       defaultValue={state.data?.custo}
                       onChange={handleChange}
                       error={state.error}
                       placeholder="Digite o custo do produto"/>

                <Input label="Preço"
                       name="preco"
                       type="text"
                       defaultValue={state.data?.preco}
                       onChange={handleChange}
                       error={state.error}
                       placeholder="Digite o preço do produto"/>

                <div className="d-flex flex-column w-100 me-3 mb-4">
                    <InputRadio label="Ativo" name="status" value="ATIVO" defaultChecked={state.data?.status === "ATIVO"} onChange={handleChange}/>
                    <InputRadio label="Inativo" name="status" value="INATIVO" defaultChecked={state.data?.status === "INATIVO"} onChange={handleChange}/>
                </div>

                <ErrorMessage error={state.error}/>
                <FormButton/>
            </form>
        </div>
    )

}