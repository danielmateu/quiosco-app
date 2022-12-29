import axios from 'axios';
import { createContext, useEffect, useState } from 'react'
import { toast } from 'react-toastify';



const QuioscoContext = createContext();

const QuioscoProvider = ({ children }) => {

    const [categorias, setCategorias] = useState([]);
    const [categoriaActual, setCategoriaActual] = useState({})
    const [producto, setProducto] = useState({})
    const [modal, setModal] = useState(false)
    const [pedido, setPedido] = useState([]);


    const obtenerCategorias = async() => {
        const {data} = await axios('/api/categorias')
        setCategorias(data);
    }

    useEffect(() => {
        obtenerCategorias()
    }, []);

    useEffect(() => {
        setCategoriaActual(categorias[0])
    }, [categorias])
    

    const handleClickCategoria = id => {
        const categoria = categorias.filter(cat => cat.id === id);
        setCategoriaActual(categoria[0]);
    }

    const handleSetProducto = producto => {
        setProducto(producto);
    }

    const handleChangeModal = () => {
        setModal(!modal);
    }

    const handleAgregarPedido = ({categoriaId, ...producto}) => {

        if(pedido.some(productoState => productoState.id === producto.id)){
            //Actualizar la cantidad
            const pedidoActualizado = pedido.map(productoState => productoState.id === producto.id ? producto : productoState )

            setPedido(pedidoActualizado);
            toast.success('Guardado correctamente')
            
        }else{
            setPedido([...pedido, producto]);
            toast.success('Agregado al pedido')
        }

        setModal(false);
    }

    const handleEditarCantidades = id => {
        // console.log(id);
        const productoActualizar = pedido.filter(producto => producto.id === id)
        setProducto(productoActualizar[0]);
        setModal(!modal)
    }


    return (

        <QuioscoContext.Provider
            value={{
                categorias,
                categoriaActual,
                handleClickCategoria,
                handleSetProducto,
                producto,
                handleChangeModal,
                modal,
                handleAgregarPedido,
                pedido,
                // handleChangePaso,
                // paso,
                handleEditarCantidades,
            }}
        >
            {children}
        </QuioscoContext.Provider>
    )
}

export {
    QuioscoProvider
}

export default QuioscoContext
