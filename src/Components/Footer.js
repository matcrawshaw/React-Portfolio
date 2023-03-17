import { createStyles, Container, Group, ActionIcon, rem, useMantineTheme } from '@mantine/core';
import { IconBrandGithub, IconBrandLinkedin } from '@tabler/icons-react';


const useStyles = createStyles((theme) => ({

 
  footer: {
    background: "#1A1B1E",
    height: "20dvh",
    borderTop: `${rem(1)} solid ${
      theme.colorScheme === 'dark' ? theme.colors.dark[5] : theme.colors.gray[2]
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
    <div  className={classes.footer}>
      <Container className={classes.inner}>
        
        <Group    spacing={0} className={classes.links} noWrap>
      <a href="" style={{color: theme.white, marginTop: rem(15), display: "inline"}}> <IconBrandGithub/></a>
      <a href="" style={{color: theme.white, marginTop: rem(15), display: "inline"}}><IconBrandLinkedin/></a>
        </Group>
      </Container>
    </div>
  );
}

export default FooterSocial;