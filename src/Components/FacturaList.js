import React from "react";

const FacturaList = ({factura, facturas, setFacturaUpdated}) => {

    const hadleDelete = idfactura => {
        const requestInit = {
            method: 'DELETE'
        }
        fetch('http://127.0.0.1:5401/factura/' + idfactura, requestInit)
        .then(res => res.text())
        .then(res => console.log(res))

        setFacturaUpdated(true)
    }


    let {fecha, idmesero, mesa, subtotal, total} = factura

    const hadleUpdate = idfactura => {

        idmesero = parseInt(idmesero, 10)
        mesa = parseInt(mesa, 10)
        subtotal = parseInt(subtotal, 10)
        total = parseInt(total, 10)
        //Validacion de los datos
        if (fecha === '' || idmesero <= 0 || mesa <= 0 || subtotal <= 0 || total <= 0) {
            alert('Todos los campos son obligatorios')
            return
        }

        const requestInit = {
            method: 'PUT',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify(factura)
        }
        fetch('http://127.0.0.1:5401/factura/' + idfactura, requestInit)
        .then(res => res.text())
        .then(res => console.log(res))

        setFacturaUpdated(true)
    }

    return (
        <table className="table">
            <thead>
                <tr>
                    <th>ID</th>
                    <th>Fecha</th>
                    <th>Id Mesero</th>
                    <th>Mesa</th>
                    <th>Subtotal</th>
                    <th>Total</th>
                    <th>Acciones</th>
                </tr>
            </thead>
            <tbody>
                {facturas.map(factura => (
                    <tr key={factura.idfactura}>
                        <td>{factura.idfactura}</td>
                        <td>{factura.fecha}</td>
                        <td>{factura.idmesero}</td>
                        <td>{factura.mesa}</td>
                        <td>{factura.subtotal}</td>
                        <td>{factura.total}</td>
                        <td>
                            <div className="mb-3">
                                <button onClick={() => hadleDelete(factura.idfactura)} className="btn- btn-danger">Delete</button>
                            </div>
                            <div className="mb-3">
                                <button onClick={() => hadleUpdate(factura.idfactura)} className="btn- btn-dark">Actualizar</button>
                            </div>
                        </td>
                    </tr>
                ))}
            </tbody>
        </table>
    )
}

export default FacturaList;