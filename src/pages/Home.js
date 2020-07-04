import React, { Component } from 'react';
import HeaderHome from '../components/headerHome';
import SongsCard from '../components/songsCard';
import UpdateSongModal from '../components/updateSongModal';

class Home extends Component {
  render() {
    return (
      <>
        <HeaderHome />
        <UpdateSongModal />
        <SongsCard />
      </>
    );
  }
}
export default Home;
