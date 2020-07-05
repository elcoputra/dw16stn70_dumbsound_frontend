import React, { Component } from 'react';
import HeaderHome from '../components/headerHome';
import SongsCard from '../components/songsCard';
import UpdateSongModal from '../components/updateSongModal';
import { connect } from 'react-redux';

import { getDataSongsAction } from '../redux/actions/song_actions';

class Home extends Component {
  componentDidMount() {
    this.props.getDataSongsAction();
  }
  render() {
    const { userState } = this.props.authReducer;
    const isLoginUserState = userState ? userState.isLogin : false;
    return (
      <>
        {isLoginUserState ? <div style={{ height: 70 }} /> : <HeaderHome />}
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
export default connect(mapStateToProps, { getDataSongsAction })(Home);
