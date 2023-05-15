import { NavLink } from 'react-router-dom';
import { useState } from 'react';
import {
  createStyles,
  Header,
  Container,
  Group,
  Burger,
  Paper,
  Transition,
  rem,
  Text,
  Title,
  Button
} from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import logolight from './logo-light.png';
import React from 'react';

const HEADER_HEIGHT = rem(60);

const useStyles = createStyles((theme) => ({
  root: {
    position: 'relative',
    zIndex: 1,
    borderBottom: "0",
    background: "transparent"
  },


  dropdown: {
    position: 'absolute',
    top: HEADER_HEIGHT,
    left: 0,
    right: 0,
    zIndex: 0,
    borderTopRightRadius: 0,
    borderTopLeftRadius: 0,
    borderTopWidth: 0,
    overflow: 'hidden',

    [theme.fn.largerThan('sm')]: {
      display: 'none',
    },
  },

  header: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    height: '100%',
  },

  links: {
    [theme.fn.smallerThan('sm')]: {
      display: 'none',
    },
  },

  burger: {
    [theme.fn.largerThan('sm')]: {
      display: 'none',
    },
  },

  link: {
    display: 'block',
    lineHeight: 1,
    padding: `${rem(8)} ${rem(12)}`,
    borderRadius: theme.radius.sm,
    textDecoration: 'none',
    color: theme.colorScheme === 'dark' ? theme.colors.dark[0] : theme.colors.gray[7],
    fontSize: theme.fontSizes.sm,
    fontWeight: 500,

    '&:hover': {
      backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[6] : theme.colors.gray[0],
    },

    [theme.fn.smallerThan('sm')]: {
      borderRadius: 0,
      padding: theme.spacing.md,
    },
  },

  linkActive: {
    '&, &:hover': {
      backgroundColor: theme.fn.variant({ variant: 'light', color: theme.primaryColor }).background,
      color: "theme.fn.variant({ variant: 'light', color: theme.primaryColor }).color",
    },
  },
}));



export function HeaderResponsive({ links }) {
  const [opened, { toggle, close }] = useDisclosure(false);
  const [active, setActive] = useState(links[0].link);
  const { classes, cx } = useStyles();


  return (
    <Container size="100%" px={0} >


      <Header height={120} className={classes.root}>
        <Container className={classes.header}>
          <Title className={classes.link}>
            <NavLink to="/" > <a component="a" href="/"><img


              style={{ width: 100, height: 100 }} src={logolight} alt="logo" />

            </a> </NavLink>

          </Title>
          <Group spacing={5} className={classes.links}>
            <NavLink
              to="/about"
              end
              style={{ textDecoration: "none" }}

              color="gray.5"
              className={classes.link}
              px={7}>
              <code>About Me</code>

            </NavLink>
            <NavLink
              to="/work"
              end
              style={{ textDecoration: "none" }}

              color="gray.5"
              className={classes.link}
              px={7}>


              <code>My Work</code>

            </NavLink>
            <NavLink
              to="/contact"
              color="gray.5"
              className={classes.link}
              px={7}>
              <code>Contact Me</code>
            </NavLink>

            <Text
              color="gray.5"
              component="a"
              href="#resume"
              px={7}>

              <Button
                component="a"
                target="_blank"
                rel="noopener noreferrer"
                href="https://drive.google.com/file/d/1WevRlOS8icvLZHCQv8RdMkQFYZGLpxcT/view?usp=share_link"

                className={classes.link} color="grape" variant="outline">
                Resume
              </Button>
            </Text>



          </Group>

          <Burger opened={opened} onClick={toggle} className={classes.burger} size="sm" />

          <Transition transition="pop-top-right" duration={200} mounted={opened}>
            {(styles) => (
              <Paper className={classes.dropdown} withBorder style={styles}>
                <NavLink
                  to="/about"
                  end
                  style={{ textDecoration: "none" }}

                  color="gray.5"
                  className={classes.link}
                  px={7}>
                  <code>About Me</code>

                </NavLink>
                <NavLink
                  to="/work"
                  end
                  style={{ textDecoration: "none" }}

                  color="gray.5"
                  className={classes.link}
                  px={7}>
                  <code>My Work</code>
                </NavLink>
                <NavLink
                  to="/contact"
                  color="gray.5"
                  className={classes.link}
                  px={7}>
                  <code>Contact Me</code>
                </NavLink>
                <Text
                  color="gray.5"
                  component="a"
                  px={7}
                  target="_blank"
                  rel="noopener noreferrer"
                  href="https://drive.google.com/file/d/1mDhBXlhM7zZLD8WiPkvPiQzwyqFqOGVy/view?usp=share_link"
                  className={classes.link} color="grape" variant="outline">
                  Resume

                </Text>

              </Paper>
            )}
          </Transition>
        </Container>
      </Header>
    </Container>

  );
}

export default HeaderResponsive