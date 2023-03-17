import React, {useState} from "react";
import ArticleCard from './Card'
import { Grid } from '@mantine/core';
import ArticleCardFooter from './Card';
import { GithubIcon } from "@mantine/ds";
const projectsData = require('../Projects.json');







function Cards() {


  return (




    <>
    <Grid justify="space-around">
      <Grid.Col md={6} style={{maxWidth: 350}} sm={4} xs={4}> 
      <ArticleCardFooter 
      title={projectsData[0].name}
      category= {projectsData[0].tech} 
      image={projectsData[0].img}
      footer={"yes"}
      author={projectsData[0].details}
      />
      </Grid.Col>
      <Grid.Col md={6} style={{maxWidth: 350}} sm={4} xs={4}>  
      
      </Grid.Col>
      <Grid.Col md={6} style={{maxWidth: 350}} sm={4} xs={4}>  </Grid.Col>
      <Grid.Col md={6} style={{maxWidth: 350}} sm={4} xs={4}>  </Grid.Col>
    </Grid>;
    </>
  )
}

export default Cards