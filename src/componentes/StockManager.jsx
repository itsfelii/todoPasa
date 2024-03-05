import { useState } from 'react';
import { Button } from "@nextui-org/react";
import axios from 'axios';

export default function StockManager() {
   const [open, setOpen] = useState(false);

   const [mensaje, setMensaje] = useState('')
   const crearProductos = async (e) => {
      e.preventDefault();
      setMensaje('Cargando datos...');
      // el nombre del producto

      let nombreProducto = document.getElementById('input-1').value;
      document.getElementById('input-1').value = '';

      // el precio

      let precioProducto = document.getElementById('input-2').value;
      document.getElementById('input-2').value = '';

      // la cantidad

      let cantidadProducto = document.getElementById('input-3').value;
      document.getElementById('input-3').value = '';

      // su categoria

      let categoriaProducto = document.getElementById('input-4').value;
      document.getElementById('input-4').value = '';

      // el archivo

      // crea la imagen 
      let fileProducto = document.getElementById('input-5').files[0];
      document.getElementById('input-5').value = '';

      const formData = new FormData();
      formData.append('file', fileProducto)

      try {
         let src = '';
         const res = await axios.post("http://localhost:5000/api/products/create/img", formData)

         if (res.data["message"] == "Archivo subido correctamente") src = res.data["src"];

         // crea el producto
         axios.post("http://localhost:5000/api/products/create", {
            "nombre": nombreProducto,
            "precio": precioProducto,
            "stock": cantidadProducto,
            "categoria_id": categoriaProducto,
            "src": src
         })
            .then(res => console.log(res.data));


      } catch (e) {
         console.log(e);
      }
      setTimeout(() => {
         setMensaje('');
      }, 1000)
   }
   // llamado al backend por los productos
   const llamadoProductos = () => {
      let respuesta;
      fetch("http://localhost:5000/api/products")
         .then((res) => res.json())
         .then((data) => console.log(data))
         .catch((e) => console.log(e))
   }

   return (
      <>
         <section className='stockManager-section'>
            <div className='stockManager-container'>
               <div className='stockManager__admin-panel'>
                  <Button style={{
                     'border-color': '#fff',
                     'width': '100px',
                     'height': '70px',
                     'font-size': '20px',
                     'color': '#fff'
                  }} variant="bordered" onClick={llamadoProductos}>
                     Ver productos
                  </Button>
                  <div className='stockmanager__admin-panel-img-container'>
                     <h3>Stock Manager</h3>
                     <img src={require('./../assets/logo/logo.jpg')} alt="hola" />
                  </div>
                  <Button style={{
                     'border-color': '#fff',
                     'width': '100px',
                     'height': '70px',
                     'font-size': '20px',
                     'color': '#fff'
                  }} variant="bordered" onClick={() => setOpen(!open)}>
                     Agregar Productos
                  </Button>
               </div>
               {
                  open && (
                     <article>
                        <form className="agregarProductos-section" onSubmit={crearProductos}>
                           <input type="text" placeholder="Nombre del producto" id="input-1" />
                           <input type="number" placeholder="Precio del producto" id='input-2' />
                           <input type="number" placeholder="Cantidad en stock" id='input-3' />
                           <input type="text" placeholder="Categoria" id='input-4' />
                           <input type="file" id='input-5' />
                           <input type="submit" value='Confirmar' />
                        </form>
                        <h3>{mensaje}</h3>
                     </article>
                  )
               }
            </div>
         </section>
      </>
   )
}