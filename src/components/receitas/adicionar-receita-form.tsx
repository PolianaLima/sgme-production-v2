'use client';

import FormButton from "@/components/shared/FormButton";
import Input from "@/components/forms/input";
import {useFormState} from "react-dom";
import {useEffect} from "react";
import postDespesa from "@/actions/despesas/post-despesa";
import ErrorMessage from "@/components/message/erro-message";
import {Cliente} from "@/types/clientes";
import postReceita from "@/actions/receitas/post-receita";

type Props = {
    clientes?: Cliente[] | null
}

export default function AdicionarReceitaForm({clientes}: Props) {

    const [state, action] = useFormState(postReceita, {
        ok: false,
        error: '',
        data: null
    });

    useEffect(() => {
        if (state.ok) {
            window.location.href = '/sgme/financeiro/contas-a-receber';
        }
    }, [state]);
    return (
        <div className="w-100 p-2">
            <form action={action} className="w-100">
                <div className="mb-3">
                    <label htmlFor="cliente" className="form-label">Cliente</label>
                    <select className="select" id="cliente" name="cliente_id">
                        <option>Selecione um Cliente</option>
                        {clientes?.map((cliente) => (
                            <option key={cliente.id} value={cliente.id}>{cliente.nome}</option>
                        ))}
                    </select>

                    <Input label="Valor" name="valor" type="text" placeholder="Valor"
                           error={state.error}/>

                    <Input label="Data de Vencimento" name="data_vencimento" type="date"/>

                    <div className="mb-3">
                        <label htmlFor="forma_pagamento" className="form-label">Forma Pagamento</label>
                        <select className="select" id="forma_pagamento" name="forma_pagamento">
                            <option>Selecione a forma de pagamento</option>
                            <option value="DINHEIRO">Dinheiro</option>
                            <option value="CARTAO">Pix</option>
                            <option value="PIX">Cartão</option>
                        </select>
                    </div>
                    <div className="mb-3">
                        <label htmlFor="status" className="form-label">Status</label>
                        <select className="select" id="status" name="status">
                            <option>Selecione o Status</option>
                            <option value="PENDENTE">Pendente</option>
                            <option value="PAGA">Paga</option>
                        </select>
                    </div>
                    <Input label="Observação" name="observacao" type="text" placeholder="Digite uma observação"/>
                </div>

                <ErrorMessage error={state.error}/>

                <FormButton url="/sgme/financeiro/contas-a-receber"/>
            </form>
        </div>
    )
}