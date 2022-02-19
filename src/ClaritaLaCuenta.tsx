import { useState } from 'react';
import Forms from './Components/Forms';
import Nav from './Components/Nav';
import s from './style/ClaritaLaCuenta.module.css';
function ClaritaLaCuenta() {
  return (
    <div className={s.containerClaritaLaCuenta}>
      <Nav />
      <Forms />
    </div>
  );
}

export default ClaritaLaCuenta;
