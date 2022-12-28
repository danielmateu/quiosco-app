import Image from "next/image"
import { formatearDinero } from "../helpers";
import useQuiosco from "../hooks/useQuiosco";


export const Producto = ({ producto }) => {

    const {handleSetProducto, handleChangeModal} = useQuiosco()
    const { nombre, imagen, precio } = producto;

    return (
        <div className="border rounded-xl  m-2  hover:shadow-md transition-all bg-slate-50 hover:rotate-[-6deg] ">
            <Image
                src={`/assets/img/${imagen}.jpg`}
                alt={`Imagen de ${producto.nombre}`}
                width={200}
                height={200}
                className='m-auto pt-8 rounded-xl'
            />
            <div className="p-5">
                <h3 className="text-2xl">{nombre}</h3>
                <div className=" flex justify-between align-middle p-4">
                    <p className="p-2">
                        {formatearDinero(precio)}
                    </p>
                    <button 
                    className="bg-indigo-200 hover:bg-indigo-300 hover:text-white rounded-xl w-20 p-2 transition-all"
                    onClick={() => {
                        handleSetProducto(producto)
                        handleChangeModal()
                    }}
                    >
                        agregar
                    </button>
                </div>
            </div>

        </div>
    )
}
