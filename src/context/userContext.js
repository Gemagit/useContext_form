import {createContext, useContext} from 'react';

// Crear el contexto
const UserContext = createContext();

// Función personalizada hook para utilizar el contexto del usuario
const useUserContext = () => useContext(UserContext);

export { UserContext, useUserContext };