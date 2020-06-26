import React, { Component } from 'react';
import { Button, Box, Grid, Typography } from '@material-ui/core';
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
  text1: {
    fontSize: 48,
    color: 'white',

    textAlign: 'center',
    textShadow: '1px 1px #a5a8ad',
  },
  text2: {
    fontSize: 24,
    color: 'white',
    maxWidth: 715,
    textAlign: 'center',
    textShadow: '1px 1px #a5a8ad',
  },
});

class headerHome extends Component {
  render() {
    const { classes } = this.props;
    return (
      <div>
        <Box className={classes.BoxBase}>
          <Grid container style={{ height: '100%' }} direction='column' justify='center' alignItems='center'>
            <Grid item xs></Grid>
            <Grid item xs>
              <Grid container style={{ height: '100%' }} direction='column' justify='center' alignItems='center'>
                <Grid item xs>
                  <Typography className={classes.text1}>Connect on DumbSound</Typography>
                </Grid>
                <Grid item xs>
                  <Typography className={classes.text2}>
                    Discovery, Stream, and share a constantly expanding mix of music from emerging and major artists around the
                    world
                  </Typography>
                </Grid>
              </Grid>
            </Grid>
            <Grid item xs></Grid>
          </Grid>
        </Box>
      </div>
    );
  }
}

export default withStyles(styles)(headerHome);
