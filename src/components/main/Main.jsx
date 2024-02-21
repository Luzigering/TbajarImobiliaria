import React from 'react';
import InfosApto from '../infos-apto/InfosApto';
import Form from '../form/Form';

const Main = () => {
    return (
  <main>
  <InfosApto/>
  
  <div style={{
      width: '99vw',
      display: 'flex',
      justifyContent: 'flex-end'}}>
      <Form></Form>
    </div>
  </main>
);}

export default Main;
