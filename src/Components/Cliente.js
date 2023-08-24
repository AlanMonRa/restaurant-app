import React, {Fragment, useState, useEffect} from "react"; // useState, useEffect
import Navbar from './Navbar'
import ClienteList from "./ClienteList";
import ClienteFormulario from "./ClienteFormulario";

function Cliente() {

    const [cliente, setCliente] = useState({
        nombre: '',
        apellidos: '',
        rfc: '',
        direccion: '',
        zipcode: 0,
        montototal: 0,
        fecha: '',
        idfactura: 0
    })
    
    const [clientes, setClientes] = useState([])
    
    const [clienteUpdated, setClienteUpdated] = useState(false)

    useEffect(() => {
        const getClientes = () => {
        fetch('http://127.0.0.1:5401/cliente')
        .then(res => res.json())
        .then(res => setClientes(res))
        }
        getClientes()
        setClienteUpdated(false)
    }, [clienteUpdated])

    return (
        <Fragment>
            <Navbar brand='Restaurant App'/>
            <div className='container'>
                <div className='row'>
                    <div className='col-12'>
                        <h2 style={{textAlign: 'center'}}>Lista de Clientes</h2>
                        <ClienteList cliente={cliente} clientes={clientes} setClienteUpdated={setClienteUpdated}/>
                    </div>
                <div className='col-5'>
                    <h2 style={{textAlign: 'center'}}>Creación de Clientes</h2>
                    <ClienteFormulario cliente={cliente} setCliente={setCliente}/>
                </div>
                </div>
            </div>
        </Fragment>
    );
}
export default Cliente;