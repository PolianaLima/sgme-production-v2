'use client';

import deleteDespesa from "@/actions/despesas/delete-despesa";
import {DespesaId} from "@/types/despesas";
import {useEffect, useState} from "react";

type Props = {
    id: DespesaId;
    statusHidden: boolean;
    setStatusHidden: (status: boolean) => void;
}
export default function ModalExcluirDespesa({id, statusHidden, setStatusHidden}: Props) {

    const [isClient, setIsClient] = useState(false);

    useEffect(() => {
        setIsClient(true);
    }, []);

    const handleDelete = async (event: React.MouseEvent) => {
        event.preventDefault();
        await deleteDespesa(id);
        setStatusHidden(true);
        if (isClient) {
            window.location.href = '/sgme/financeiro/contas-a-pagar';
        }
    }

    if (!isClient) {
        return null;
    }

    return (
        <div hidden={statusHidden} className="w-100" style={{
            position: 'fixed',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundColor: 'rgba(0,0,0,0.2)',
            zIndex: 1000,
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center'
        }}>
            <div className="bg-white d-sm-flex flex-column justify-content-center align-items-center p-5 rounded-3">
                <h3>Confirma exclusão?</h3>
                <div className='d-flex mt-3'>
                    <button className="button bg-success me-2" onClick={handleDelete}>Confirmar</button>
                    <button className="button bg-danger me-2" onClick={(event) => {
                        event.preventDefault();
                        setStatusHidden(true);
                    }}>Cancelar
                    </button>
                </div>

            </div>

        </div>
    )
}