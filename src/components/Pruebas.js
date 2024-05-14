import React, { useState, useEffect } from 'react';
import axios from 'axios';
import CatResponses from './CatResponse';
// import CatResponses from './CatResponse';

function Signup() {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const apiUsuarios = 'http://localhost:8000/usuarios';

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(apiUsuarios);
        setData(response.data.usuarios);
        setLoading(false);
        console.log("data:")

        console.log(data)
        console.log("response:")

        console.log(response)
        
      } catch (error) {
        setError(error);
        setLoading(false);
      }
    };

    fetchData(); 
    console.log("data despues:")

    console.log(data);

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []); // El segundo argumento del useEffect indica que la función se ejecutará solo una vez al montar el componente



  if (loading) return <p>Cargando...</p>; // Mostrar un mensaje de carga mientras se realiza la solicitud

  else if (error) return <p>fail...</p>; // Mostrar un mensaje de error si la solicitud falla
//   else return <>{CatResponses.success("Adecuado")}</>

  return (
    <div>
    {CatResponses.success("Adecuado")}
      <h1>Usuarios</h1>
      {data && data.map(usuario => (
        <div key={usuario[0]}>
          <h2>ID: {usuario[0]}</h2>
          <p>Nombre: {usuario[1]}</p>
          <p>Contraseña: {usuario[2]}</p>
        </div>
      ))}
      
    </div>
  );
}

export default Signup;
