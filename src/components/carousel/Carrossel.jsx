import React from 'react';
import { Carousel } from 'antd';
import styles from '../../styles';
  const Carrossel = () => (
    <div className='childrenDiv'>
    <Carousel autoplay >
      <div>
        <h3 style={styles.contentStyle}>1</h3>
      </div>
      <div>
        <h3 style={styles.contentStyle}>2</h3>
      </div>
      <div>
        <h3 style={styles.contentStyle}>3</h3>
      </div>
      <div>
        <h3 style={styles.contentStyle}>4</h3>
      </div>
    </Carousel>
    </div>
  );
  export default Carrossel;