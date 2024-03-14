import React from 'react';
import ReactDOM from 'react-dom/client';
import './scss/index.scss';
import App from './App';
import { NextUIProvider } from "@nextui-org/react";
import "./index.css";
import { ContextProvider } from "./context/contextProvider";
import { ContextProductProvider } from './context/contextoProvider2';
import { ProductListProvider } from './context/callOrdenate/contextListProvider';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <NextUIProvider>
      <ContextProvider>
        <ContextProductProvider>
          <ProductListProvider>
            <App />
          </ProductListProvider>
        </ContextProductProvider>
      </ContextProvider>
    </NextUIProvider>
  </React.StrictMode>
);
