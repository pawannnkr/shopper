import React from 'react';
import './Breadcrum.css';
import arrow_icon from '../Assets/breadcrum_arrow.png';

const Breadcrum = ({ category, productName }) => {
  return (
    <div className='breadcrum'>
      Home <img src={arrow_icon} alt='' /> 
      SHOP <img src={arrow_icon} alt='' /> 
      {category} <img src={arrow_icon} alt='' /> 
      {productName}
    </div>
  );
};

export default Breadcrum;
