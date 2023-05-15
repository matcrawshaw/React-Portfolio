import {
  createStyles,
  Container,
  rem,
  useMantineTheme,
  Avatar,
  Button
} from '@mantine/core';
import { IconBrandGithub, IconBrandLinkedin } from '@tabler/icons-react';
import "../Fonts/Jaldi-Bold.ttf";
import headphoto from '../Components/PortfolioPhoto1.jpg'
import React from 'react';

import { Link } from "react-router-dom";
const useStyles = createStyles((theme) => ({

  root: {
    position: "relative",
    // background: "#1A1B1E",
    height: "70dvh",
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    paddingBottom: `calc(${theme.spacing.xl} * 3)`,
  },

  inner: {
    display: 'flex',
    justifyContent: 'space-between',

    [theme.fn.smallerThan('md')]: {
      flexDirection: 'column',
    },
  },

  image: {
    [theme.fn.smallerThan('md')]: {
      display: 'none',
    },
  },

  content: {
    paddingTop: `calc(${theme.spacing.xl} * 2)`,
    paddingBottom: `calc(${theme.spacing.xl} * 2)`,
    marginRight: `calc(${theme.spacing.xl} * 3)`,

    [theme.fn.smallerThan('md')]: {
      marginRight: 0,
    },
  },

  title: {
    color: theme.white,
    fontFamily: `Greycliff CF, ${theme.fontFamily}`,
    fontWeight: 900,
    lineHeight: 1.05,
    maxWidth: rem(500),
    fontSize: rem(48),

    [theme.fn.smallerThan('md')]: {
      maxWidth: '100%',
      fontSize: rem(34),
      lineHeight: 1.15,
    },
  },

  description: {
    color: theme.white,
    opacity: 0.75,
    maxWidth: rem(500),

    [theme.fn.smallerThan('md')]: {
      maxWidth: '100%',
    },
  },

  control: {
    paddingLeft: rem(50),
    paddingRight: rem(50),
    fontFamily: `Greycliff CF, ${theme.fontFamily}`,
    fontSize: rem(22),

    [theme.fn.smallerThan('md')]: {
      width: '100%',
    },
  },
}));

function HomeJumbotron() {
  const { classes } = useStyles();
  const theme = useMantineTheme();
  return (
    <div className={classes.root}>
      <Container size="lg" style={{ display: "inline", height: rem(1000) }}>
        <code style={{ color: theme.white, display: "block" }} >Hi there 👋 i'm</code>
        <h1 style={{ color: "#96F2D7", fontFamily: "Jaldi-Bold", display: "block" }}>Tay Crawshaw </h1>
        <img style={{ background: "rgba(0, 0, 0, 0.6)", display: "inline-block", marginTop: -10, src: headphoto, width: "180px" }} src={headphoto} alt="it's me" ></img>
        <code style={{ color: theme.white, marginTop: 20, display: "block" }} >And i'm a front-end web developer. </code>
        <Link to="/work" end>
          <Button style={{ marginTop: rem(22) }} variant="gradient" gradient={{ from: 'teal', to: 'grape' }}>Check My Builds</Button>
        </Link>
        <div style={{ marginTop: rem(14) }}>
          <a href="https://github.com/taycrawshaw" style={{ color: theme.white, marginTop: rem(15), display: "inline" }}> <IconBrandGithub /></a>
          <a href="https://www.linkedin.com/in/tay-c-3a0487176/" style={{ color: theme.white, marginTop: rem(15), display: "inline" }}><IconBrandLinkedin /></a>
        </div>
      </Container>




    </div>
  );
}

export default HomeJumbotron;