import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import { AppBar, Toolbar, Avatar, Grid, Typography } from '@material-ui/core';
import { compose } from 'recompose';
import { connect } from 'react-redux';
import ReactPlayer from 'react-player';

const styles = (theme) => ({
  appBar: {
    width: '100%',
    height: 85,
    backgroundColor: '#2e2d2d',
    position: 'fixed',
    top: 'auto',
    bottom: 0,
  },
  player: {
    // marginTop: 42,
    marginRight: 485,
  },
  Avatar: {
    width: '50px',
    height: '50px',
    marginLeft: 295,
    marginTop: 20,
  },
  judul: {
    marginRight: 1088,
    marginBottom: 10,
    marginTop: 20,
  },
});

class musicPlayer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      musicPlayerShow: true,
    };
  }
  render() {
    const { classes } = this.props;
    return (
      <div>
        {this.state.musicPlayerShow && (
          <AppBar position='fixed' color='primary' className={classes.appBar}>
            <Toolbar>
              <Grid container direction='row' justify='flex-start' alignItems='center'>
                <Grid item xs>
                  <Avatar alt='Lisa Pacar Elco' src='https://i.imgur.com/woAAzCF.jpg' className={classes.Avatar} />
                </Grid>
                <Grid item xs>
                  <Grid container direction='column' justify='center' alignItems='center'>
                    <Grid item xs>
                      <Typography className={classes.judul}>Judul</Typography>
                    </Grid>
                    <Grid item xs>
                      <ReactPlayer
                        height={'18px'}
                        url='https://freesound.org/data/previews/262/262254_989468-lq.mp3'
                        controls={true}
                        className={classes.player}
                      />
                    </Grid>
                  </Grid>
                </Grid>
              </Grid>
            </Toolbar>
          </AppBar>
        )}
      </div>
    );
  }
}
export default compose(withStyles(styles), connect(null, null))(musicPlayer);
