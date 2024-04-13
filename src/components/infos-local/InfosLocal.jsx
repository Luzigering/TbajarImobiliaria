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
    alignItems: 'center', 
   width: '100%', 
   padding: '1px',
   
   
  }}>
    <img style={{height: '1.5em', margin: '1px', width: '1.5em'}} src={atencao}></img>
    <div style={{
    fontSize: '1.5rem',
    color: 'orange',
     
    flexDirection: 'row',
  }}> ÁREA DE ALTA PROCURA</div>
    </div>

  <div style={styles.infosLocal}> 
    <div 
    style={{
      display: 'flex',
      flexDirection: 'column',
      height: '50%'
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
    flexDirection: 'column',
    height: '50%'
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
      flexDirection: 'column',
      height: '50%'
    }}
    id='bold'>
    <img style={styles.timer} src={time}></img>
    5min
    </div>
    <div style={styles.infoLocalText}>Hospital Piraporinha</div>
    
  </div>

  <div>
   
  </div>
  </div>
  </div>
  <div style={styles.line} className='none'></div>
  </div>
  );
};

export default InfosLocal;