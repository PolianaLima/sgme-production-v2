'use client';

import {Despesa} from "@/types/despesas";
import {useFormState} from "react-dom";
import React, {useEffect} from "react";
import updateDespesa from "@/actions/despesas/update-despesa";
import Input from "@/components/forms/input";
import FormButton from "@/components/shared/FormButton";
import ErrorMessage from "@/components/message/erro-message";

type Props = {
    despesa?: Despesa | null;
}


export default function UpdateDespesaForm({despesa}:Props){
    const [state, action] = useFormState(updateDespesa,{
        ok: false,
        error: '',
        data: despesa
    });

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const {name, value,type,checked} = event.target;
    }

    useEffect(() => {
        if (state.ok) {
            window.location.href = '/sgme/financeiro/contas-a-pagar';
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

                <Input
                    label="Fornecedor"
                    type="text"
                    name="nome"
                    defaultValue={state.data?.nome}
                    readOnly={true}
                />
                <Input label="Valor"
                       name="valor"
                       type="text"
                       defaultValue={state.data?.valor}
                       onChange={handleChange}
                       placeholder={state ? ("*Campo Obrigatorio") : "Valor"}
                />
                <Input label="Data Vencimento"
                       name="data_vencimento"
                       type="date"
                       defaultValue={state.data?.data_vencimento}
                       onChange={handleChange}
                />

                <div className="mb-3">
                    <label htmlFor="forma_pagamento" className="form-label">Forma Pagamento</label>
                    <select className="select" id="forma_pagamento"
                            name="forma_pagamento" defaultValue={state.data?.forma_pagamento}
                    >
                        <option defaultValue={state.data?.forma_pagamento}>{state.data?.forma_pagamento}</option>
                        <option value="CARTAO">Pix</option>
                        <option value="DINHEIRO">Dinheiro</option>
                        <option value="PIX">Cartão</option>
                    </select>
                </div>

                <div className="mb-3">
                    <label htmlFor="status" className="form-label">Status</label>
                    <select className="select" id="status"
                            name="status"
                    >
                        <option defaultValue={state.data?.status}>{state.data?.status}</option>
                        <option value="PAGA">Paga</option>
                        <option value="PENDENTE">Pendente</option>
                    </select>
                </div>
                <Input label="Observação"
                       name="observacao"
                       type="text"
                       defaultValue={state.data?.observacao}
                       onChange={handleChange}
                       placeholder="Observação"
                />

                <ErrorMessage error={state.error} />
                <FormButton url='/sgme/financeiro/contas-a-pagar' />
            </form>

        </div>
    )

}