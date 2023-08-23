import React, {Fragment,} from "react"; // useState, useEffect
import Navbar from './Navbar'

function Cliente() {

    return (
        <Fragment>
            <Navbar brand='Restaurant App'/>
            {/* <div className='container'>
                <div className='row'>
                    <div className='col-7'>
                        <h2 style={{textAlign: 'center'}}>Lista de Facturas</h2>
                        <FacturaList factura={factura} facturas={facturas} setFacturaUpdated={setFacturaUpdated}/>
                    </div>
                <div className='col-5'>
                    <h2 style={{textAlign: 'center'}}>Creación de Facturas</h2>
                    <FacturaFormulario factura={factura} setFactura={setFactura}/>
                </div>
                </div>
            </div> */}
        </Fragment>
    );
}
export default Cliente;