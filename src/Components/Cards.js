import React from "react";

import { Grid } from '@mantine/core';

function Cards() {
  return (
    <>
    <Grid justify="space-around">
      <Grid.Col md={6} style={{maxWidth: 350}} sm={4} xs={4}> </Grid.Col>
      <Grid.Col md={6} style={{maxWidth: 350}} sm={4} xs={4}>  </Grid.Col>
      <Grid.Col md={6} style={{maxWidth: 350}} sm={4} xs={4}>  </Grid.Col>
      <Grid.Col md={6} style={{maxWidth: 350}} sm={4} xs={4}>  </Grid.Col>
    </Grid>;
    </>
  )
}

export default Cards