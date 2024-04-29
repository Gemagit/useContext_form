import React from "react";
import { useState } from "react";


function Formulario() {
  
    const [nombre, setNombre] = useState('');
    const [email, setEmail] = useState('');
    const [urlFoto, setUrlFoto] = useState('');
    const [edad, setEdad] = useState('');
  
    const handleSubmit = (e) => {
      e.preventDefault();
      console.log("Nombre:", nombre);
      console.log("Email:", email);
      console.log("URL de la foto:", urlFoto);
      console.log("Edad:", edad);
    };
  
    const handleChangeNombre = (e) => {
      setNombre(e.target.value);
    };
  
    const handleChangeEmail = (e) => {
      setEmail(e.target.value);
    };
  
    const handleChangeUrlFoto = (e) => {
      setUrlFoto(e.target.value);
    };
  
    const handleChangeEdad = (e) => {
      setEdad(e.target.value);
    };


  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={nombre}
        onChange={handleChangeNombre}
        placeholder="Nombre"
      />
      <br />
      <input
        type="email"
        value={email}
        onChange={handleChangeEmail}
        placeholder="Email"
      />
      <br />
      <input
        type="text"
        value={urlFoto}
        onChange={handleChangeUrlFoto}
        placeholder="URL de la foto"
      />
      <br />
      <input
        type="number"
        value={edad}
        onChange={handleChangeEdad}
        placeholder="Edad"
      />
      <br />
      <button type="submit">Enviar</button>
    </form>
  );
}

export default Formulario;
