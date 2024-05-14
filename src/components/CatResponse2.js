import React, { useState, useEffect } from 'react';
import success from '../images/success.png';
import failed from '../images/failed.png';
import './CatResponse.css'; 

function CatResponse({ status, message }) {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    if (status) {
      setIsVisible(true);

      const timeout = setTimeout(() => {
        setIsVisible(false);
      }, 3000);

      return () => clearTimeout(timeout);
    }
  }, [status]);

  let img = status === 'success' ? success : failed;

  return isVisible ? (
    <div className={`cat-response-container ${status}`}>
      <span className="message">{message}</span>
      <img src={img} className="cat-image" alt="Result" />
    </div>
  ) : null;
}

export default CatResponse;
