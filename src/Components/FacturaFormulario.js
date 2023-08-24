import React from "react";

const FacturaFormulario = ({factura, setFactura}) => {

    const handleChange = e => {
        setFactura({
            ...factura,
            [e.target.name]: e.target.value
        })
    }

    let {fecha, idmesero, mesa, subtotal, total} = factura

    const handleSumit = () => {
        idmesero = parseInt(idmesero, 10)
        mesa = parseInt(mesa, 10)
        subtotal = parseInt(subtotal, 10)
        total = parseInt(total, 10)
        //Validacion de los datos
        if (fecha === '' || idmesero <= 0 || mesa <= 0 || subtotal <= 0 || total <= 0) {
            alert('Todos los campos son obligatorios')
            return
        }

        //Consulta
        const requestInit = {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify(factura)
        }
        fetch('http://127.0.0.1:5401/factura', requestInit)
        .then(res => res.json())
        .then(res => console.log(res))
        

        // reiniciando state de la factura
        setFactura({
            fecha: '',
            idmesero: 0,
            mesa: 0,
            subtotal: 0,
            total: 0
        })
    }

    return(
        <form onSubmit={handleSumit}>
            <div className="mb-3">
                <label htmlFor="fecha" className="form-label">Fecha</label>
                <input value={fecha} name="fecha" onChange={handleChange} type="date" id="fecha" className="form-control"/>
            </div>
            <div className="mb-3">
                <label htmlFor="idmesero" className="form-label">ID Mesero</label>
                <input value={idmesero} name="idmesero" onChange={handleChange} type="number" id="idmesero" className="form-control"/>
            </div>
            <div className="mb-3">
                <label htmlFor="mesa" className="form-label">Mesa</label>
                <input value={mesa} name="mesa" onChange={handleChange} type="number" id="mesa" className="form-control"/>
            </div>
            <div className="mb-3">
                <label htmlFor="subtotal" className="form-label">Subtotal</label>
                <input value={subtotal} name="subtotal" onChange={handleChange} type="number" id="subtotal" className="form-control"/>
            </div>
            <div className="mb-3">
                <label htmlFor="total" className="form-label">Total</label>
                <input value={total} name="total" onChange={handleChange} type="number" id="total" className="form-control"/>
            </div>
            <button type="submit" className="btn btn-primary">Enviar</button>
        </form>
    );
}

export default FacturaFormulario;