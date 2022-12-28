import Image from "next/image"
import useQuiosco from "../hooks/useQuiosco"

export const Categoria = ({categoria}) => {
    
    const {categoriaActual, handleClickCategoria} = useQuiosco();

    const {nombre, icono, id} = categoria;

    return (
        <div className={`${categoriaActual?.id === id ? 'bg-orange-200' : ''} flex gap-4 items-center m-2 p-4 w-fit hover:bg-orange-200 rounded-xl transition-all`}>
            <Image
                width={50}
                height={50}
                src={`/assets/img/icono_${icono}.svg`}
                alt='imagen icono'
                // className="m-2 p-2"
            />

            <button
                type="button"
                className="text-2xl hover:cursor-pointer hover:text-slate-500 transition-all"
                onClick={() => handleClickCategoria(id)}
            >
                {nombre}
            </button>
        </div>
    )
}


