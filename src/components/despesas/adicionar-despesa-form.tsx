'use client';

import FormButton from "@/components/shared/FormButton";
import {Fornecedor} from "@/types/fornecedores";
import Input from "@/components/forms/input";
import {useFormState} from "react-dom";
import {useEffect} from "react";
import postDespesa from "@/actions/despesas/post-despesa";
import ErrorMessage from "@/components/message/erro-message";

type Props = {
    fornecedores?: Fornecedor[] | null
}

export default function AdicionarDespesaForm({fornecedores}: Props) {

    const [state, action] = useFormState(postDespesa, {
        ok: false,
        error: '',
        data: null
    });

    useEffect(() => {
        if (state.ok) {
            window.location.href = '/sgme/financeiro/contas-a-pagar';
        }
    }, [state]);
    return (
        <div className="w-100 p-2">
            <form action={action} className="w-100">
                <div className="mb-3">
                    <label htmlFor="fornecedor" className="form-label">Fornecedor</label>
                    <select className="select" id="fornecedor" name="fornecedor_id">
                        <option>Selecione um fornecedor</option>
                        {fornecedores?.map((fornecedor) => (
                            <option key={fornecedor.id} value={fornecedor.id}>{fornecedor.nome}</option>
                        ))}
                    </select>

                    <Input label="Valor" name="valor" type="text" placeholder={state ? ("*Campo Obrigatorio") : "Valor"}
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
                            <option value="PAGA">A Pagar</option>
                        </select>
                    </div>
                    <Input label="Observação" name="observacao" type="text" placeholder="Digite uma observação"/>
                </div>

                <ErrorMessage error={state.error}/>

                <FormButton url="/sgme/financeiro/contas-a-pagar"/>
            </form>
        </div>
    )
}