import { ResumenProducto } from "../components/ResumenProducto";
import useQuiosco from "../hooks/useQuiosco"
import { Layout } from "../layout/Layout"



const Resumen = () => {

    const {pedido} = useQuiosco();

    return (
        <Layout
            pagina='Resumen'
        >
            <h1 className="text-4xl">Resumen</h1>
            <p className="text-2xl my-4">Revisa tu pedido</p>

            {
                pedido.length === 0 ? (
                    <p className="text-lg">No hay elementos en tu pedido</p>
                ) : (
                    pedido.map(producto => (
                        <ResumenProducto
                            key={producto.id}
                            producto={producto}
                        />
                    ))
                )
            }

        </Layout>
    )
}

export default Resumen