import React, { Component } from 'react';
import { Grid, Card, CardActionArea, Typography } from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';
import { Link } from 'react-router-dom';
// import { getDataTv, getDetailMovie } from '../redux/actions/movie_action';
// import { getDataEpisodes } from '../redux/actions/episode_action';
import { getDataSongsAction } from '../redux/actions/song_actions';
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
    // backgroundColor: 'black',
    // color: 'black',
  },
  //   CardMedia: {
  //     width: "100%",
  //     maxWidth: "200px",
  //     minWidth: "200px",
  //     height: "100%",
  //     maxHeight: "300px",
  //     minHeight: "300px",
  //   },
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
class songsCard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isAdmin: false,
    };
  }
  componentDidMount() {
    this.props.getDataSongsAction();
    console.log(this.props.getDataSongsReducer.songs);
    // const isAdmin = localStorage.getItem('isAdmin');
    // if (isAdmin === 'true') {
    //   this.setState({
    //     isAdmin: true,
    //   });
    // }
    // if (isAdmin === 'false') {
    //   this.setState({
    //     isAdmin: false,
    //   });
    // }
    // console.log('didmount');
    // console.log('Data Dari Storage' + isAdmin);
  }

  render(props) {
    const { classes } = this.props;
    const { songs, loading } = this.props.getDataSongsReducer;
    return (
      <div>
        {loading ? (
          <div style={{ color: 'white' }}>loading...</div>
        ) : (
          <Grid className={classes.gridBase} container direction='column' justify='flex-start' alignItems='flex-start'>
            <Grid item xs classes={{ root: classes.rootGridTitle }}>
              <Grid container spacing={0} direction='row' alignItems='center' justify='center'>
                <b className={classes.title}>Dengarkan Dan Rasakan</b>
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
                {songs.slice(this.props.init, this.props.end).map((detailData) => {
                  return (
                    <div className={classes.Div}>
                      <Grid item xs>
                        <Card classes={{ root: classes.rootCard }} className={classes.Card}>
                          <CardActionArea className={classes.CardActionArea}>
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
                })}
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
    getDataSongsReducer: state.getDataSongsReducer,
  };
};
export default compose(withStyles(styles), connect(mapStateToProps, { getDataSongsAction }))(songsCard);

// TUT memakai map
// {DataTv.map((detailData, index) => {
//     return<h1>{detailData.title}</h1>
// })}
