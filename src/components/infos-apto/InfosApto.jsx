import { Row } from 'antd';
import React from 'react';
import InfosLocal from '../infos-local/InfosLocal';
import styles from '../../styles';
import Carrossel from '../carousel/Carrossel';
import preco from '../../public/icons/preco.png';
import Tags from '../tags/Tags'
const InfosApto = () => {
  return (
    
    <div style={styles.container}>
    <Row id='cardApto'> 
    <div>
    <div style={{
    display: 'flex',
    justifyContent: 'space-around',
    width: '99vw',

  }}>
      <div className='cardAptoWidth' style={styles.cardApto}>
        <div>
    <Carrossel />
    
  <div  style={styles.Card1}>
    <div style={{
      display: 'flex',
      flexDirection: 'column',
    }}>
      <div style={{
      zIndex: '10'
    }}>
  <div style={{fontSize: '4em', 
  marginLeft: '1%',
  color:'#3A8903', 
  fontWeight: 'bold',
  overflow: 'hidden',
 }}>R$1890</div>
  <div style={styles.infosLocal}>
    <div style={{
      display: 'flex',
      flexDirection: 'row',
      flexWrap: 'nowrap',
      marginLeft: '2em',
      
    }}>
      <div style={{
    width: '20em',
    display: 'flex',
    flexDirection: 'row',
    alignContent: 'center',
    padding: '1%',
    
  }}>
  <img style={styles.time} src={preco}></img>
  
  <div style={{
    margin: '1%',
    fontSize: '1.5rem',
    color: 'green',
  }}className='childDiv'> PREÇO ABAIXO DO MERCADO</div>
  </div>
  </div>
  </div>

  </div>
  
  </div>
  <Tags />
 

  </div>
  <div className='scroll' style={{
    fontSize: '1.5rem',
    margin: '1%',
    textAlign: 'justify'
  }}>
Modelo moderno: design clean e elegante, com ambientes integrados e ótima iluminação natural.
Semi-mobiliado com design moderinista: móveis de alta qualidade e bom gosto, prontos para você se mudar!
2 quartos: perfeitos para relaxar e ter privacidade.
Cozinha americana: integrada à sala, ideal para momentos de convívio.
Área de serviço: prática e funcional.
</div>
  </div>

  </div>
<div className='cardMapWidth'>
  <InfosLocal />

  </div>
  </div>
  </div>

  
  </Row>

</div>
  );
};

export default InfosApto;