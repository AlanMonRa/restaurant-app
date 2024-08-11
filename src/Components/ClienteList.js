import React from "react";

const ClienteList = ({cliente, clientes, setClienteUpdated}) => {

    const hadleDelete = idcliente => {
        const requestInit = {
            method: 'DELETE'
        }
        fetch('http://127.0.0.1:5401/cliente/' + idcliente, requestInit)
        .then(res => res.text())
        .then(res => console.log(res))

        setClienteUpdated(true)
    }


    let {nombre, apellidos, rfc, direccion, zipcode, montototal, fecha, idfactura} = cliente

    const hadleUpdate = idcliente => {

        zipcode = parseInt(zipcode, 10)
        montototal = parseInt(montototal, 10)
        idfactura = parseInt(idfactura, 10)
        //Validacion de los datos
        if (nombre === '' || apellidos === '' || rfc === '' || direccion === '' || zipcode <= 0 || montototal <= 0 || fecha === '' || idfactura <= 0) {
            alert('Todos los campos son obligatorios')
            return
        }

        const requestInit = {
            method: 'PUT',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify(cliente)
        }
        fetch('http://127.0.0.1:5401/cliente/' + idcliente, requestInit)
        .then(res => res.text())
        .then(res => console.log(res))

        setClienteUpdated(true)
    }

    return (
        <table className="table">
            <thead>
                <tr>
                    <th>ID Cliente</th>
                    <th>Nombre</th>
                    <th>Apellidos</th>
                    <th>RFC</th>
                    <th>Dirección</th>
                    <th>Zip code</th>
                    <th>Monto Total</th>
                    <th>Fecha</th>
                    <th>ID Factura</th>
                </tr>
            </thead>
            <tbody>
                {clientes.map(cliente => (
                    <tr key={cliente.idcliente}>
                        <td>{cliente.idcliente}</td>
                        <td>{cliente.nombre}</td>
                        <td>{cliente.apellidos}</td>
                        <td>{cliente.rfc}</td>
                        <td>{cliente.direccion}</td>
                        <td>{cliente.zipcode}</td>
                        <td>{cliente.montototal}</td>
                        <td>{cliente.fecha}</td>
                        <td>{cliente.idfactura}</td>
                        <td>
                            <div className="mb-3">
                                <button onClick={() => hadleDelete(cliente.idcliente)} className="btn- btn-danger">Delete</button>
                            </div>
                            <div className="mb-3">
                                <button onClick={() => hadleUpdate(cliente.idcliente)} className="btn- btn-dark">Actualizar</button>
                            </div>
                        </td>
                    </tr>
                ))}
            </tbody>
        </table>
    )
}

export default ClienteList;