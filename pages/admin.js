import AdminLayout from "../layout/AdminLayout"




const Admin = () => {
    return (
        <AdminLayout
            pagina={'Admin'}
        >
            <h1 className="text-4xl">Panel de Administración</h1>
            <p className="text-2xl my-4">Administra los pedidos</p>

        </AdminLayout>
    )
}

export default Admin