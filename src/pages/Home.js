import React, { Component } from 'react';
import HeaderHome from '../components/headerHome';
import SongsCard from '../components/songsCard';
import ModalDetailArtist from '../components/modalDetailArtist';

class Home extends Component {
  render() {
    return (
      <>
        <HeaderHome />
        <ModalDetailArtist />
        <SongsCard />
      </>
    );
  }
}
export default Home;
