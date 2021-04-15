import React from 'react'
import Menu from './components/Menu'
import Buttons from './components/Buttons'

import styled from 'styled-components'

const Container = styled.div`
  display: grid;
  grid-template-columns: 250px 1fr;
  min-height: 100vh;
`

function App() {
  return (
    <Container>
      <Menu /> <Buttons />
    </Container>
  );
}

export default App;
