'use client'

import {useState} from "react";

type Props = {
    onSearchChange: (search: string) => void
    mPlaceholder?: string
}

export default function FiltroFinanceiro({onSearchChange, mPlaceholder}: Props) {
    const [search, setSearch] = useState('');

    const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setSearch(e.target.value);
        onSearchChange(e.target.value);
    }

    return (
        <div className="d-flex w-100 mt-3 mb-4 p-2">
            <form className="w-100 d-flex justify-content-end">
               {/* <div className="d-flex w-100 border rounded-3 border-secondary p-1" >
                    <input type="text" className="w-100 border-0 p-2 focus-filter" value={search} onChange={handleSearchChange}
                           placeholder={mPlaceholder}
                    />
                    <i className="h4 bi bi-search p-2"></i>
                </div>*/}
                <div className="d-flex flex-column">
                    <label>Selecione uma data para filtrar</label>
                    <input type="date" className="border rounded-3 border-secondary p-2 ms-3"  onChange={handleSearchChange}/>
                </div>
            </form>

        </div>
    )
}