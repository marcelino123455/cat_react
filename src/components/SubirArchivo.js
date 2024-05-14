import React, { useState } from 'react';
import AWS from 'aws-sdk';

function App() {
  const [objectData, setObjectData] = useState(null);
  const [error, setError] = useState(null);

  // Configuración de AWS SDK
  AWS.config.update({
    credentials: {
      accessKeyId: 'ASIAQWSALMNIQZH645HN',
      secretAccessKey: 'GcHE1FSUne/1mszHgNvn7ylEt/WdYdqwqtUsy+B/'
    }
  });

  // Creación de un nuevo cliente de S3
  const s3 = new AWS.S3({
    region: 'us-east-1'
  });

  // Función para realizar una operación GET en un objeto de S3
  const getObject = async () => {
    try {
      const params = {
        Bucket: 'NOMBRE_DE_TU_BUCKET',
        Key: 'RUTA_DEL_OBJETO_EN_EL_BUCKET'
      };
      const data = await s3.getObject(params).promise();
      setObjectData(data.Body.toString('utf-8'));
      setError(null);
    } catch (err) {
      setError('Error al obtener el objeto de S3');
    }
  };

  // Función para realizar una operación PUT en un objeto de S3
  const putObject = async (file) => {
    try {
      const params = {
        Bucket: 'tuki67',
        Key: 'imágenes/' + file.name,
        Body: file
      };
      await s3.putObject(params).promise();
      setError(null);
    } catch (err) {
      setError('Error al subir el objeto a S3');
    }
  };

  // Manejar el cambio de archivo de entrada
  const handleFileChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      putObject(file);
    }
  };

  return (
    <div>
      <h1>Holis</h1>
      <button onClick={getObject}>Obtener Objeto de S3</button>
      <input type="file" onChange={handleFileChange} />
      {objectData && <p>{objectData}</p>}
      {error && <p style={{ color: 'red' }}>{error}</p>}
    </div>
  );
}

export default App;
