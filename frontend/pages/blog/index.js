import PostCard from "../../src/ui/post/PostCard";

import React from "react";
import Head from "next/head";
import Grid from "@material-ui/core/Grid";
import Container from "@material-ui/core/Container";
import Typography from "@material-ui/core/Typography";

import { getAllPosts } from "../../lib/index";

import { makeStyles, useTheme } from "@material-ui/core/styles";

const useStyles = makeStyles(theme => ({
  mainContainer: {
    marginTop: "5em",
    marginBottom: "5em",
    [theme.breakpoints.down("md")]: {
      marginTop: "3em",
      marginBottom: "3em",
    },
    [theme.breakpoints.down("xs")]: {
      marginTop: "2em",
      marginBottom: "2em",
    },
  },
}));

export async function getStaticProps() {
  const posts = await getAllPosts();
  return { revalidate: 1, props: { posts } };
}

export default function Blog({ posts }) {
  const classes = useStyles();
  const theme = useTheme();

  return (
    <React.Fragment>
      <Head>
        <title key="title">A Look Into My Life - Blog | Chris Diorio</title>
      </Head>
      <Container maxWidth="lg" className={classes.mainContainer}>
        <Grid container direction="column">
          <Grid item>
            <Typography variant="h1">Blog</Typography>
          </Grid>
          <Grid item>
            <Typography variant="body1">Here you can find my rambling and ideas as I continue my learning of Fornt-End Development and UX Design. Enjoy!</Typography>
          </Grid>
        </Grid>
        <Grid container spacing={4} style={{marginTop: '2em'}}>
          {posts?.map(({ fields }) => (
            <Grid item key={fields.slug} xs={12} sm={6} md={4}>
              <Grid container>
                <PostCard
                  title={fields.title}
                  subtitle={fields.subTitle}
                  authorName={fields.author.fields.name}
                  authorImage={fields.author.fields.image.fields.file.url}
                  slug={fields.slug}
                  date={fields.date}
                  coverImage={fields.coverImage.fields.file.url}
                />
              </Grid>
            </Grid>
          ))}
        </Grid>
      </Container>
    </React.Fragment>
  );
}
