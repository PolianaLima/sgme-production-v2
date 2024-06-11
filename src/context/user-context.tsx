'use client';
import React, {useEffect} from "react";
import validateToken from "@/actions/user/validate-token";

type User = {
    id: string;
    nome: string;
    login: string;
}

type IUserContext = {
    user: User | null;
    setUser: React.Dispatch<React.SetStateAction<User | null>>;
};

const UserContext = React.createContext<IUserContext | null>(null);

export const useUser = () => {
    const context = React.useContext(UserContext);
    if (context === null) {
        throw new Error('useContext deve estar dentro do Provider');
    }
    
    return context;
};



export function UserContextProvider({children, user}: { children: React.ReactNode; user: User | null;}) {
    const [userState, setUser] = React.useState<User | null>(user);

   /* useEffect(() => {
        const tokenValidate = async ()=>{
            await validateToken();
        }

        tokenValidate();
    }, [userState]);
*/
    return (
        <UserContext.Provider value={{user: userState, setUser}}>
            {children}
        </UserContext.Provider>
    );
}