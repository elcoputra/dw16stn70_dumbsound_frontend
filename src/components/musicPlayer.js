import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import { connect } from 'react-redux';
import { clearPlaylist } from '../redux/actions/song_actions';
import { getArtistBySongAction } from '../redux/actions/artist_action';
import ReactJkMusicPlayer from 'react-jinke-music-player';
import 'react-jinke-music-player/assets/index.css';
import './musicPlayer.css';

class musicPlayer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      musicPlayerShow: true,
      // data index playlist paling akhir
      playIndex: 0,
    };
  }
  onAudioListsChange = (currentPlayId, audioLists, audioInfo) => {
    // kalo playlist kosong, jalanin action kosongin juga reducer state
    if (audioLists.length === 0) {
      this.props.clearPlaylist();
    }
    this.setState({
      playIndex: audioLists.length - 1,
    });
  };

  onCoverClick = (mode, audioLists, audioInfo) => {
    // console.log(audioInfo.name);
    this.props.getArtistBySongAction(audioInfo.name);
  };
  render() {
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
            showProgressLoadBar={true}
            // clear playlist dan ganti dengan playlist yang update dari redux
            clearPriorAudioLists={true}
            // kasih caback data dari player
            onAudioListsChange={(currentPlayId, audioLists, audioInfo) =>
              this.onAudioListsChange(currentPlayId, audioLists, audioInfo)
            }
            // kalo cover di click
            onCoverClick={(mode, audioLists, audioInfo) => this.onCoverClick(mode, audioLists, audioInfo)}
            // memainkan musik dari index yang baru di tambahkan
            playIndex={this.state.playIndex}
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
export default connect(mapStateToProps, { clearPlaylist, getArtistBySongAction })(musicPlayer);
