import "./globals.css";
import "bootstrap/dist/css/bootstrap.min.css";
import 'bootstrap-icons/font/bootstrap-icons.css';
import React from "react";

import Script from 'next/script';
import {UserContextProvider} from "@/context/user-context";
import userGet from "@/actions/user/user-get";

export default async function RootLayout({
                                       children,
                                   }: Readonly<{
    children: React.ReactNode;
}>) {

    const {data:user} =await userGet();

    return (
        <html lang="pt-BR">
        <Script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js"/>
        <body className="bg-secondary-subtle">
        <UserContextProvider user={user}>
            <main>
                {children}
            </main>
        </UserContextProvider>

        </body>
        </html>
    );
}
