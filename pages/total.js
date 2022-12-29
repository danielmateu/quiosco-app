import { useCallback, useEffect } from "react";
import { formatearDinero } from "../helpers";
import useQuiosco from "../hooks/useQuiosco";
import { Layout } from "../layout/Layout"


const Total = () => {

    const { pedido, nombre, setNombre, colocarOrden, total } = useQuiosco()

    const comprobarPedido = useCallback(() => {
        return pedido.length === 0 || nombre === '' || nombre.length < 2
    },[pedido, nombre])

    useEffect(() => {
        comprobarPedido()
    }, [pedido, comprobarPedido])


    

    return (
        <Layout
            pagina='Datos y Total'
        >
            <h1 className="text-4xl">Total y confirmar pedido</h1>
            <p className="text-2xl my-4">Confirma tu pedido a continuación</p>

            <form action="" onSubmit={colocarOrden}>
                <div>
                    <label htmlFor="nombre" className="block text-xl font-semibold">Nombre</label>
                    <input
                        type="text"
                        placeholder="Introduce tu nombre"
                        className="bg-gray-100 w-full lg:w-1/3 p-2 rounded"
                        id="nombre"
                        value={nombre}
                        onChange={e => setNombre(e.target.value)}
                    />
                </div>
                <div className="mt-10">
                    <p className="text-2xl">Total a pagar: {''}<span className="font-bold">{formatearDinero(total)}</span></p>
                </div>

                <div>
                    <input
                        className={`${comprobarPedido() ? 'bg-indigo-100 text-gray-400' : 'bg-indigo-400 text-white shadow-lg hover:shadow-none'} w-full lg:w-auto px-5 py-2 rounded font-semibold mt-2 transition-all`}
                        type="submit"
                        value='confirmar pedido'
                        disabled={comprobarPedido()}
                    />
                </div>
            </form>

        </Layout>
    )
}

export default Total