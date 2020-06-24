import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import { AppBar, Toolbar, Avatar, Grid, Typography } from '@material-ui/core';
import { compose } from 'recompose';
import { connect } from 'react-redux';
import ReactJkMusicPlayer from 'react-jinke-music-player';
import 'react-jinke-music-player/assets/index.css';

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
  },
  Avatar: {
    width: '50px',
    height: '50px',
  },
  judul: {
    marginRight: 1088,
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
    const { song } = this.props.getDetailSongReducer;
    const { userState } = this.props.authReducer;
    return (
      <div>
        {/* {console.log(song.musicLink)} */}
        {this.state.musicPlayerShow && userState.subscribe && song.length > 0 ? (
          <ReactJkMusicPlayer
            mode='full'
            theme='dark'
            glassBg
            showDownload={false}
            showThemeSwitch={false}
            toggleMode={false}
            audioLists={song}
            clearPriorAudioLists={true}
          />
        ) : null}
      </div>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    getDetailSongReducer: state.getDetailSongReducer,
    authReducer: state.authReducer,
  };
};
export default compose(withStyles(styles), connect(mapStateToProps, null))(musicPlayer);
