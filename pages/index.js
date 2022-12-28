import { Producto } from "../components/Producto"
import useQuiosco from "../hooks/useQuiosco"
import { Layout } from "../layout/Layout"




export default function Home({ categorias }) {

  // console.log(categorias)
  const { categoriaActual } = useQuiosco()

  return (
    <Layout pagina={`Menú ${categoriaActual?.nombre}`}>
      <h1 className="text-2xl ">{categoriaActual?.nombre}</h1>

      <p className="mt-5">Elige tu pedido 😊</p>

      <div className="grid gap-4 grid-cols-1  md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 ">
        {categoriaActual?.productos?.map(producto => (
          <Producto
            key={producto.id}
            producto={producto}
          />
        ))}
      </div>

    </Layout>
  )
}



