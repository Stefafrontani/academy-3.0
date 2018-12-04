import React from 'react';

const Location = () => {
  return (
    <div>
      <input type="text" id="input-location" list="json-datalist" placeholder=" Location..." />
      <datalist id="json-datalist">
        <option> Tucumán </option>
        <option> Buenos Aires </option>
        <option> CABA </option>
        <option> Cordoba </option>
        <option> La Pampa </option>
        <option> Mendoza </option>
        <option> Jujuy </option>
        <option> Neuquén </option>
        <option> Salta </option>
        <option> Misiones </option>
        <option> Entre Rios </option>
      </datalist>
    </div>
  );
}

export default Location;