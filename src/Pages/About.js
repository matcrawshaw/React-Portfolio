import { 
    createStyles, 
    Container, 
    rem,
    useMantineTheme} from '@mantine/core';

  import "../Fonts/Jaldi-Bold.ttf"
 


const useStyles = createStyles((theme) => ({
  
  root: {
    position: "relative",
    // background: "#1A1B1E",
    minHeight: "70dvh",
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

function AboutPage() {
  const { classes } = useStyles();
  const theme = useMantineTheme();
  return (
    <div className={classes.root}>
      <Container size="lg" style={{maxWidth: rem(600) }}> 
  <code style={{color: theme.white, lineHeight: 1.5} } >After working on the commercial side of the Software industry in channel distribution for several years, I have decided to change my career path into Web Development.{"\n"} After graduating from my front-end development bootcamp I am currently looking to learn as much as possible with the hope to continue my journey with a company soon.

  If you have any suggestions for my portfolio, any work opportunities, or simpy want to stay connected then please get in touch.
  
  </code> 
   
      
      </Container>
      



    </div>
  );
}

export default AboutPage;