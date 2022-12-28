import Head from "next/head"
import Modal from "react-modal"
import { Sidebar } from "../components/Sidebar"
import useQuiosco from "../hooks/useQuiosco";


const customStyles = {
    content: {
        top: '50%',
        left: '50%',
        right: 'auto',
        bottom: 'auto',
        marginRight: '-50%',
        transform: 'translate(-50%, -50%)',
    },
};

// Make sure to bind modal to your appElement (https://reactcommunity.org/react-modal/accessibility/)
Modal.setAppElement('#__next');



export const Layout = ({ children, pagina }) => {

    const {modal} = useQuiosco();

    return (
        <>
            <Head>
                <title>Café - {pagina}</title>
                <meta name="description" content="Quisco cafeteria" />
            </Head>

            <div className="md:flex">
                <aside className="md:w-3/12 xl:w-1/4 2xl:w-1/5">
                    <Sidebar />
                </aside>

                <main className="md:w-9/12 xl:w-3/4 2xl:w-4/5 h-screen overflow-y-scroll">
                    <div className="p-10">
                        {children}
                    </div>
                </main>
            </div>

            {
                modal && (
                    <Modal
                        isOpen={modal}
                        style={customStyles}
                    >
                        <h1>Modal...</h1>
                    </Modal>
                )
            }
        </>
    )
}
