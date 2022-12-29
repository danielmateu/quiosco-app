import { useRouter } from "next/router"
// import useQuiosco from "../hooks/useQuiosco"


const pasos = [
    { paso: 1, nombre: 'Menú', url: '/' },
    { paso: 2, nombre: 'Resumen', url: '/resumen' },
    { paso: 3, nombre: 'Datos y Total', url: '/total' },
]

export const Pasos = () => {


    const router = useRouter()

    const calcularProgreso = () => {

        let valor;

        if(router.pathname === '/'){
            valor = 10
        }else if(router.pathname === '/resumen'){
            valor = 50
        }else{
            valor = 100
        }

        return valor;
    }

    return (
        <>
            <div className={`flex justify-between text-2xl mb-5`}>
                {
                    pasos.map(paso => (
                        <button
                        onClick={() => {
                            router.push(paso.url)

                        }}
                            key={paso.paso}
                            className='font-semibold'
                        >
                            {paso.nombre}
                        </button>
                    ))
                }
            </div>

            <div className="bg-gray-100 mb-10">
                <div className="rounded-full bg-orange-300 text-xs leading-none h-2 text-center text-slate-400 transition-all" style={{width: `${calcularProgreso()}%`}}></div>
            </div>
        </>
    )
}
