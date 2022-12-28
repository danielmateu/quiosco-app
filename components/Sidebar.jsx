import Image from "next/image"
import useQuiosco from "../hooks/useQuiosco"
import { Categoria } from "./Categoria"



export const Sidebar = () => {
    const { categorias } = useQuiosco()

    return (
        <>
            <Image
                width={140}
                height={140}
                src='/assets/img/logo.svg' alt='imagen logo'
                className="m-auto pt-6" 
                priority={true}
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
