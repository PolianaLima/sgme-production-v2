'use client';
import login from "@/actions/user/login";
import {useFormStatus, useFormState} from 'react-dom';
import Input from "@/components/forms/input";
import ErrorMessage from "@/components/message/erro-message";
import React from "react";
import {useUser} from "@/context/user-context";

function FormButton() {
    const {pending} = useFormStatus();
    return (
        <>
            {pending ? (
                <button disabled={pending} className="bg-warning button">Enviando</button>
            ) : (
                <button className="button">LOGIN</button>
            )}
        </>
    )
}

export default function LoginForm() {
    const [state, action] = useFormState(login, {
        ok: false,
        error: '',
        data: null
    });

    const {user} = useUser()

    React.useEffect(()=>{
        if(state.ok){
            window.location.href = '/sgme'
        }
    })
    return (
        <form action={action} className="d-flex flex-column w-100 p-2">
            <Input label="Email" name="login" type="text" error={state.error}/>
            <Input label="Senha" name="senha" type='password' error={state.error} />
            <ErrorMessage error={state.error}/>
            <FormButton/>
        </form>
    )
        ;
};