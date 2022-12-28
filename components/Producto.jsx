import Image from "next/image"
import { formatearDinero } from "../helpers";


export const Producto = ({producto}) => {

    const {nombre, imagen, precio} = producto;

    return (
        <div className="border rounded-xl  m-2  hover:shadow-md transition-all bg-slate-100">
            <Image
                src={`/assets/img/${imagen}.jpg`}
                alt={`Imagen de ${producto.nombre}`}
                width={200}
                height={200}
                className='m-auto pt-8 rounded-xl'
            />
            <div className="p-5">
                <h3 className="text-2xl">{nombre}</h3>
                <p className="mt-5">
                    {formatearDinero(precio)}
                </p>
            </div>

        </div>
    )
}
