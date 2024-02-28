import { useState } from "react"

export default function AgregarProductos() {
   const [mensaje , setMensaje] = useState('')
   const handleData = (e) => {
      e.preventDefault();
      setMensaje('Cargando datos...');
      // el nombre del producto
      let nombreProducto = document.getElementById('input-1').value;
      document.getElementById('input-1').value ='';
      // el precio
      let precioProducto = document.getElementById('input-2').value;
      document.getElementById('input-2').value ='';
      // la cantidad
      let cantidadProducto = document.getElementById('input-3').value;
      document.getElementById('input-3').value ='';
      // su categoria
      let categoriaProducto = document.getElementById('input-4').value;
      document.getElementById('input-4').value ='';
      // el archivo
      let fileProducto = document.getElementById('input-5').value;
      document.getElementById('input-5').value ='';

      setTimeout(() => {
         setMensaje('');
      } , 1000)
   }
   return (
      <>
         <article>
            <form className="agregarProductos-section" onSubmit={handleData}>
               <input type="text" placeholder="Nombre del producto" id="input-1"/>
               <input type="number" placeholder="Precio del producto" id='input-2'/>
               <input type="number" placeholder="Cantidad en stock" id='input-3'/>
               <input type="text" placeholder="Categoria" id='input-4'/>
               <input type="file" id='input-5'/>
               <input type="submit" value='Confirmar'/>
            </form>
            <h3>{mensaje}</h3>
         </article>
      </>
   )
}