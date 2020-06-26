import React, { Component } from 'react';
import './App.css';
import CssBaseline from '@material-ui/core/CssBaseline';
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';
import Navbar from './components/nav';
import MusicPlayer from './components/musicPlayer';
import Home from './pages/Home';
import Profile from './pages/profilePage';
import Upgrade from './pages/upgradePage';
import AddArtist from './pages/addArtist';
import AddSong from './pages/addSongs';
import SongsByArtist from './pages/songsByArtist';
import Transaction from './pages/transactionPage';
import SnackBar from '../src/components/snackBar';
import { authAction } from './redux/actions/auth_action';
import { connect } from 'react-redux';

class App extends Component {
  componentDidMount = () => {
    this.props.authAction();
  };

  render() {
    const { userState } = this.props.authReducer;
    const PrivateRouteAdmin = ({ component: Component, ...rest }) => (
      <Route
        {...rest}
        render={(props) => (userState.isAdmin && userState.isLogin ? <Component {...props} /> : <Redirect to='/' />)}
      />
    );
    const PrivateRouteUser = ({ component: Component, ...rest }) => (
      <Route {...rest} render={(props) => (userState.isLogin ? <Component {...props} /> : <Redirect to='/' />)} />
    );
    return (
      <Router>
        <div>
          <CssBaseline />
          <Navbar />
          <SnackBar />
          <Switch>
            <PrivateRouteUser path='/artist/songs' component={SongsByArtist} />
            <PrivateRouteAdmin path='/transactions' component={Transaction} />
            <PrivateRouteAdmin path='/add-artist' component={AddArtist} />
            <PrivateRouteAdmin path='/add-song' component={AddSong} />
            <PrivateRouteUser path='/upgrade' component={Upgrade} />
            <PrivateRouteUser path='/profile' component={Profile} />
            <Route path='/' component={Home} />
          </Switch>
          <MusicPlayer />
        </div>
      </Router>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    authReducer: state.authReducer,
  };
};
export default connect(mapStateToProps, { authAction })(App);
