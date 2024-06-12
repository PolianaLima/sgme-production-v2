'use client'
import styles from './filtro-dados.module.css';
import {useState} from "react";

type Props = {
    onSearchChange: (search: string) => void
    onStatusChange: (status: string) => void
}

export default function FiltroDados({onSearchChange, onStatusChange}: Props) {
    const [search, setSearch] = useState('');
    const [status, setStatus] = useState('todos');

    const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setSearch(e.target.value);
        onSearchChange(e.target.value);
    }

    const handleStatusChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
        setStatus(e.target.value);
        onStatusChange(e.target.value);
    }

    return (
        <div className="d-flex w-100 mt-3 mb-4 p-2">
            <form className="w-100 d-flex justify-content-between">
                <div className={`${styles.formularioBusca}`}>
                    <input type="text" value={search} onChange={handleSearchChange}
                           placeholder="Pesquisar por nome ou código"/>
                    <i className="bi bi-search p-2"></i>
                </div>
                <div className={`${styles.formularioFiltroStatus}`}>
                    <label className="me-3">Filtrar por:</label>
                    <select name="status" value={status} id="status" onChange={handleStatusChange}>
                        <option value="">Todos</option>
                        <option value="ATIVO">Ativo</option>
                        <option value="INATIVO">Inativo</option>
                    </select>
                </div>
            </form>
        </div>

    )
}