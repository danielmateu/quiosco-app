import { Producto } from "../components/Producto"
import useQuiosco from "../hooks/useQuiosco"
import { Layout } from "../layout/Layout"




export default function Home({ categorias }) {

  // console.log(categorias)
  const { categoriaActual } = useQuiosco()

  return (
    <Layout pagina={`Menú ${categoriaActual?.nombre}`}>
      <h1 className="text-4xl">{categoriaActual?.nombre}</h1>

      <p className="text-2xl my-5">Elige tu pedido <span className="hover:rotate-180">😊</span></p> 

      <div className="grid gap-4 xs:grid-cols-1  sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 ">
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



