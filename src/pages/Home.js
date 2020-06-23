import React, { Component } from 'react';
import HeaderHome from '../components/headerHome';
import SongsCard from '../components/songsCard';

class Home extends Component {
  render() {
    return (
      <div>
        <HeaderHome />
        <SongsCard />
      </div>
    );
  }
}
export default Home;
