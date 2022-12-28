import { Layout } from "../layout/Layout"


// import { PrismaClient } from '@prisma/client'


export default function Home({ categorias }) {

  console.log(categorias)

  return (
    <Layout>
      <h1>Inicio</h1>

    </Layout>
  )
}


// export const getServerSideProps = async () => {

//   const prisma = new PrismaClient();
//   const categorias = await prisma.categoria.findMany();

//   return {
//     props: {
//       categorias,
//     }
//   }
// }
