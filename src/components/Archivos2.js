import React, { useState } from 'react';
import { v2 as cloudinary } from 'cloudinary';

function Archivos2() {
  // No necesitas importar cloudinary con require, ya que lo estás importando al principio
  // de la función como v2
  const [image, setImage] = useState(null); // Estado para almacenar la imagen seleccionada

  const handleImageUpload = () => {
    // Verifica si se ha seleccionado una imagen
    if (image) {
      // Subir la imagen a Cloudinary
      cloudinary.uploader.upload(image, { folder: 'nombre_de_la_carpeta' })
        .then(result => console.log(result))
        .catch(error => console.error(error));
    } else {
      console.error('No se ha seleccionado ninguna imagen');
    }
  };

  const handleImageChange = (event) => {
    // Manejar el cambio de la imagen seleccionada
    const selectedImage = event.target.files[0];
    setImage(selectedImage);
  };

  return (
    <div>
      <input type="file" onChange={handleImageChange} />
      <button onClick={handleImageUpload}>Subir Imagen</button>
    </div>
  );
}

export default Archivos2;
