import React, { Component } from 'react';
import HeaderSongsByArtist from '../components/headerSongsByArtist';
import SongsCardByArtist from '../components/songsCardByArtist';

class songsByArtist extends Component {
  render() {
    return (
      <>
        <HeaderSongsByArtist />
        <SongsCardByArtist />
      </>
    );
  }
}
export default songsByArtist;
