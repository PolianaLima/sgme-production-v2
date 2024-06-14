'use client'
import Input from "@/components/forms/input";
import ErrorMessage from "@/components/message/erro-message";
import {useFormState, useFormStatus} from "react-dom";
import React, {useEffect} from "react";
import cadastroProduto from "@/actions/produtos/cadastro";

function FormButton() {
    const {pending} = useFormStatus();
    return (
        <>
            {pending ? (
                <button disabled={pending} className="bg-warning button">Cadastrando</button>
            ) : (
                <button className="button">CADASTRAR</button>
            )}
        </>
    )
}


export default function CadastroProdutoForm() {
    const [state, action] = useFormState(cadastroProduto, {
        ok: false,
        error: '',
        data: null
    });

    useEffect(() => {
        if (state.ok) {
            window.location.href = '/sgme/cadastro/produto';
        }
    }, [state]);

    return (
        <div className="w-100 p-2">
            <form action={action} className="w-100">
                <Input label="Codigo" name="codigo" type="text" error={state.error}
                       placeholder="Digite o codigo do produto"/>
                <Input label="Nome" name="nome" type="text" error={state.error}
                       placeholder={state.error ? "*Campo Obrigatorio" : "Descrição do produto"}/>
                <Input label="Custo" name="custo" type="text" error={state.error}
                       placeholder={state.error ? "*Campo Obrigatorio" : "Custo do produto"}/>
                <Input label="Preço" name="preco" type="text" error={state.error}
                       placeholder={state.error ? "*Campo Obrigatorio" : "Preço do produto"}/>
                <ErrorMessage error={state.error}/>
                <FormButton/>
            </form>

        </div>
    )
}