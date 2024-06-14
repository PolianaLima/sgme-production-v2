'use client';

import {Fornecedor} from "@/types/fornecedores";
import {useFormState, useFormStatus} from "react-dom";
import React, {useEffect} from "react";
import updateFornecedor from "@/actions/fornecedores/update-fornecedor";
import Input from "@/components/forms/input";
import InputRadio from "@/components/forms/input-radio";
import ErrorMessage from "@/components/message/erro-message";

type Props = {
    fornecedor?: Fornecedor | null;

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
                        window.location.href = '/sgme/cadastro/fornecedor';
                    }}>CANCELAR
                    </button>
                </div>
            )}
        </>
    )
}

export default function  UpdateFornecedorForm({fornecedor}:Props){
    const [state, action] = useFormState(updateFornecedor,{
        ok: false,
        error: '',
        data: fornecedor
    });


    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const {name, value,type,checked} = event.target;
    }

    useEffect(() => {
        if (state.ok) {
            window.location.href = '/sgme/cadastro/fornecedor';
        }
    }, [state]);
    return(
        <div className="w-100 p-3">
            <form action={action} className="w-100">
                <input defaultValue={state.data?.id}
                       type="text"
                       readOnly={true}
                       hidden={true}
                       name="id"
                />

                <Input label="Nome"
                       name="nome"
                       type="text"
                       defaultValue={state.data?.nome}
                       readOnly={true}
                       placeholder="Nome do cliente"/>

                <Input label="Documento"
                       name="documento"
                       type="text"
                       defaultValue={state.data?.documento}
                       error={state.error}
                       onChange={handleChange}
                       placeholder="Cpf / Cnpj"/>


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