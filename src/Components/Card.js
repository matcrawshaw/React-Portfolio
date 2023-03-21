import {
  createStyles,
  Card,
  Image,
  Group,
  Text,
  Badge,
  rem,
  Button
} from '@mantine/core';
import { IconHeart, IconBookmark, IconShare } from '@tabler/icons-react';

const useStyles = createStyles((theme) => ({
  card: {
    backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[7] : theme.white,
  },

  footer: {
    padding: `${theme.spacing.xs} ${theme.spacing.lg}`,
    marginTop: theme.spacing.md,
    borderTop: `${rem(1)} solid ${
      theme.colorScheme === 'dark' ? theme.colors.dark[5] : theme.colors.gray[2]
    }`,
  },
}));

interface ArticleCardFooterProps {
  image: string;
  category: string;
  title: string;
  footer: string;
  liveLink: string;
  repoLink: string;
  author: {
    name: string;
    description: string;
    image: string;
  };
}

function ArticleCardFooter({
  image,
  category,
  title,
  footer,
  liveLink,
  repoLink,
  author,
}: ArticleCardFooterProps) {
  const { classes, theme } = useStyles();

  return (
    <Card withBorder padding="lg" radius="md" style={{ background: "rgba(0, 0, 0, 0.6)"}} className={classes.card}>
      <Card.Section mb="sm">
        <Image src={image} alt={title} height={180} />
      </Card.Section>

<div style={{height: rem(40)}}>   
{category.map((badge) => (
  <Badge style={{margin: rem(2)}}>{badge}</Badge>
))}
      </div>

      <Text fw={700} className={classes.title} mt="xs">
        {title}
      </Text>

      <Group mt="lg">
      
        <div>
        
          <Text  style={{color: theme.white, height: rem(80)}}fz="xs" c="dimmed">
            {author.description}
          </Text>
        </div>
      </Group>

      <Card.Section className={classes.footer}>
        <Group style={{display: "flex" ,justifyContent: "center"}} position="apart">
          <Text fz="xs" c="dimmed">
            {footer}
          </Text>
        
            <div style={{whiteSpace: "nowrap"}}>
          
          <Button 
          component="a"
          target="_blank"
          rel="noopener noreferrer"
          href={liveLink}
          style={{ width: rem(150), marginRight: rem(2)}}
          variant="gradient" gradient={{ from: 'grape', to: 'teal' }}
          >Deployed App</Button>

          <Button 
          component="a"
          target="_blank"
          rel="noopener noreferrer"
          href={repoLink}
          style={{width: rem(150), marginLeft: rem(2)}}variant="gradient" gradient={{ from: 'teal', to: 'grape' }}
          >Repository</Button>
          
          </div>
        </Group>
      </Card.Section>
    </Card>
  );
}

export default ArticleCardFooter;