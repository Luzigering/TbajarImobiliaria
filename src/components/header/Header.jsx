import React from 'react';
import logo from "../../public/assets/logo.png";
import whatsapp from "../../public/icons/whatsapp.png";

import styles from '../../styles';
const Header = () => {
  const handleClick = () => {
    window.open('https://wa.me//5511994909049?text=Tenho%20interesse%20no%20imóvel%20do%20terminal', '_blank');
  ;}
  return (
    <header style={{        
    position: 'fixed',
    top: '0',
    left: '0',
    right: '0',
    zIndex: '10',}}>
      <div style={styles.header}>
      <div style={styles.areaTitle}>
      <img src={logo} style={styles.logo} alt='imagens do apartamento ao lado do terminal'></img>         
      <div className="none" style={styles.title}>
      TABAJAR IMOBILIARIA
      </div>
      </div>
      <div style={{
              height: '10vh',
              width: '15vw',
      }}>
      <div style={styles.contactUs}>
        <div>
        <img onClick={handleClick} src={whatsapp} style={styles.icons}></img>
        </div>
<div id='bold' style={{
  display: 'flex',
  flexWrap: 'nowrap',
  fontSize: '1.5rem',
  fontWeight: 'inherit',


}}> <div className='none'>Agende já sua visita!</div></div>


      </div>
      </div>
      </div>
    </header>
  );
};

export default Header;

