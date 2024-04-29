import React from "react";
import { UserContext} from "../../../context/userContext";
import {useState} from 'react';

const Head = () => {
 
  const [email,setEmail]= useState('');

  // Función para actualizar el correo electrónico
  const updateUserEmail = (newEmail) => {
    setEmail(newEmail);
  };

 // Envolver el componente hijo con el contexto y pasar los valores y funciones necesarias
 return (
  <UserContext.Provider value={{ email, updateUserEmail }}>
    {/* Renderizar el contenido del componente */}
    {/* Por ejemplo, puedes renderizar el correo electrónico en la cabeza de la página */}
    <header>
      <p className="usermail">User Email: {email}</p>
    </header>
  </UserContext.Provider>
);
};

export default Head;
