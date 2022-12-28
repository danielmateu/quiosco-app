import useQuiosco from "../hooks/useQuiosco"
import { Layout } from "../layout/Layout"





export default function Home({ categorias }) {

  // console.log(categorias)
  const {categoriaActual} = useQuiosco()

  return (
    <Layout pagina={`Menú ${categoriaActual?.nombre}`}>
      <h1 className="text-2xl ">{categoriaActual?.nombre}</h1>

      <p className="mt-5">Elige tu pedido 😊</p>
    </Layout>
  )
}



