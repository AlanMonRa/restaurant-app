import React from 'react';
import { Link, Routes, Route } from 'react-router-dom';
import Cliente from './Cliente';
import Factura from './Factura';
export default function Navbar() {
    return (
        <>
        <nav style={{ padding: '10px', backgroundColor: '#f0f0f0' }}>
            <h5>Restaurant App</h5>
            <Link to="/" style={{ marginRight: '10px' }}>Inicio</Link>
            <Link to="/cliente" style={{ marginRight: '10px' }}>Cliente</Link>
            <Link to="/factura">Factura</Link>
        </nav>

        <Routes>
            <Route path="/" element={<h1>Bienvenido a la App</h1>} />
            <Route path="/cliente" element={<Cliente />} />
            <Route path="/factura" element={<Factura />} />
        </Routes>
        </>
    );
}
