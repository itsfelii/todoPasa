import React from 'react';
import ReactDOM from 'react-dom/client';
import './scss/index.scss';
import App from './App';
import { NextUIProvider } from "@nextui-org/react";
import "./index.css";
import { ContextProvider } from "./context/contextProvider";
import { ContextProductProvider } from './context/contextoProvider2';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <NextUIProvider>
      <ContextProvider>
        <ContextProductProvider>
          <App />
        </ContextProductProvider>
      </ContextProvider>
    </NextUIProvider>
  </React.StrictMode>
);
