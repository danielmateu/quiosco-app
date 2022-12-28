import Head from "next/head"
import { Sidebar } from "../components/Sidebar"



export const Layout = ({ children, pagina }) => {
    return (
        <>
            <Head>
                <title>Café - {pagina}</title>
                <meta name="description" content="Quisco cafeteria" />
            </Head>

            <div className="md:flex">
                <aside className="md:w-3/12 xl:w-1/4 2xl:w-1/5">
                    <Sidebar />
                </aside>

                <main className="md:w-9/12 xl:w-3/4 2xl:w-4/5 h-screen overflow-y-scroll">
                    <div className="p-10">
                        {children}
                    </div>
                </main>
            </div>
        </>
    )
}
