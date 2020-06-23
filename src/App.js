import React, { Component } from 'react';
import './App.css';
import CssBaseline from '@material-ui/core/CssBaseline';
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';
import Navbar from './components/nav';
import Home from './pages/Home';
import TVShows from './pages/TvShowsPage';
import Movies from './pages/MoviesPage';
import DetailPlayer from './pages/detailPlayer';
import Profile from './pages/profilePage';
import Upgrade from './pages/upgradePage';
import AddFilm from './pages/addFilm';
import ListFilm from './pages/listFilm';
import Transaction from './pages/transactionPage';
import learn from './pages/learnREDUX';
import { authAction } from './redux/actions/auth_action';
import { connect } from 'react-redux';

class App extends Component {
  componentDidMount = () => {
    this.props.authAction();
  };

  render() {
    const { userState } = this.props.authReducer;
    const PrivateRouteAdmin = ({ component: Component, ...rest }) => (
      <Route {...rest} render={(props) => (userState.isAdmin === true ? <Component {...props} /> : <Redirect to='/' />)} />
    );
    const PrivateRouteUser = ({ component: Component, ...rest }) => (
      <Route {...rest} render={(props) => (userState.isLogin === true ? <Component {...props} /> : <Redirect to='/' />)} />
    );
    const PrivateRouteSubscribe = ({ component: Component, ...rest }) => (
      <Route
        {...rest}
        render={(props) =>
          userState.isLogin === true && userState.subscribe === true ? <Component {...props} /> : <Redirect to='/upgrade' />
        }
      />
    );
    return (
      <Router>
        <div>
          <CssBaseline />
          <Navbar />
          <Switch>
            <PrivateRouteAdmin path='/transactions' component={Transaction} />
            <Route path='/learn' component={learn} />
            <Route path='/add-movie' component={AddFilm} />
            <PrivateRouteUser path='/movies' component={ListFilm} />
            <PrivateRouteUser path='/upgrade' component={Upgrade} />
            <PrivateRouteUser path='/profile' component={Profile} />
            <PrivateRouteSubscribe path='/detail' component={DetailPlayer} />
            <PrivateRouteUser path='/tv' component={TVShows} />
            <PrivateRouteAdmin path='/moviess' component={Movies} />

            <Route path='/' component={Home} />
          </Switch>
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
