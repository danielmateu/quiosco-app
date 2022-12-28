import Image from "next/image"

export const Categoria = ({categoria}) => {
    
    const {nombre, icono, id} = categoria
    return (
        <div className="flex gap-2 items-center m-2  p-5 hover:bg-orange-200 transition-all">
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
            >
                {nombre}
            </button>
        </div>
    )
}


