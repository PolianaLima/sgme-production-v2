'use client';

import Input from "@/components/forms/input";
import {useFormState, useFormStatus} from "react-dom";
import cadastroCliente from "@/actions/clientes/cadastro-cliente";
import React, {useEffect} from "react";
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

export default function CadastroClienteForm() {
    const [state, action] = useFormState(cadastroCliente, {
        ok: false,
        error: '',
        data: null
    });

    useEffect(() => {
        if (state.ok) {
            window.location.href = '/sgme/cadastro/cliente';
        }
    }, [state]);

    return (
        <div className="w-100 p-2">
            <form action={action} className="w-100">
                <Input label="Nome"
                       name="nome"
                       type="text"
                       error={state.error}
                       placeholder={state.error ? "Campo Obrigatorio" : "Nome do cliente"}/>
                <Input label="CPF / Cnpj"
                       name="documento"
                       type="text"
                       error={state.error}
                       placeholder="Cpf / Cnpj"/>
                <Input label="Data de Nascimento"
                       name="data_nascimento"
                       type="date"
                       error={state.error+"Informe uma data de nascimento valida"}
                       placeholder={state.error ? "Campo Obrigatorio" : "Data de Nascimento"}/>
                <Input label="Telefone"
                       name="telefone"
                       type="text"
                       error={state.error}
                       placeholder="(21) 999978116"/>

                <ErrorMessage error={state.error}/>
                <FormButton/>
            </form>
        </div>
    )
}