import React from 'react';

import styled from 'styled-components'

const Container = styled.div`
  background:#FAFBFD;

  display: grid;
  grid-template-rows: 120px 260px;
  gap: 100px;

  padding-left:55px;
`

const Logo = styled.div`
  display: flex;
  align-items: center;

  font: 600 14px Poppins;
  
  span {
    color: #F7542E;
  }
`

const Nav = styled.nav`
  display: grid;
  gap: 12px;

  span {
    font: 500  14px/33px "Noto Sans JP";
    color: #9E9E9E;
  }

  .active {font-weight: 700; color: #090F31;}
`

const Menu = () => {
  return ( 
    <Container>
      <Logo><p><span>Dev</span>challenges.com</p></Logo>

      <Nav>
          <span>Colors</span>
          <span>Typography</span>
          <span>Spaces</span>
          <span className="active">Buttons</span>
          <span>Inputs</span>
          <span>Grid</span>
      </Nav>
    </Container>
   );
}
 
export default Menu;