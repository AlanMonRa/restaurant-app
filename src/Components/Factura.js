import React, {Fragment, useState, useEffect} from 'react';
import Navbar from './Navbar'
import FacturaList from './FacturaList';
import FacturaFormulario from './FacturaFormulario';


function Factura() {

  const [factura, setFactura] = useState({
    fecha: '',
    idmesero: 0,
    mesa: 0,
    subtotal: 0,
    total: 0
  })

  const [facturas, setFacturas] = useState([])

  const [facturaUpdated, setFacturaUpdated] = useState(false)

  useEffect(() => {
    const getFacturas = () => {
      fetch('http://127.0.0.1:5401/factura')
      .then(res => res.json())
      .then(res => setFacturas(res))
    }
    getFacturas()
    setFacturaUpdated(false)
  }, [facturaUpdated])

  return (
    <Fragment>
      <Navbar brand='Restaurant App'/>
      <div className='container'>
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
      </div>
    </Fragment>
  );
}

export default Factura;
