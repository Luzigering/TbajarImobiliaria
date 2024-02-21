import React from 'react';
import styles from '../../styles';
import time from "../../public/icons/time.webp";
import atencao from "../../public/icons/atencao.webp"
const InfosLocal = () => {

  return (
    <div className= 'cardMapWidth' style={styles.cardMap}>
    <iframe style={styles.map}
  
  frameborder="0" 
  referrerpolicy="no-referrer-when-downgrade"
  src="https://www.google.com/maps/embed/v1/place?key=AIzaSyBycXAD4qXPzaFqBxxwSJyq7pkj185tpXA&q=R. Caiapós, 90 - Piraporinha, Diadema - SP, 09951-520&center=-23.690889, -46.583891&zoom=15"
  >
  </iframe>
  <div style={{
  height: '24em'
  }}>
  <div style={styles.infoLocalText}>
    Rua Caiapós, 90- Piraporinha
  </div>
  <div style={styles.infoGeralText}>

  <div style={{
    display: 'flex',
    flexDirection: 'row',
    alignContent: 'center',
   width: '15em', 
   padding: '1%',
   flexWrap: 'nowrap'
  }}>
    <img style={styles.time} src={atencao}></img>
    <div style={{
    fontSize: '1.5rem',
    color: 'orange',
    margin: '1%'
  }}className='childDiv'> PREÇO ABAIXO DO MERCADO</div>
    </div>

  <div style={styles.infosLocal}> 
    <div 
    style={{
      display: 'flex',
      flexDirection: 'column'
    }}
    id='bold'>
    <img style={styles.timer} src={time}></img>
    1min
    </div>
    <div  style={styles.infoLocalText}>Terminal Piraporinha</div>  
  </div>

  <div style={styles.infosLocal}>
  <div 
  style={{
    display: 'flex',
    flexDirection: 'column'
  }}
  id='bold'>
    <img style={styles.timer} src={time}></img>
    1min
    
    </div>
    <div  style={styles.infoLocalText}>UBS Piraporinha</div>
    
  </div>
 
  <div style={styles.infosLocal}>
    <div style={{
      display: 'flex',
      flexDirection: 'column'
    }}
    id='bold'>
    <img style={styles.timer} src={time}></img>
    5min
    </div>
    <div style={styles.infoLocalText}>Hospital Piraporinha</div>
    
  </div>

  <div>
    <div>
    <img src=""></img>
    </div>
    Texto ao lado de imagem
  </div>
  </div>
  </div>
  <div style={styles.line}></div>
  </div>
  );
};

export default InfosLocal;