'use client'

import styles from './filtro-dados.module.css';
export default function FiltroDados() {
    return (
        <div className="d-flex w-100 mt-3 p-2">
            <form className="w-100 d-flex justify-content-between">
                <div  className={`${styles.formularioBusca}`}>
                    <input type="text" id="nome" placeholder="Nome do produto"/>
                    <button type="submit"><i className="bi bi-search"></i></button>
                </div>
                <div className={`${styles.formularioFiltroStatus}`}>
                    <select name="status" id="status">
                        <option value="">Status</option>
                        <option value="ativo">Ativo</option>
                        <option value="inativo">Inativo</option>
                    </select>
                    <button type="submit"><i className="bi bi-funnel-fill text-white"> Filtrar</i></button>
                </div>
            </form>
        </div>

    )
}