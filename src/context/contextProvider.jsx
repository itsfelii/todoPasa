import React, { useContext } from 'react';
import UsuarioConectado from './contextUser';
import { useState } from 'react';

export function ContextProvider({ children }) {
   let usuario = {
      "nombre": "",
      "email": ""
   }
   const [user, setUser] = useState(usuario);
   const updateUser = (data) => {
      setUser(data)
   }
   return (
      <UsuarioConectado.Provider value={{ user, updateUser }}>
         {children}
      </UsuarioConectado.Provider>
   )
}

export const useUser = () => useContext(UsuarioConectado);