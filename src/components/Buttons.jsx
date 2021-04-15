import React from 'react';
import Button from './Button'

import styled from 'styled-components'

const Container = styled.div`
  height: 100%;
  padding: 50px 80px;

  h2 {
    font: 500 24px Poppins;
  }
`

const WrapperBtn = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 35px;

  
`

const WrapperBtnFlex = styled.div`
  width: ${props => props.width};
  display: flex;
  justify-content: space-between;


`

const Code = styled.p`
  font: normal 12px/12px 'Ubuntu Mono';
`

const Buttons = () => {
  return ( 
    <Container>
      <h2>Buttons</h2>
      <WrapperBtn>
        <Code>{'<Button />'}</Code>
        <Button>Default</Button>
      </WrapperBtn>

      <WrapperBtn>
        <Code>{'<Button variant=”outline” />'}</Code>
        <Button variant="outline" color="primary" >Default</Button>
      </WrapperBtn>

      <WrapperBtn>
        <Code>{'<Button variant=”text” />'}</Code>
        <Button variant="text" color="primary" >Default</Button>
      </WrapperBtn>

      <WrapperBtn>
        <Code>{' <Button disableShadow /> '}</Code>
        <Button color='primary' disabledShadow>Default</Button>
      </WrapperBtn>

      <WrapperBtn>
        <Code>{'<Button disabled />'}</Code>
        <Button disabled color='danger'    variant="text">Default</Button>
      </WrapperBtn>

      <WrapperBtnFlex width="600px">
        <WrapperBtn>
          <Code>{'<Button startIcon=”local_grocery_store” />'}</Code>
          <Button startIcon={'local_grocery_store'} color='primary'>Default</Button>
        </WrapperBtn>
        <WrapperBtn>
          <Code>{'<Button endIcon=”local_grocery_store” />'}</Code>
          <Button endIcon={'local_grocery_store'} color='primary' >Default</Button>
        </WrapperBtn>
      </WrapperBtnFlex>

      <WrapperBtnFlex width="550px">
        <WrapperBtn>
          <Code>{'<Button size=”sm” />'}</Code>
          <Button size='sm' color='primary'>Default</Button>
        </WrapperBtn>
        <WrapperBtn>
          <Code>{'<Button size=”md” />'}</Code>
          <Button size='md' color='primary'>Default</Button>
        </WrapperBtn>
        <WrapperBtn>
          <Code>{'<Button size=”lg” />'}</Code>
          <Button size='lg' color='primary'>Default</Button>
        </WrapperBtn>
      </WrapperBtnFlex>

      <WrapperBtnFlex width="800px">
        <WrapperBtn>
          <Code>{'<Button color=”default” />'}</Code>
          <Button color='default'>Default</Button>
        </WrapperBtn>
        <WrapperBtn>
          <Code>{'<Button color="primary" />'}</Code>
          <Button color='primary'>Primary</Button>
        </WrapperBtn>
        <WrapperBtn>
          <Code>{'<Button color="secondary" />'}</Code>
          <Button color='secondary'>Secondary</Button>
        </WrapperBtn>
        <WrapperBtn>
          <Code>{'<Button color=”danger” />'}</Code>
          <Button color='danger'>Danger</Button>
        </WrapperBtn>
      </WrapperBtnFlex>
      
    </Container>
   );
}

export default Buttons;