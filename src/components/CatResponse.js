import React from 'react';
import success from '../images/success.png'
import failed from '../images/failed.png'
import './CatResponse.css'; 


function CatResponse({status, message}) {
   let img = '';

  if (status === 'success') {
    img = success;
  } else if (status === 'failed') {
    img = failed;

  }

  return (

    <div className="cat-response-container">
      <span className="message">{message}</span>
      <img src={img} className="cat-image" alt="Result" />
    </div>
    
  );
}



export default CatResponse;