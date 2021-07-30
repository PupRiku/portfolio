import { useRouter } from "next/router";
import ErrorPage from "next/error";

import PostHeader from "../../src/ui/post/PostHeader";
import PostBody from "../../src/ui/post/PostBody";
import ShareButton from "../../src/ui/post/ShareButton";

import {
  getPostBySlug,
  getMorePosts,
  getAllPostsWithSlug,
} from "../../lib/index";

import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";

export async function getStaticPaths() {
  const allPosts = await getAllPostsWithSlug();
  return {
    paths: allPosts?.map(({ slug }) => `/blog/${slug}`) ?? [],
    fallback: true,
  };
}

export async function getStaticProps({ params }) {
  const post = await getPostBySlug(params.slug);
  const morePosts = await getMorePosts(params.slug);
  return {
    props: {
      post: post ? post : null,
      morePosts: morePosts ? morePosts : null,
    },
    revalidate: 1,
  };
}

const BlogPost = ({ post, morePosts }) => {
  const router = useRouter();

  if (!router.isFallback && !post) {
    return <ErrorPage statusCode={404} />;
  }

  return (
    <Container
      title={post?.fields.title}
      description={post?.fields.subTitle}
      ogImage={post?.fields.coverImage.fields.file.url}
      url={`https://portfolio-git-dev-pupriku.vercel.app/blog/${post?.fields.slug}`}
      style={{ marginTop: "5em" }}
    >
      <PostHeader
        title={post?.fields.title}
        subtitle={post?.fields.subTitle}
        authorName={post?.fields.author.fields.name}
        authorImage={post?.fields.author.fields.image.fields.file.url}
        slug={post?.fields.slug}
        date={post?.fields.date}
        coverImage={post?.fields.coverImage.fields.file.url}
      />
      <PostBody content={post?.fields.content} />
      <Container maxWidth="lg">
        <Grid container direction="column" alignItems="center">
          <Grid item>
            <Typography
              align="center"
              gutterBottom
              style={{
                fontSize: "1.5rem",
                fontWeight: "bold",
              }}
            >
              - Share -
            </Typography>
            <ShareButton url={`https://portfolio-git-dev-pupriku.vercel.app/blog/${post?.fields.slug}`} title={post?.fields.title} />
          </Grid>
        </Grid>
        <Typography
          align="center"
          gutterBottom
          style={{
            fontSize: "1.5rem",
            fontWeight: "bold",
            margin: "2em 0 1.5em",
            borderBottom: "2px solid rgb(208 208 208)",
          }}
        >
          - Recent Entries -
        </Typography>
        <Grid container spacing={4} justify="center">
          {morePosts?.map(({ fields }) => (
            <Grid item key={fields.slug} xs={12} md={4}>
              <Grid container>
                <MorePost
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
    </Container>
  );
};

export default BlogPost;
