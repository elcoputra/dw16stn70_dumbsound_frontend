import React, { Component } from 'react';
import { Grid, Card, CardActionArea, Typography } from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';
import { Link } from 'react-router-dom';
import { getDataSongsAction, getDetailSongAction } from '../redux/actions/song_actions';
import { compose } from 'recompose';
import { connect } from 'react-redux';

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
  Img: {
    maxWidth: 165,
    minWidth: 165,
    maxHeight: 152,
    minHeight: 152,
    objectFit: 'cover',
    objectPosition: 'center',
    marginTop: 13,
  },
  CardActionArea: {
    maxWidth: '200px',
    backgroundColor: '#3a3a3a',
    // color: '#000000',
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
});
class songsCardByArtist extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isAdmin: false,
    };
  }

  render(props) {
    const { classes } = this.props;
    const { songsByArtist, loadingSongsByArtist } = this.props.getSongsByArtistReducer;
    const { userState } = this.props.authReducer;
    return (
      <div>
        {loadingSongsByArtist ? (
          <div style={{ color: 'white' }}>loading...</div>
        ) : (
          <Grid className={classes.gridBase} container direction='column' justify='flex-start' alignItems='flex-start'>
            <Grid item xs classes={{ root: classes.rootGridTitle }}></Grid>
            <Grid item xs>
              <Grid
                className={classes.gridCard}
                spacing={4}
                container
                direction='row'
                justify='flex-start'
                alignItems='flex-start'
              >
                {songsByArtist
                  ? songsByArtist.map((detailData) => {
                      return (
                        <div className={classes.Div}>
                          <Grid item xs>
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
                                  <img src={detailData.thumbnailLink} alt='asdawda' className={classes.Img} />
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
                          </Grid>
                        </div>
                      );
                    })
                  : 'Data Crash'}
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
const mapStateToProps = (state) => {
  return {
    getSongsByArtistReducer: state.getSongsByArtistReducer,
    authReducer: state.authReducer,
  };
};
export default compose(
  withStyles(styles),
  connect(mapStateToProps, { getDataSongsAction, getDetailSongAction }),
)(songsCardByArtist);

// TUT memakai map
// {DataTv.map((detailData, index) => {
//     return<h1>{detailData.title}</h1>
// })}
