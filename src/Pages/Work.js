import { 
    createStyles, 
    Container, 
    Title, 
    Text, 
    rem,
    useMantineTheme, 
    Group, 
  
  Button } from '@mantine/core';
  import { IconBrandGithub, IconBrandLinkedin} from '@tabler/icons-react';
  import "../Fonts/Jaldi-Bold.ttf"
 
import Cards from '../Components/Cards'

const useStyles = createStyles((theme) => ({
  
  root: {
    position: "relative",
    background: "#1A1B1E",
   height: "80dvh",
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

function WorkPage() {
  const { classes } = useStyles();
  const theme = useMantineTheme();
  return (
    <div className={classes.root}>
      <Container size="lg" style={{ display: "inline", height: rem(1000) }}> 
  <code style={{color: theme.white, display: "block"}} >My Work</code> 
  <Cards/>
      
      </Container>
      



    </div>
  );
}

export default WorkPage;