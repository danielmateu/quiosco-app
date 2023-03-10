import axios from "axios";
import Image from "next/image";
import { toast } from "react-toastify";
import { formatearDinero } from "../helpers";



const Orden = ({ orden }) => {

    const { id, nombre, total, pedido } = orden
    const completarOrden = async () => {
        // console.log('completando...', id);
        try {
            await axios.post(`/api/ordenes/${id}`)
            // console.log(data)
            toast.success('Pedido Listo')
        } catch (error) {
            toast.error('Ha habido un error...')
        }
    }

    return (
        <div className='border rounded shadow-md hover:shadow-none p-10 space-y-5 m-4 transition-all'>
            <h3 className="text-2xl">Pedido: {id}</h3>
            <p className="text-lg">Cliente: {nombre}</p>

            <div className="">
                {
                    pedido.map(platillo => (
                        <div
                            key={platillo.id}
                            className='py-3 flex border-b last-of-type:border-none '
                        >
                            <div className="flex">
                                <Image
                                    height={150}
                                    width={150}
                                    alt={`Imagen ${platillo.nombre}`}
                                    src={`/assets/img/${platillo.imagen}.jpg`}
                                    className='rounded'
                                />
                                <div className="p-5 space-y-2">
                                    <h4 className="text-xl">{platillo.nombre}</h4>
                                    <p className="text-lg">Cantidad: {platillo.cantidad}</p>
                                </div>
                            </div>

                        </div>
                    ))
                }
            </div>
            <div className="md:flex md:items-center md:justify-between font-semibold my-5">
                <p className="mt-5 text-4xl text-orange-400">
                    Total a pagar: {formatearDinero(total)}
                </p>

                <button
                    type="button"
                    className="bg-indigo-400 p-4 rounded-xl shadow-lg hover:shadow-none transition-all text-white"
                    onClick={completarOrden}
                >Confirmar Pedido</button>
            </div>
        </div>
    )
}

export default Orden;
