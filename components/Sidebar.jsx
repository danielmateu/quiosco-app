import Image from "next/image"
import useQuiosco from "../hooks/useQuiosco"
import { Categoria } from "./Categoria"



export const Sidebar = () => {
    const { categorias } = useQuiosco()

    return (
        <>
            <Image
                width={150}
                height={100}
                src='/assets/img/logo.svg' alt='imagen logo'
                className="m-5" 
            />

            <nav className="mt-10">
                {
                    categorias.map(categoria => (
                        <Categoria
                            key={categoria.id}
                            categoria={categoria}
                        />
                    ))
                }
            </nav>
        </>
    )
}
