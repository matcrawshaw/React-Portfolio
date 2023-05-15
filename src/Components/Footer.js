import { createStyles, Container, Group, rem, useMantineTheme } from '@mantine/core';
import { IconBrandGithub, IconBrandLinkedin } from '@tabler/icons-react';
import React from 'react';

const useStyles = createStyles((theme) => ({


  footer: {
    // background: "#1A1B1E",
    height: "20dvh",
    borderTop: `${rem(1)} solid ${theme.colorScheme === 'dark' ? theme.colors.dark[5] : theme.colors.gray[2]
      }`,
  },

  inner: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingTop: theme.spacing.xl,
    paddingBottom: theme.spacing.xl,

    [theme.fn.smallerThan('xs')]: {
      flexDirection: 'column',
    },
  },

  links: {
    [theme.fn.smallerThan('xs')]: {
      marginTop: theme.spacing.md,
    },
  },
}));

function FooterSocial() {
  const theme = useMantineTheme();
  const { classes } = useStyles();

  return (
    <div className={classes.footer}>
      <Container style={{ justifyContent: "center" }} className={classes.inner}>

        <Group spacing={0} className={classes.links} noWrap>
          <a href="https://github.com/taycrawshaw" style={{ color: theme.white, marginTop: rem(15) }}> <IconBrandGithub /></a>
          <a href="https://www.linkedin.com/in/tay-c-3a0487176/" style={{ color: theme.white, marginTop: rem(15) }}><IconBrandLinkedin /></a>
        </Group>
      </Container>
    </div>
  );
}

export default FooterSocial;