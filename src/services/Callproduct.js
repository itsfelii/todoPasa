
export const fetchProduct = async (nombreProducto) => {
   // llama a el servidor para que le devuelva la imagen en formato blob y le crea la url que es lo que va a retornar
   let imageUrl; // creo la variable donde se va a almacenar la url
   // la llamada al servidor
   await fetch('http://localhost:5000/api/products/getimg', {
      method: 'POST', // le enviamos un nombre y el servidor lo busca 
      headers: {
         'Content-Type': 'application/json'
      },
      body: JSON.stringify({
         nombre: nombreProducto // nombre del producto del que queremos traer su imagen
      })
   })
      .then(response => {
         if (!response.ok) { // validacion para asegurar que este todo ok 
            throw new Error('Error al obtener la imagen');
         }
         return response.blob(); // Obtener la imagen como un blob
      })
      .then(imageBlob => {
         imageUrl = URL.createObjectURL(imageBlob); // Convertir el blob en una URL de objeto
      })
      .catch(error => {
         console.error('Error:', error);
      });
   return imageUrl;
}