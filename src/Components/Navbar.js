import React from 'react';
import App from './Factura';
import Cliente from './Cliente';

const Navbar = ({brand}) => {
    return (
        <nav className="navbar navbar-dark bg-dark">
            <div className="container">
                <a href="#!" className="navbar-brand">{brand}</a>
            </div>
            <button onClick={() => <App></App>} >Facturas</button>
            <button onClick={() => <Cliente></Cliente>} >Cliente</button>
        </nav>
    );
}

export default Navbar;