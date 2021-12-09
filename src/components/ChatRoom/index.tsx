import { Container, Grid } from "@mui/material"
import React from "react"
import styled from "styled-components"

const ContainerFluid = styled(Container)`
  height: 100vh;
  padding: 0;
  margin: 0;

  &.MuiContainer-root {
    padding: 0 !important;
  }
`
const GridContainer = styled(Grid)`
  width: 100%;
  height: 100%;
  padding: 0;
  margin: 0;
`

const ChatRoom = () => {
  return (
    <ContainerFluid maxWidth={false}>
      <GridContainer container spacing={0}>
        <Grid item xs={3}>
          <div>room</div>
        </Grid>
        <Grid item xs={9}>
          <div>chat</div>
        </Grid>
      </GridContainer>
    </ContainerFluid>
  )
}

export default ChatRoom
