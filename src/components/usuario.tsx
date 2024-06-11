'use client'
import {useUser} from "@/context/user-context";

export default function UsuarioName(){
    const {user} = useUser();
    return(
        <div>
            <h2 className="text-center">{user?.nome}</h2>
        </div>
    )
}