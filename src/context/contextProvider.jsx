import React from 'react';
import ContextSesion from './contextProduct';


export default function ContextProvider({children}) {
   return (
      <ContextSesion.Provider>
         {children}
      </ContextSesion.Provider>
   )
}