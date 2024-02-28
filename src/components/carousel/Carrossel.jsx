import React from 'react';
import { Carousel } from 'antd';
import aptoimg1 from '../../public/assets/aptoimg-1.jpg'
import aptoimg2 from '../../public/assets/aptoimg-2.jpg'
import aptoimg3 from '../../public/assets/aptoimg-3.jpg'
import aptoimg4 from '../../public/assets/aptoimg-4.jpg'
import styles from '../../styles';
  const Carrossel = () => (
    <div className='childrenDiv'>
    <Carousel autoplay >
      <div>
        <img src={aptoimg1}style={styles.contentStyle}></img>
      </div>
      <div>
        <img src={aptoimg2} style={styles.contentStyle}></img>
      </div>
      <div>
        <img src={aptoimg3} style={styles.contentStyle}></img>
      </div>
      <div>
        <img src={aptoimg4} style={styles.contentStyle}></img>
      </div>
    </Carousel>
    </div>
  );
  export default Carrossel;