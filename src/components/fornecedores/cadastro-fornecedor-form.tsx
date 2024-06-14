'use client';

import Input from "@/components/forms/input";
import {useFormState, useFormStatus} from "react-dom";
import React, {useEffect} from "react";
import cadastroFornecedor from "@/actions/fornecedores/cadastro-fornecedor";
import ErrorMessage from "@/components/message/erro-message";

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

export default function CadastroFornecedorForm() {

    const [state, action] = useFormState(cadastroFornecedor, {
        ok: false,
        error: '',
        data: null
    });

    useEffect(() => {
        if (state.ok) {
            window.location.href = '/sgme/cadastro/fornecedor';
        }
    }, [state]);
    return (
        <div className="w-100 p-2">
            <form action={action} className="w-100">
                <Input label="nome"
                       name="nome"
                       type="text"
                       error={state.error}
                       placeholder={state.error ? "Campo Obrigatorio" : "Nome do cliente"}/>

                <Input label="CNPJ / Cpf"
                       name="documento"
                       type="text"
                       error=""
                       placeholder="CNPJ"/>

                <ErrorMessage error={state.error}/>
                <FormButton/>
            </form>
        </div>
    )
}