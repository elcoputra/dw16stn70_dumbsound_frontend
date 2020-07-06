import React, { Component } from 'react';
import { Grid, Card, CardActionArea, Typography, Button } from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';
import { Link } from 'react-router-dom';
import {
  getDataSongsAction,
  getDetailSongAction,
  deleteSongAction,
  openModalSongUpdateAction,
} from '../redux/actions/song_actions';
import { compose } from 'recompose';
import { connect } from 'react-redux';

class songsCard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isAdmin: false,
      mouseHover: false,
      idMouseHover: 0,
    };
  }

  onMouseEnterHandler = (id) => {
    this.setState({ idMouseHover: id });
    this.setState({ mouseHover: true });
  };
  onMouseLeaveHandler = (id) => {
    this.setState({ mouseHover: false });
  };

  updateButton = (id, title, artist, year, thumbnailLink, musicLink) => {
    this.props.openModalSongUpdateAction(id, title, artist, year, thumbnailLink, musicLink);
  };
  deleteButton = async (id) => {
    await this.props.deleteSongAction(id);
    await this.props.getDataSongsAction();
  };

  onHoverItem(id, title, artist, year, thumbnailLink, musicLink) {
    const { classes } = this.props;
    return (
      <div className={classes.contExtendFunc} id={id} onMouseLeave={() => this.onMouseLeaveHandler(id)}>
        <Grid container direction='column' justify='center' alignItems='center'>
          <Grid item xs>
            <Typography noWrap className={classes.TypographyTitleTooltip}>
              {title}
            </Typography>
          </Grid>
          <Grid item xs>
            <Typography noWrap className={classes.TypographyArtistTooltip}>
              {artist}
            </Typography>
          </Grid>
          <Grid item xs>
            <div style={{ marginTop: '50%' }}>
              <Grid container direction='row' justify='center' alignItems='center'>
                <Grid item xs>
                  <Button
                    variant='contained'
                    onClick={() => this.updateButton(id, title, artist, year, thumbnailLink, musicLink)}
                    style={{ backgroundColor: 'white', color: '#EE4522', marginRight: 5 }}
                  >
                    Update
                  </Button>
                </Grid>
                <Grid item xs>
                  <Button
                    variant='contained'
                    // onClick={() => this.deleteButton(id)}
                    onClick={() => {
                      if (window.confirm('Are you sure to delete "' + title + '"')) this.deleteButton(id);
                    }}
                    style={{ backgroundColor: '#EE4522', color: 'white' }}
                  >
                    Delete
                  </Button>
                </Grid>
              </Grid>
            </div>
          </Grid>
        </Grid>
      </div>
    );
  }

  render(props) {
    const { classes } = this.props;
    const { songs, loading, message, messageBool } = this.props.getDataSongsReducer;
    const { userState } = this.props.authReducer;
    return (
      <div>
        {loading ? (
          <div style={{ color: 'white' }}>loading...</div>
        ) : (
          <Grid className={classes.gridBase} container direction='column' justify='flex-start' alignItems='flex-start'>
            <Grid item xs classes={{ root: classes.rootGridTitle }}>
              <Grid container spacing={0} direction='row' alignItems='center' justify='center'>
                {messageBool === true ? (
                  <b className={classes.title}>{message}</b>
                ) : (
                  <b className={classes.title}>Dengarkan Dan Rasakan</b>
                )}
              </Grid>
            </Grid>
            <Grid item xs>
              <Grid
                className={classes.gridCard}
                spacing={4}
                container
                direction='row'
                justify='flex-start'
                alignItems='flex-start'
              >
                {songs
                  ? songs.map((detailData) => {
                      return (
                        <div className={classes.Div}>
                          <Grid item xs onMouseEnter={() => this.onMouseEnterHandler(detailData.id)}>
                            <div>
                              {this.state.mouseHover && detailData.id === this.state.idMouseHover && userState.isAdmin ? (
                                this.onHoverItem(
                                  detailData.id,
                                  detailData.title,
                                  detailData.artist.name,
                                  detailData.year,
                                  detailData.thumbnailLink,
                                  detailData.musicLink,
                                )
                              ) : (
                                <Card classes={{ root: classes.rootCard }} className={classes.Card}>
                                  <CardActionArea
                                    onClick={
                                      userState.isAdmin || userState.subscribe
                                        ? () => this.props.getDetailSongAction(detailData.id)
                                        : null
                                    }
                                    className={classes.CardActionArea}
                                  >
                                    <Link className={classes.Link}>
                                      <div className={classes.divImg}>
                                        <img src={detailData.thumbnailLink} alt={detailData.title} className={classes.Img} />
                                      </div>
                                      <Grid container direction='row' justify='space-around' alignItems='center'>
                                        <Grid xs>
                                          <Typography noWrap className={classes.TypographyTitle}>
                                            {detailData.title}
                                          </Typography>
                                        </Grid>
                                        <Grid xs>
                                          <Typography className={classes.TypographyYear}>{detailData.year}</Typography>
                                        </Grid>
                                      </Grid>
                                      <Typography className={classes.TypographyArtist}>{detailData.artist.name}</Typography>
                                    </Link>
                                  </CardActionArea>
                                </Card>
                              )}
                            </div>
                          </Grid>
                        </div>
                      );
                    })
                  : null}
              </Grid>
            </Grid>
          </Grid>
        )}
        {/* kasih logic di bawah ini buat kalo player terbuka otomatis muncul, dan sebaliknya */}
        <div className={classes.pusherCard}></div>
      </div>
    );
  }
}

const styles = (theme) => ({
  rootCard: {
    borderRadius: 10,
    backgroundColor: 'transparent',
  },
  rootGridTitle: {
    width: '100%',
  },
  title: {
    color: '#EE4622',
    fontSize: '24px',
  },
  gridBase: {
    paddingTop: '30px',
    paddingRight: '50px',
    paddingBottom: '30px',
    paddingLeft: '50px',
  },
  gridCard: {
    paddingTop: '30px',
    paddingRight: '30px',
    paddingLeft: '30px',
  },
  card: {
    maxWidth: '200px',
    borderRadius: 10,
    width: 192,
  },
  divImg: {
    height: 152,
    marginTop: 13,
  },
  Img: {
    width: 165,
    height: 152,
    objectFit: 'cover',
    objectPosition: 'center',
  },
  CardActionArea: {
    maxWidth: '200px',
    backgroundColor: '#3a3a3a',
    width: 192,
    display: 'flex',

    borderRadius: 10,
  },
  TypographyTitle: {
    maxWidth: '126px',
    width: 126,
    fontWeight: 'bold',
    fontSize: 18,
    color: 'white',
    backgroundColor: '#3a3a3a',
    marginTop: '4px',
  },
  TypographyYear: {
    maxWidth: '200px',
    color: '#929292',
    backgroundColor: '#3a3a3a',
    fontSize: '14px',
    marginTop: '4px',
  },
  TypographyArtist: {
    color: 'white',
    backgroundColor: '#3a3a3a',
    fontSize: '14px',
    marginBottom: 10,
  },
  Div: {
    padding: '16px',
  },
  Link: {
    textDecoration: 'none',
    color: 'transparent',
  },
  pusherCard: {
    height: 85,
  },
  contExtendFunc: {
    backgroundColor: '#3A3A3A',
    width: 192,
    borderRadius: 10,
    height: 227,
  },
  TypographyTitleTooltip: {
    textAlign: 'center',
    width: 180,
    fontWeight: 'bold',
    fontSize: 18,
    color: 'white',
    paddingTop: 5,
  },
  TypographyArtistTooltip: {
    textAlign: 'center',
    width: 180,
    color: 'white',
    fontSize: '14px',
    paddingTop: 5,
    paddingBottom: 5,
  },
});

const mapStateToProps = (state) => {
  return {
    getDataSongsReducer: state.getDataSongsReducer,
    authReducer: state.authReducer,
    deleteSongReducer: state.deleteSongReducer,
  };
};
export default compose(
  withStyles(styles),
  connect(mapStateToProps, { getDataSongsAction, getDetailSongAction, deleteSongAction, openModalSongUpdateAction }),
)(songsCard);

// TUT memakai map
// {DataTv.map((detailData, index) => {
//     return<h1>{detailData.title}</h1>
// })}
