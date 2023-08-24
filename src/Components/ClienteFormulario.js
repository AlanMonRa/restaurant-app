import React from "react";

const ClienteFormulario = ({cliente, setCliente}) => {

    const handleChange = e => {
        setCliente({
            ...cliente,
            [e.target.name]: e.target.value
        })
    }

    let {nombre, apellidos, rfc, direccion, zipcode, montototal, fecha, idfactura} = cliente

    const handleSumit = () => {
        zipcode = parseInt(zipcode, 10)
        montototal = parseInt(montototal, 10)
        idfactura = parseInt(idfactura, 10)
        //Validacion de los datos
        if (nombre === '' || apellidos === '' || rfc === '' || direccion === '' || zipcode <= 0 || montototal <= 0 || fecha === '' || idfactura <= 0) {
            alert('Todos los campos son obligatorios')
            return
        }

        //Consulta
        const requestInit = {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify(cliente)
        }
        fetch('http://127.0.0.1:5401/cliente', requestInit)
        .then(res => res.json())
        .then(res => console.log(res))
        

        // reiniciando state de la factura
        setCliente({
            nombre: '',
            apellidos: '',
            rfc: '',
            direccion: '',
            zipcode: 0,
            montototal: 0,
            fecha: '',
            idfactura: 0
        })
    }

    return(
        <form onSubmit={handleSumit}>
            <div className="mb-3">
                <label htmlFor="nombre" className="form-label">Nombre</label>
                <input value={nombre} name="nombre" onChange={handleChange} type="text" id="nombre" className="form-control"/>
            </div>
            <div className="mb-3">
                <label htmlFor="apellidos" className="form-label">Apellidos</label>
                <input value={apellidos} name="apellidos" onChange={handleChange} type="text" id="apellidos" className="form-control"/>
            </div>
            <div className="mb-3">
                <label htmlFor="rfc" className="form-label">RFC</label>
                <input value={rfc} name="rfc" onChange={handleChange} type="text" id="rfc" className="form-control"/>
            </div>
            <div className="mb-3">
                <label htmlFor="direccion" className="form-label">Dirección</label>
                <input value={direccion} name="direccion" onChange={handleChange} type="text" id="direccion" className="form-control"/>
            </div>
            <div className="mb-3">
                <label htmlFor="zipcode" className="form-label">Zip Code</label>
                <input value={zipcode} name="zipcode" onChange={handleChange} type="number" id="zipcode" className="form-control"/>
            </div>
            <div className="mb-3">
                <label htmlFor="montototal" className="form-label">Monto Total</label>
                <input value={montototal} name="montototal" onChange={handleChange} type="number" id="montototal" className="form-control"/>
            </div>
            <div className="mb-3">
                <label htmlFor="fecha" className="form-label">Fecha</label>
                <input value={fecha} name="fecha" onChange={handleChange} type="date" id="fecha" className="form-control"/>
            </div>
            <div className="mb-3">
                <label htmlFor="idfactura" className="form-label">ID Factura</label>
                <input value={idfactura} name="idfactura" onChange={handleChange} type="number" id="idfactura" className="form-control"/>
            </div>
            <button type="submit" className="btn btn-primary">Enviar</button>
        </form>
    );
}

export default ClienteFormulario;