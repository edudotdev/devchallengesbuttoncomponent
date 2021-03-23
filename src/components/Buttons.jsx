import React from 'react';

import styled from 'styled-components'

const Container = styled.div`
  height: 100%;
  width: 100%;
  padding: 50px 80px;

  h2 {
    font: 500 24px Poppins;
  }
`

const Buttons = () => {
  return ( 
    <Container>
      <h2>Buttons</h2>

    </Container>
   );
}

export default Buttons;