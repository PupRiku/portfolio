import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import Avatar from "@material-ui/core/Avatar";
import moment from "moment";
import { makeStyles, useTheme } from "@material-ui/core/styles";

const useStyles = makeStyles(theme => ({
  avatar: {
    width: "3em",
    height: "3em",
    boxShadow: "0px 0px 10px 1px #b2b2b28f",
  },
  Container: {
    maxWidth: "800px",
  },
}));

const PostHeader = ({
  title,
  subtitle,
  authorName,
  authorImage,
  date,
  coverImage,
}) => {
  const classes = useStyles();
  const theme = useTheme();

  return (
    <Container className={classes.container}>
      <Grid container direction="column" spacing={3}>
        <Grid item>
          <Typography variant="h2">{title}</Typography>
        </Grid>
        <Grid item container wrap="nowrap" alignItems="center" spacing={3}>
          <Grid item>
            <Avatar
              aria-label="avatar image"
              className={classes.avatar}
              src={authorImage}
            />
          </Grid>
          <Grid item container direction="column">
            <Grid item>
              <Typography>{authorName}</Typography>
            </Grid>
            <Grid item>
              <Typography color="textSecondary">
                {moment(date).format("MMMM Do YYYY")}
              </Typography>
            </Grid>
          </Grid>
        </Grid>
        <Grid item>
          <img src={coverImage} style={{ height: "auto", width: "100%" }} />
        </Grid>
        <Grid item>
            <Typography variant='h3'>{subtitle}</Typography>
        </Grid>
      </Grid>
    </Container>
  );
};

export default PostHeader;
