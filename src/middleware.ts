import {type NextRequest, NextResponse} from "next/server";
import getUsuarioCokkies from "./functions/get-usuario-cokkies";

export async function middleware(request:NextRequest){
    const token = getUsuarioCokkies();
    const authenticated = token ? true: false;

    if(!authenticated && request.nextUrl.pathname.startsWith('/sgme')){
        return NextResponse.redirect(new URL('/login', request.url))
    }

    if(authenticated && request.nextUrl.pathname.startsWith('/login')){
        return NextResponse.redirect(new URL('/sgme', request.url))
    }
    return NextResponse.next()
}

export const config = {

    matcher:['/sgme/:path*', '/login/:path*']
}