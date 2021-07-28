import Link from "../Link";
import moment from "moment";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import Avatar from "@material-ui/core/Avatar";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles(theme => ({
  image: {
    height: 0,
    paddingTop: "56.25%",
  },
  expand: {
    transform: "rotate(0deg)",
    marginLeft: "auto",
    transition: theme.transitions.create("transform", {
      duration: theme.transitions.duration.shortest,
    }),
  },
  expandOpen: {
    transform: "rotate(180deg)",
  },
  avatar: {
    color: "transparent",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
  },
  cardContainer: {
    transition: "all 0.3s",
    "&:hover": {
      boxShadow:
        "1px 0px 20px -1px rgba(0,0,0,0.2), 0px 0px 20px 5px rgba(0,0,0,0.14), 0px 1px 10px 0px rgba(0,0,0,0.12)",
      transform: "translateY(-3px)",
    },
  },
}));

export default function Post({
  title,
  subtitle,
  authorName,
  authorImage,
  slug,
  date,
  coverImage,
}) {
  const classes = useStyles();
  const theme = useTheme();

  return (
    <Link href="/blog/[slug]" as={`/blog/${slug}`}>
      <Card className={classes.cardContainer}>
        <CardHeader
          avatar={
            <Avatar
              aria-label="avatar image"
              className={classes.avatar}
              style={{ backgroundImage: `url(${authorImage})` }}
            />
          }
          title={authorName}
          subheader={moment(date).format("MMMM Do YYYY")}
        />
        <CardMedia className={classes.image} image={coverImage} title={title} />
        <CardContent>
          <Typography variant="body1" color="textSecondary" component="p">
            {subtitle.length > 170 ? subtitle.substr(0, 170) + "..." : subtitle}
          </Typography>
        </CardContent>
      </Card>
    </Link>
  );
}
