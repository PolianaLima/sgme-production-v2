'use client';
import React from "react";
import Link from "next/link";
import {useUser} from "@/context/user-context";
import logout from "@/actions/user/logout";

export default function MenuTop() {

    const {user, setUser} = useUser();


    const handleLogout = async ()=>{
       await logout();
       setUser(null);
    }

    return (
        <div className="dropdown w-100 p-2 shadow d-flex justify-content-end">
            <Link href="#"
                  className="d-flex align-items-center text-white dropdown-toggle"
                  id="dropdownUser1" data-bs-toggle="dropdown" aria-expanded="false">
                <i className="bi bi-person-circle fs-3"></i>
                <span className="d-none d-sm-inline mx-1">{user?.nome}</span>
                <i className="bi bi-chevron-down"></i>
            </Link>
            <ul className="dropdown-menu rounded-0 p-0 text-small shadow">
                <li className="w-100">
                    <button className="dropdown-item" onClick={handleLogout}>Logout
                    </button>

                </li>
            </ul>
        </div>
    )
}