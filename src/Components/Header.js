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
import SwitchToggle from './LightDarkButton'
import logolight from './logo-light.png'

const HEADER_HEIGHT = rem(60);

const useStyles = createStyles((theme) => ({
  root: {
    position: 'relative',
    zIndex: 1,
    borderBottom: "0"
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

interface HeaderResponsiveProps {
  links: { link: string; label: string }[];
}

export function HeaderResponsive({ links }: HeaderResponsiveProps) {
  const [opened, { toggle, close }] = useDisclosure(false);
  const [active, setActive] = useState(links[0].link);
  const { classes, cx } = useStyles();
  const items = links.map((link) => (

    <a
      key={link.label}
      href={link.link}
      className={cx(classes.link, { [classes.linkActive]: active === link.link })}
      onClick={(event) => {
        event.preventDefault();
        setActive(link.link);
        close();
      }}
    >
      {link.label}
    </a>
  ));

  return (
       <Container size="100%" px={0} >
       
      
    <Header height={120}  className={classes.root}>
      <Container className={classes.header}>
      <Title className={classes.link}>
      <a component="a" href="/"><img 
    
  
      style={{ width: 100, height: 100 }} src={logolight} alt="logo" />

        </a>
              
            </Title>
        <Group spacing={5} className={classes.links}>
        <Text
              color="gray.5"
              component="a"
              href="#about"
              className={classes.link}
            >
              <Text color="#0E49B5" px={7}>
          
              </Text>
              <code>About Me</code>
            </Text>
            <Text
              color="gray.5"
              component="a"
              href="#work"
              className={classes.link}
            >
              <Text color="#0E49B5" px={7}>
                
              </Text>
              <code>My Work</code>
            </Text>
            <Text
              color="gray.5"
              component="a"
              href="#contact"
              className={classes.link}
            >
              <Text color="#0E49B5" px={7}>
                
              </Text>
              <code>Contact Me</code>
            </Text>

            <Text
              color="gray.5"
              component="a"
              href="#resume"
              
            >
              <Text color="#0E49B5" px={7}>
               
              </Text>
              <Button className={classes.link} color="grape" variant="outline">
                 Resume
               </Button>
            </Text>


       
        </Group>

        <Burger opened={opened} onClick={toggle} className={classes.burger} size="sm" />

        <Transition transition="pop-top-right" duration={200} mounted={opened}>
          {(styles) => (
            <Paper className={classes.dropdown} withBorder style={styles}>
              <Text
              color="gray.5"
              component="a"
              href="#about"
              className={classes.link}
            >
              <Text color="#0E49B5" px={7}>
          
              </Text>
              <code>About Me</code>
            </Text>
            <Text
              color="gray.5"
              component="a"
              href="#work"
              className={classes.link}
            >
              <Text color="#0E49B5" px={7}>
                
              </Text>
              <code>My Work</code>
            </Text>
            <Text
              color="gray.5"
              component="a"
              href="#contact"
              className={classes.link}
            >
              <Text color="#0E49B5" px={7}>
                
              </Text>
              <code>Contact Me</code>
            </Text>

            <Text
              color="gray.5"
              component="a"
              href="#resume"
              className={classes.link}
            >
              <Text color="#0E49B5" px={7}>
                
              </Text>
              <code>Resume</code>
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