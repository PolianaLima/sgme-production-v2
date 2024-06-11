'use client';
import {useFormState, useFormStatus} from 'react-dom';
import Input from "@/components/forms/input";
import ErrorMessage from "@/components/message/erro-message";
import React from "react";
import cadastro from "@/actions/user/cadastro";

function FormButton() {
    const {pending} = useFormStatus();
    return (
        <>
            {pending ? (
                <button disabled={pending} className="bg-warning button">Cadastrando</button>
            ) : (
                <button className="button">ENVIAR</button>
            )}
        </>
    )
}

export default function CadastroForm() {
    const [state, action] = useFormState(cadastro, {
        ok: false,
        error: '',
        data: null
    });

    React.useEffect(()=>{
        if(state.ok){
            window.location.href = '/'
        }

    })
    return (
        <form action={action} className="d-flex flex-column w-100 p-2">
            <Input label="nome" name="nome" type="text" error={state.error} placeholder='Digite Seu nome' />
            <Input label="Email" name="login" type="text" error={state.error} placeholder="Digite seu email"/>
            <Input label="Senha" name="senha" type='password' error={state.error} placeholder="Digite sua senha" />
            <ErrorMessage error={state.error}/>
            <FormButton/>
        </form>
    )
        ;
};