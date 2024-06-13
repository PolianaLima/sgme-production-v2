'use client'
import Input from "@/components/forms/input";
import ErrorMessage from "@/components/message/erro-message";
import {useFormState, useFormStatus} from "react-dom";
import React from "react";
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
    React.useEffect(() => {
        if (state.ok) {

            //window.location.href = '/sgme/cadastro/produto'

        }

    });
    return (
        <div className="w-100 p-2">
            <form action={action} className="w-100">
                <Input label="Codigo" name="codigo" type="text" error={state.error}
                       placeholder="Digite o codigo do produto"/>
                <Input label="Nome" name="nome" type="text" error={state.error}
                       placeholder="Digite o descrição do produto"/>
                <Input label="Custo" name="custo" type="text" error={state.error}
                       placeholder="Digite o custo do produto"/>
                <Input label="Preço" name="preco" type="text" error={state.error}
                       placeholder="Digite o preço do produto"/>
                <ErrorMessage error={state.error}/>
                <FormButton/>
            </form>

        {/*    REFATORAR EM UM COMPONENT PARA USAR EM OUTROS LOCAIS*/}

            <div className="w-100" hidden={!state.ok} style={{
                height: '100vh',
                width: '100%',
                backgroundColor: 'rgba(0,0,0,0.5)',
                position: 'fixed',
                top: '50%',
                left: '50%',
                transform: 'translate(-50%, -50%)',
                zIndex: 1000,
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center'
            }}>

                <div className="modal-dialog" style={{
                    width: '300px',
                    height: 'auto',
                    backgroundColor: 'white',
                    borderRadius: '10px',
                    boxShadow: '0 0 10px rgba(0,0,0,0.5)',
                    padding: '20px'
                }}>
                    <div className="modal-content">
                        <div className="modal-header">
                            <h1 className="modal-title fs-5 w-100 text-center" id="staticBackdropLabel">
                                <i className="h1 bi bi-check-circle-fill text-success"></i>
                            </h1>
                        </div>
                        <div className="modal-body">
                            <p className="text-center">Produto salvo com sucesso</p>
                        </div>
                        <div className="modal-footer justify-content-center">
                            <button type="button" className="btn btn-success ps-5 pe-5" data-bs-dismiss="modal"
                                    onClick={() =>window.location.href = '/sgme/cadastro/produto' }>OK
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}