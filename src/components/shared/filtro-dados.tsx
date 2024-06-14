'use client'

import styles from './filtro-dados.module.css';
import {useState} from "react";

type Props = {
    onSearchChange: (search: string) => void
}

export default function FiltroDados({onSearchChange}: Props) {
    const [search, setSearch] = useState('');

    const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setSearch(e.target.value);
        onSearchChange(e.target.value);
    }

    return (
        <div className="d-flex w-100 mt-3 mb-4 p-2">
            <form className="w-100 d-flex justify-content-between">
                <div className={`${styles.formularioBusca}`}>
                    <input type="text" value={search} onChange={handleSearchChange}
                           placeholder="Pesquisar por nome ou código"/>
                    <i className="bi bi-search p-2"></i>
                </div>
            </form>
        </div>
    )
}