import React, { Component } from 'react';
import { Button, Box, Grid, Typography } from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';
import HeaderImage from '../img/header/panggung.png';
import { compose } from 'recompose';
import { connect } from 'react-redux';

const styles = (theme) => ({
  BoxBase: {
    width: '100%',
    // height: 350,
    // backgroundImage: `url(${HeaderImage})`,
    // // backgroundImage: `url(${HeaderImage})`,
    // backgroundRepeat: 'no-repeat',
    // backgroundPosition: 'center center',
    // backgroundAttachment: 'fixed',
    // backgroundSize: 'cover',
    // position: 'relative',
    // objectFit: 'cover',
    // objectPosition: 'center',
  },
  Img: {
    maxWidth: '100%',
    minWidth: '100%',
    maxHeight: 350,
    minHeight: 350,
    objectFit: 'cover',
    objectPosition: 'center',
    color: 'white',
    fontSize: 28,
  },
  GridDescription: {
    paddingTop: '100px',
    paddingLeft: '100px',
    color: 'white',
    fontSize: '18px',
    textShadow: '2px 2px 2px #484848',
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
  nameArtistDiv: {
    top: 285,
    left: 25,
    position: 'absolute',
  },
  nameArtistText: {
    color: 'white',
    fontSize: 96,
    textShadow: '2px 2px 5px rgba(127, 127, 127, 0.86)',
    // backgroundColor: 'rgba(135, 135, 135, 0.61)',
  },
});

class headerSongsByArtistjs extends Component {
  render() {
    const { classes } = this.props;
    const { artistDataBySong } = this.props.getArtistBySongReducer;
    return (
      <>
        <div style={{ height: 70 }} />
        <div className={classes.nameArtistDiv}>
          <b className={classes.nameArtistText}>{artistDataBySong.name}</b>
        </div>
        <img src={artistDataBySong.cover} alt='Loading...' className={classes.Img} />
      </>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    getArtistBySongReducer: state.getArtistBySongReducer,
  };
};
export default compose(withStyles(styles), connect(mapStateToProps, null))(headerSongsByArtistjs);
