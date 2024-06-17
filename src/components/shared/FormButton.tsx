import {useFormStatus} from "react-dom";
import React from "react";
type Props = {
    url: string;
}
export default function FormButton({url}: Props) {
    const {pending} = useFormStatus();
    return (
        <>
            {pending ? (
                <button disabled={pending} className="bg-warning button">Cadastrando</button>
            ) : (
                <div className="d-flex">
                    <button className="button me-3">SALVAR</button>
                    <button className="button bg-danger" onClick={(event) => {
                        event.preventDefault();
                        window.location.href =`${url}`;
                    }}>CANCELAR
                    </button>
                </div>
            )}
        </>
    )
}