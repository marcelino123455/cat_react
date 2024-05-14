import React, { useState } from 'react';
import axios from 'axios';
import './signupStyle.css';
import CatResponse from './CatResponse';
import { Button, Checkbox, Form, Input } from 'antd';

function App() {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [success, setSuccess] = useState(false); // Agregamos estado para manejar el éxito

  const onFinish = async (values) => {
    console.log('Obteniendo data:', values);
    setLoading(true); // Mostrar mensaje de carga mientras se realiza la solicitud
    try {
      const Apiurl = 'http://localhost:8000/usuarios';
      await axios.post(Apiurl, {
        nombre: values.nombre,
        contraseña: values.contraseña
      });
      console.log("Bien hecho ya tenemos tus datos");
      setSuccess(true); // Establecer éxito como verdadero
      setLoading(false); // Finaliza la carga después de que se completa la solicitud
      setError(false);
      setTimeout(() => {
        setSuccess(false);
      }, 5000);
    } catch (error) {
      setError(true);
      setSuccess(false);
      setLoading(false);
      setTimeout(() => {
        setError(false);
      }, 5000); // Ocultar el mensaje de error después de 5 segundos
      console.error('Error en la solicitud:', error);
    }
  };

  const onFinishFailed = (errorInfo) => {
  setError(true);
  setSuccess(false); // Asegúrate de que el éxito se establezca en falso en caso de fallo
  setLoading(false);
  console.log('Failed:', errorInfo);
};

  return (
    <>
      {loading && <p>Cargando...</p>}
      {success &&<  CatResponse status={"success"} message={"Correcto"}></CatResponse>}
      {/* {error && < CatResponse status={"failed"} message={"Mal"}></CatResponse>} */}

      {error && <CatResponse key="error" status={"failed"} message={"Mal"}></CatResponse>}

      <Form
        name="basic"
        labelCol={{
          span: 8,
        }}
        wrapperCol={{
          span: 16,
        }}
        className="signupStyle"
        initialValues={{
          remember: true,
        }}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
        autoComplete="off"
      >
        <Form.Item
          label="Nombre"
          name="nombre"
          rules={[
            {
              required: true,
              message: 'Por favor ingresa tu nombre!',
            },
          ]}
        >
          <Input className="input-input" />
        </Form.Item>

        <Form.Item
          label="Contraseña"
          name="contraseña"
          rules={[
            {
              required: true,
              message: 'Por favor ingresa tu contraseña!',
            },
          ]}
        >
          <Input.Password className="password-input" />
        </Form.Item>

        <Form.Item
          name="remember"
          valuePropName="checked"
          wrapperCol={{
            offset: 8,
            span: 16,
          }}
        >
          <Checkbox >Recordarme</Checkbox>
        </Form.Item>

        <Form.Item
          wrapperCol={{
            offset: 8,
            span: 16,
          }}
        >
          <Button type="primary" htmlType="submit" id="button-send" >
            Registrarse
          </Button>
        </Form.Item>
      </Form>
    </>
  );
}

export default App;
