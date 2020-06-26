import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import { Modal, Backdrop, Fade, Box, Grid, Avatar, Typography, TextField, Button, Link } from '@material-ui/core';
import { compose } from 'recompose';
import { connect } from 'react-redux';
import { clearModalArtistDetailAction } from '../redux/actions/artist_action';
import { getSongsByArtistAction } from '../redux/actions/song_actions';
import { Link as LinkRouter } from 'react-router-dom';

const styles = (theme) => ({
  modal: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    outline: 'none',
  },
  Box: {
    backgroundColor: '#3a3a3a',
    opacity: '100%',
    width: '416px',
    borderRadius: '10px',
  },
  rootGrid: {
    padding: 20,
  },
  avatar: {
    width: 80,
    height: 80,
  },
  name: {
    color: 'white',
    fontSize: 36,
  },
  headerInfo: {
    height: 83,
  },
  old: {
    color: 'red',
  },
  type: {
    color: 'red',
  },
  pembatas: {
    marginTop: 20,
    marginBottom: 20,
    height: 3,
    width: '100%',
    backgroundColor: '#4c4c4c',
  },
  biography: {
    color: 'white',
    fontSize: 18,
  },
  biographyText: {
    maxWidth: '100%',
    maxHeight: 311,
    marginTop: 10,
    color: 'white',
    overflow: 'hiden',
  },
  ButtonListSongByArtist: {
    borderRadius: '0px 0px 10px 10px',
    height: '50px',
    width: '100%',
    fontSize: '18pxx',
    background: '#870303',
    marginTop: '10px',
    color: 'white',
    '&:hover': {
      //you want this to be the same as the backgroundColor above
      backgroundColor: 'white',
      color: '#870303',
    },
  },
});

class modalDetailArtist extends Component {
  handleFindSongs = (id) => {
    // Kirim data id ke action pencari lagu by artist
    this.props.getSongsByArtistAction(id);
    this.props.clearModalArtistDetailAction();
  };

  render() {
    const { classes } = this.props;
    const { artistDataBySong, loadingGetArtistBySong, errorGetArtistBySong, modalArtist } = this.props.getArtistBySongReducer;
    return (
      <div>
        <Modal
          className={classes.modal}
          open={modalArtist}
          onClose={this.props.clearModalArtistDetailAction}
          closeAfterTransition
          BackdropComponent={Backdrop}
          BackdropProps={{
            timeout: 500,
          }}
        >
          <Fade in={modalArtist}>
            <Box className={classes.Box}>
              {/* COLOUMN UTAMA */}
              <Grid container direction='column' justify='flex-start' alignItems='stretch' className={classes.rootGrid}>
                {/* GIRD ROW CIRCLE PHOTO, NAME(YEAR, TYPE) */}
                <Grid item xs>
                  <Grid container direction='row' justify='space-between' alignItems='flex-start' className={classes.headerInfo}>
                    {/* CIRCLE PHOTO */}
                    <Grid item xs={3}>
                      <Avatar alt='Sayuri' src={artistDataBySong.pic} className={classes.avatar} />
                    </Grid>
                    <Grid item xs>
                      {/* COLUMN, ATAS NAMA, BAWAH YEAR TYPE */}
                      <Grid container direction='column' justify='space-around' alignItems='stretch'>
                        <Grid item xs>
                          <b className={classes.name}>{artistDataBySong.name}</b>
                        </Grid>
                        {/* ROW YEAR DAN TYPE */}
                        <Grid item xs>
                          <Grid container direction='row' justify='flex-start' alignItems='flex-start'>
                            <Grid item xs={4}>
                              <b className={classes.old}>{artistDataBySong.old} Years old</b>
                            </Grid>
                            <Grid item xs={1}>
                              <b style={{ color: '#7c7f81' }}>|</b>
                            </Grid>
                            <Grid item xs>
                              <b className={classes.type}>
                                {artistDataBySong.type && artistDataBySong.type.name ? artistDataBySong.type.name : null} Artist
                              </b>
                            </Grid>
                          </Grid>
                        </Grid>
                      </Grid>
                    </Grid>
                  </Grid>
                </Grid>
                {/* GRID GARIS PEMBATAS */}
                <Grid item xs>
                  <div className={classes.pembatas}></div>
                </Grid>
                <Grid item xs>
                  <b className={classes.biography}>Biography</b>
                </Grid>
                <Grid item xs>
                  <div className={classes.biographyText}>
                    <Typography>{artistDataBySong.bio}</Typography>
                  </div>
                </Grid>
              </Grid>
              <LinkRouter to='/artist/songs'>
                <Button
                  variant='contained'
                  onClick={() => this.handleFindSongs(artistDataBySong.id)}
                  className={classes.ButtonListSongByArtist}
                >
                  See all the songs
                </Button>
              </LinkRouter>
            </Box>
          </Fade>
        </Modal>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    getArtistBySongReducer: state.getArtistBySongReducer,
  };
};

export default compose(
  withStyles(styles),
  connect(mapStateToProps, { clearModalArtistDetailAction, getSongsByArtistAction }),
)(modalDetailArtist);
