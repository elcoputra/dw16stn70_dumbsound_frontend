import React, { Component } from 'react';
import HeaderHome from '../components/headerHome';
import SongsCard from '../components/songsCard';

class Home extends Component {
  // componentDidMount = () => {
  //   window.addEventListener('scroll', this.handleScroll);
  // };

  // componentWillUnmount = () => {
  //   window.removeEventListener('scroll', this.handleScroll);
  // };

  // handleScroll = (event) => {
  //   let scrollTop = event.srcElement.body.scrollTop,
  //     itemTranslate = Math.min(0, scrollTop / 3 - 60);

  //   console.log(itemTranslate);

  //   // this.setState({
  //   //   transform: itemTranslate
  //   // });
  // };

  render() {
    return (
      <>
        <HeaderHome />
        <SongsCard />
      </>
    );
  }
}
export default Home;
