import React from 'react';
import styles from '../../styles';
const Tags = () => {

  return (
    <div className="childDiv" style={styles.cardPaiTag}>
    
      <span style={styles.tag} className="childDiv">MOBILIADO</span>
      
    
    <span style={styles.tag} className="childDiv">LAVANDERIA </span>
    
    
    <span style={styles.tag} id= "lastItem" className="childDiv">COZINHA AMERICANA </span>
    
          
    
    <span style={styles.tag} className="childDiv">MONITORADO POR CÂMERAS </span>
    
    </div>
  );
};

export default Tags;