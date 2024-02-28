import { useState } from 'react';
import AgregarProductos from './secondary-components/AgregarProductos';

export default function StockManager() {
   const [open , setOpen] = useState(false);
   return (
      <>
      <section className='stockManager-section'> 
         <div className='stockManager-container'>
            <div className='stockManager__admin-panel'>
               <div className='stockManager__admin-panel-productos'>

               </div>
               <div className='stockmanager__admin-panel-img-container'>
                <h3>Stock Manager</h3>
                <img src={require('./../assets/logo/logo.jpg')} alt="hola" />
               </div>
               <button className='stockManager__admin-panel-agregar-productos' onClick={() => setOpen(!open)}>
                  {open ? 'Confirmar' : 'Agregar Productos'}
               </button>
            </div>
            {
               open && (<AgregarProductos />)
            }
         </div>
      </section>
      </>
   )
}