import MenuLateral from "@/components/menu/menu-lateral";
import MenuTop from "@/components/menu/menu-top";
export default function RootLayout({
                                       children,
                                   }: Readonly<{
    children: React.ReactNode;
}>) {

    return (
        <main className="d-flex flex-row justify-content-between" style={{height: '100vh'}}>
            <MenuLateral/>
            <div className="container-fluid d-flex flex-column w-100">
                <MenuTop/>
                <div className="d-flex flex-column justify-content-between overflow-y-scroll" style={{height: '100%', width: '100%'}}>
                    {children}
                    <div className="bg-gradient">
                        <hr/>
                        <p className="p-2 text-center">SGME - 2024 @Poliana Lima </p>
                    </div>
                </div>
            </div>
        </main>
    );
}