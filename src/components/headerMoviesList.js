import React, { Component } from "react";
import { Button, Box, Grid } from "@material-ui/core";
import { withStyles } from "@material-ui/core/styles";
import HeaderImage from "../img/header/joker.png";
import logoHeaderImage from "../img/header/joker-logo.png";
import gradientImage from "../img/header/Rectangle.png";

const styles = (theme) => ({
  BoxBase: {
    width: "100%",
    height: "918px",
    marginTop: "70px",
    backgroundImage: `url(${HeaderImage})`,
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center center",
    backgroundAttachment: "fixed",
    backgroundSize: "cover",
    position: "relative",
  },
  GridDescription: {
    paddingTop: "100px",
    paddingLeft: "100px",
    color: "white",
    fontSize: "18px",
    textShadow: "2px 2px 2px #484848",
  },
  img: {
    width: "100%",
    maxWidth: "600px",
    height: "auto",
  },
  imgGradient: {
    width: "100%",
    height: "auto",
    imageAttachment: "fixed",
    imageSize: "cover",
    position: "absolute",
    left: "0",
    bottom: "0",
  },
  ButtonWatchNow: {
    height: "60px",
    width: "300px",
    fontSize: "24px",
    background: "#E50914",
    color: "white",
    "&:hover": {
      //you want this to be the same as the backgroundColor above
      backgroundColor: "#000",
    },
  },
  BorderedBox: {
    paddingTop: "1px",
    paddingBottom: "1px",
    paddingLeft: "10px",
    paddingRight: "10px",
  },
});

class headerMoviesList extends Component {
  render() {
    const { classes } = this.props;
    return (
      <div>
        <Box className={classes.BoxBase}>
          <Box classNmae={classes.BoxDescription}>
            <Grid
              container
              xs={6}
              spacing="3"
              direction="column"
              justify="flex-start"
              alignItems="flex-start"
              className={classes.GridDescription}
            >
              <Grid item xs>
                <img src={logoHeaderImage} alt="" className={classes.img} />
              </Grid>
              <Grid item xs>
                In Gotham City, mentally troubled comedian Arthur Fleck is
                disregarded and mistreated by society. He then embarks on a
                downward spiral of revolution and bloody crime. This path brings
                him face-to-face with his alter-ego: the Joker.
              </Grid>
              <Grid item xs>
                <Grid
                  container
                  spacing="3"
                  direction="row"
                  justify="flex-start"
                  alignItems="center"
                >
                  <Grid item xs>
                    2019
                  </Grid>
                  <Grid item xs>
                    <Box
                      border={1}
                      borderRadius={4}
                      className={classes.BorderedBox}
                    >
                      Movies
                    </Box>
                  </Grid>
                </Grid>
              </Grid>
              <Grid item xs>
                <Button variant="contained" className={classes.ButtonWatchNow}>
                  WATCH NOW!
                </Button>
              </Grid>
            </Grid>
          </Box>
          <img src={gradientImage} alt="" className={classes.imgGradient} />
        </Box>
      </div>
    );
  }
}

export default withStyles(styles)(headerMoviesList);
