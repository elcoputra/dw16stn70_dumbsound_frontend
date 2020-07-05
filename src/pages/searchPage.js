import React, { Component } from 'react';
import SongsCard from '../components/songsCard';
import UpdateSongModal from '../components/updateSongModal';
import { connect } from 'react-redux';

class Search extends Component {
  render() {
    return (
      <>
        <div style={{ height: 70 }} />
        <UpdateSongModal />
        <SongsCard />
      </>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    authReducer: state.authReducer,
  };
};
export default connect(mapStateToProps)(Search);
