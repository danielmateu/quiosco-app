import Image from "next/image"
import { useState } from "react";
import { formatearDinero } from "../helpers";
import useQuiosco from "../hooks/useQuiosco"


export const ModalProducto = () => {

    const { producto, handleChangeModal } = useQuiosco();
    const [cantidad, setCantidad] = useState(1);

    return (


        <div className="md:flex gap-10">
            <div className="md:w-1/3">
                <Image
                    width={300}
                    height={300}
                    alt={`Imagen de ${producto.nombre}`}
                    src={`/assets/img/${producto.imagen}.jpg`}
                />
            </div>
            <div className="md:w-2/3">
                <div className="flex justify-end ">
                    <button
                        className="rounded-full p-2 bg-slate-100 hover:bg-slate-400 transition-all"
                        onClick={handleChangeModal}
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4 ">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                        </svg>
                    </button>
                </div>
                <h1 className="text-3xl">{producto.nombre}</h1>
                <p className="mt-5 text-5xl text-orange-300 font-black">{formatearDinero(producto.precio)}</p>

                <div className="mt-6 flex gap-5">
                    
                    <button
                        className="rounded-full  bg-red-100 hover:bg-red-400 transition-all"
                        type="button"
                        onClick={() => {
                            if (cantidad <= 1) return;
                            setCantidad(cantidad - 1)
                        }}
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M15 12H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>

                    </button>

                    <p className="text-xl">{cantidad}</p>

                    <button
                        className="rounded-full  bg-blue-100 hover:bg-blue-400 transition-all"
                        type="button"
                        onClick={() => {
                            if (cantidad >= 10) return;
                            setCantidad(cantidad + 1)

                        }}
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v6m3-3H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                    </button>

                </div>

            </div>


        </div>
    )
}
