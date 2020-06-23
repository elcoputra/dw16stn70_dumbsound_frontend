import React, { Component } from 'react';
import { Button, Box, Grid } from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';
import HeaderImage from '../img/header/panggung.png';
import logoHeaderImage from '../img/header/YourName-logo-width-bw-invert.png';
import gradientImage from '../img/header/Rectangle.png';

const styles = (theme) => ({
  BoxBase: {
    width: '100%',
    height: 512,
    backgroundImage: `url(${HeaderImage})`,
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center center',
    backgroundAttachment: 'fixed',
    backgroundSize: 'cover',
    position: 'relative',
  },
  GridDescription: {
    paddingTop: '100px',
    paddingLeft: '100px',
    color: 'white',
    fontSize: '18px',
    textShadow: '2px 2px 2px #484848',
  },
  img: {
    width: '100%',
    maxWidth: '600px',
    height: 'auto',
  },
  imgGradient: {
    width: '100%',
    height: 'auto',
    imageAttachment: 'fixed',
    imageSize: 'cover',
    position: 'absolute',
    left: '0',
    bottom: '0',
  },
  ButtonWatchNow: {
    height: '60px',
    width: '300px',
    fontSize: '24px',
    background: '#E50914',
    color: 'white',
    '&:hover': {
      //you want this to be the same as the backgroundColor above
      backgroundColor: '#000',
    },
  },
  BorderedBox: {
    paddingTop: '1px',
    paddingBottom: '1px',
    paddingLeft: '10px',
    paddingRight: '10px',
  },
});

class headerHome extends Component {
  render() {
    const { classes } = this.props;
    return (
      <div>
        <Box className={classes.BoxBase}>
          {/* <Box classNmae={classes.BoxDescription}>
            <Grid
              container
              xs={6}
              spacing='3'
              direction='column'
              justify='flex-start'
              alignItems='flex-start'
              className={classes.GridDescription}
            >
              <Grid item xs>
                <img src={logoHeaderImage} alt='' className={classes.img} />
              </Grid>
              <Grid item xs>
                Two strangers find themselves linked in a bizarre way. When a connection forms, will distance be the only thing to
                keep them apart?
              </Grid>
              <Grid item xs>
                <Grid container spacing='3' direction='row' justify='flex-start' alignItems='center'>
                  <Grid item xs>
                    2016
                  </Grid>
                  <Grid item xs>
                    <Box border={1} borderRadius={4} className={classes.BorderedBox}>
                      Movies
                    </Box>
                  </Grid>
                </Grid>
              </Grid>
              <Grid item xs>
                <Button variant='contained' className={classes.ButtonWatchNow}>
                  WATCH NOW!
                </Button>
              </Grid>
            </Grid>
          </Box> */}
          {/* <img src={gradientImage} alt='' className={classes.imgGradient} /> */}
        </Box>
      </div>
    );
  }
}

export default withStyles(styles)(headerHome);
