import React, { Component } from 'react';

import { AppBar, Toolbar, Button, Grid, Avatar } from '@material-ui/core';
import { PersonOutline, Payment, ExitToApp, Receipt, Album, EmojiPeople } from '@material-ui/icons';
import { withStyles } from '@material-ui/core/styles';

import { Redirect } from 'react-router-dom';

import LOGO from '../img/dumbsound.png';
import Segitiga from '../img/decor/segitiga.png';

import LoginModal from './loginModal';
import RegisterModal from './registerModal';

import { Link } from 'react-router-dom';
import ModalDetailArtist from '../components/modalDetailArtist';

import { compose } from 'recompose';
import { connect } from 'react-redux';

import { openModalRegister, openModalLogin } from '../redux/actions/modal_actions';
import { authAction, logoutUser } from '../redux/actions/auth_action';

import { searchSongsAction, clearPlaylist } from '../redux/actions/song_actions';

class nav extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLogin: false,
      isAdmin: false,
      isMenu: false,
      scrolling: 0,
      inputSearch: '',
      redirect: false,
    };
  }
  componentDidMount() {
    window.addEventListener('scroll', this.handleScroll);
    const isLogin = localStorage.getItem('isLogin');
    const isAdmin = localStorage.getItem('isAdmin');
    if (isLogin === 'false') {
      this.setState({
        isLogin: false,
      });
    }
    if (isAdmin === 'false') {
      this.setState({
        isAdmin: false,
      });
    }
    if (isLogin === 'true') {
      this.setState({
        isLogin: true,
      });
    }
    if (isAdmin === 'true') {
      this.setState({
        isAdmin: true,
      });
    }
    // Fungsi detetct scroll
    window.onscroll = () => {
      this.setState({
        scrolling: window.pageYOffset,
      });
    };
  }
  // fungsi stop event saat scroll berhenti
  componentWillUnmount() {
    window.onscroll = null;
  }

  dropdownMenu = () => {
    if (this.state.isMenu === false) {
      this.setState({
        isMenu: true,
      });
    } else {
      this.setState({
        isMenu: false,
      });
    }
  };

  logutAccount = () => {
    localStorage.removeItem('token');
    this.setState({
      isMenu: false,
    });
    this.props.clearPlaylist();
    this.props.logoutUser();
  };
  logutAdminAccount = () => {
    localStorage.removeItem('token');
    this.setState({
      isMenu: false,
    });
    this.props.logoutUser();
  };

  loginAdmin = () => {
    if (this.state.isAdmin === false) {
      localStorage.setItem('isAdmin', true);
      localStorage.setItem('isLogin', false);
      this.getDataLocalStorage();
    } else {
      localStorage.setItem('isAdmin', false);
      localStorage.setItem('isLogin', false);
      this.getDataLocalStorage();
    }
  };

  // ngambil data localstorage
  getDataLocalStorage = () => {
    const isLogin = localStorage.getItem('isLogin');
    const isAdmin = localStorage.getItem('isAdmin');
    if (isLogin === 'false') {
      this.setState({
        isLogin: false,
      });
    }
    if (isAdmin === 'false') {
      this.setState({
        isAdmin: false,
      });
    }
    if (isLogin === 'true') {
      this.setState({
        isLogin: true,
      });
    }
    if (isAdmin === 'true') {
      this.setState({
        isAdmin: true,
      });
    }

    console.log(isLogin, isAdmin);
  };

  handleConfirmSearch = async (event) => {
    if (event.key === 'Enter') {
      if (this.state.inputSearch === '') {
      } else {
        await this.props.searchSongsAction(this.state.inputSearch);
        await this.setState({ redirect: true });
        await this.setState({ redirect: false });
      }
    }
  };
  handleChangeText = (event) => {
    this.setState({ inputSearch: event.target.value });
  };

  render(props) {
    const { classes } = this.props;
    const { userState, loading } = this.props.authReducer;
    const isLoginUserState = userState ? userState.isLogin : false;
    const isAdminState = userState ? userState.isAdmin : false;
    return (
      <div className={classes.divRoot}>
        {this.state.redirect ? <Redirect to={'/search'} /> : null}
        <LoginModal sendDataIsLogin={this.getDataFromModalComponent} ref={this.loginModalRef}></LoginModal>
        <RegisterModal ref={this.RegisterModalRef}></RegisterModal>
        <ModalDetailArtist />
        <AppBar className={this.state.scrolling >= 100 ? classes.AppBarScrool : classes.AppBar}>
          <Toolbar className={classes.Toolbar}>
            <Grid container direction='row' justify='left' alignItems='center'>
              <Link className={classes.Link} to='/'>
                <Button className={classes.ButtonAvatar}>
                  <img src={LOGO} className={classes.imgLogo} alt='Brand' />
                </Button>
              </Link>
            </Grid>
            {isLoginUserState ? (
              <Grid container direction='row' justify='left' alignItems='center'>
                <input
                  value={this.state.inputSearch}
                  onKeyPress={(event) => this.handleConfirmSearch(event)}
                  onChange={(event) => this.handleChangeText(event)}
                  placeholder='Search...'
                  className={classes.searchBox}
                />
              </Grid>
            ) : null}
            <Grid container direction='row' justify='flex-end' alignItems='center'>
              {/* AVA dan dropdown menu client, serta logic button login register untuk client dan admin */}
              {isLoginUserState && !isAdminState ? (
                <div>
                  <Button onClick={this.dropdownMenu} className={classes.ButtonAvatar}>
                    <Avatar alt='Elco Lebih Ganteng' src='https://i.imgur.com/WcVXGbM.jpg' className={classes.Avatar} />
                  </Button>
                  {this.state.isMenu ? (
                    <div className={classes.divBase}>
                      <div className={classes.divBaseFloatingDecor}>
                        <img src={Segitiga} alt='segitiga' />
                      </div>
                      <div className={userState.subscribe ? classes.divBaseFloatingMenuNoPay : classes.divBaseFloatingMenu}>
                        <Link className={classes.Link} to='/profile'>
                          <Button onClick={this.dropdownMenu} className={classes.buttonMenuProfile}>
                            <PersonOutline className={classes.IconMenu} />
                            <b className={classes.LabelMenu}>Profile</b>
                          </Button>
                        </Link>
                        {userState.subscribe ? null : (
                          <Link className={classes.Link} to='/upgrade'>
                            <Button onClick={this.dropdownMenu} className={classes.buttonMenuPay}>
                              <Payment className={classes.IconMenu} />
                              <b className={classes.LabelMenu}>Pay</b>
                            </Button>
                          </Link>
                        )}

                        <Button className={classes.buttonMenuPay}></Button>
                        <div className={classes.borderMenuDropdown}></div>
                        <Link className={classes.Link} to='/'>
                          <Button onClick={this.logutAccount} className={classes.buttonMenuLogout}>
                            <ExitToApp className={classes.IconMenu} />
                            <b className={classes.LabelMenu}>Logout</b>
                          </Button>
                        </Link>
                      </div>
                    </div>
                  ) : (
                    <div />
                  )}
                </div>
              ) : (
                <div>
                  {isAdminState ? (
                    <div></div>
                  ) : loading ? (
                    'AUTHENTICATING ....'
                  ) : (
                    <>
                      <Button onClick={this.props.openModalRegister} variant='contained' className={classes.ButtonRegister}>
                        Register
                      </Button>

                      <Button
                        onClick={this.props.openModalLogin}
                        variant='contained'
                        color='secondary'
                        className={classes.ButtonLogin}
                      >
                        Login
                      </Button>
                    </>
                  )}
                </div>
              )}
              {/* Aavatar dan dropdown menu untu admin */}
              {isAdminState ? (
                <div>
                  {/* Search and avatar */}
                  <Button onClick={this.dropdownMenu} className={classes.ButtonAvatar}>
                    <Avatar alt='Lisa Pacar Elco' src='https://i.imgur.com/woAAzCF.jpg' className={classes.Avatar} />
                  </Button>
                  {this.state.isMenu ? (
                    <div className={classes.divBase}>
                      <div className={classes.divBaseFloatingDecor}>
                        <img src={Segitiga} alt='segitiga' />
                      </div>
                      <div className={classes.divBaseFloatingMenuAdmin}>
                        <Link className={classes.Link} to='/add-artist'>
                          <Button onClick={this.dropdownMenu} className={classes.buttonMenuAdmin}>
                            <EmojiPeople className={classes.IconMenu} />
                            <b className={classes.LabelMenu}>Add Artist</b>
                            <div className={classes.divSpacerMenuAddArtist} />
                          </Button>
                        </Link>
                        <Link className={classes.Link} to='/add-song'>
                          <Button onClick={this.dropdownMenu} className={classes.buttonMenuAdmin}>
                            <Album className={classes.IconMenu} />
                            <b className={classes.LabelMenu}>Add Song</b>
                            <div className={classes.divSpacerMenuAddSong} />
                          </Button>
                        </Link>
                        <Link className={classes.Link} to='/transactions'>
                          <Button onClick={this.dropdownMenu} className={classes.buttonMenuAdmin}>
                            <Receipt className={classes.IconMenu} />
                            <b className={classes.LabelMenu}>Transactions</b>
                          </Button>
                        </Link>
                        <Button className={classes.buttonMenuPay}></Button>
                        <div className={classes.borderMenuDropdown}></div>
                        <Link className={classes.Link} to='/'>
                          <Button onClick={this.logutAdminAccount} className={classes.buttonMenuLogout}>
                            <ExitToApp className={classes.IconMenu} />
                            <b className={classes.LabelMenu}>Logout</b>
                          </Button>
                        </Link>
                      </div>
                    </div>
                  ) : (
                    <div />
                  )}
                </div>
              ) : (
                <></>
              )}
            </Grid>
          </Toolbar>
        </AppBar>
      </div>
    );
  }
}

const styles = (theme) => ({
  marginAutoItem: {},
  searchBox: {
    outline: 0,
    width: '100%',
    height: 30,
    backgroundColor: '#4C4C4C',
    color: 'white',
    borderRadius: 5,
    border: '2px solid white',
    paddingLeft: 10,
    paddingRight: 10,
    '&:focus': {
      border: '2px solid #EE4622',
      height: 40,
    },
  },
  divBase: {
    position: 'relative',
    width: 'auto',
  },
  divBaseFloatingDecor: {
    position: 'absolute',
    top: '1px',
    left: '7px',
    width: 'auto',
    height: 'auto',
  },
  divBaseFloatingMenu: {
    backgroundColor: '#1F1F1F',
    position: 'absolute',
    top: '36px',
    left: '-150%',
    width: '178px',
    height: '187px',
    borderRadius: '10px',
  },
  divBaseFloatingMenuNoPay: {
    backgroundColor: '#1F1F1F',
    position: 'absolute',
    top: '36px',
    left: '-150%',
    width: '178px',
    height: 131,
    borderRadius: '10px',
  },
  divBaseFloatingMenuAdmin: {
    backgroundColor: '#1F1F1F',
    position: 'absolute',
    top: '36px',
    left: '-187%',
    width: 200,
    height: '201',
    borderRadius: '10px',
  },
  AppBar: {
    background: 'transparent',
    boxShadow: 'none',
    height: '70px',
    width: '100%',
  },
  AppBarScrool: {
    background: '#161616',
    boxShadow: 3,
    height: '70px',
    width: '100%',
  },
  Toolbar: {
    height: '70px',
    position: 'relative',
    background: 'transparent',
  },
  ButtonLogin: {
    height: '30px',
    width: '100px',
    margin: '10px',
    background: '#E50914',
    color: 'white',
  },
  ButtonRegister: {
    color: '#E50914',
    height: '30px',
    width: '100px',
    margin: '10px',
  },
  Box: {
    margin: '10px',
  },
  Link: {
    textDecoration: 'none',
    color: 'white',
    fontWeight: 'bold',
    fontSize: '14px',
  },
  Avatar: {
    width: '50px',
    height: '50px',
  },
  ButtonAvatar: {
    marginRight: '0',
  },
  PositionSegitiga: {
    left: '10%',
    top: '10&',
  },

  IconMenu: {
    fontSize: 40,
    color: '#E50914',
  },
  LabelMenu: {
    fontSize: 18,
    color: 'white',
  },
  buttonMenuProfile: {
    width: 170,
    paddingRight: 50,
  },
  buttonMenuPay: {
    width: 170,
    paddingRight: 90,
  },
  borderMenuDropdown: {
    width: 200,
    height: 2,
    backgroundColor: 'gray',
  },
  buttonMenuLogout: {
    width: 174,
    paddingRight: 53,
  },
  buttonMenuFilm: {
    width: 220,
    paddingRight: 84,
  },
  buttonMenuReceipt: {
    width: 220,
    paddingRight: 67,
  },
  buttonMenuAdmin: {
    width: 256,
    paddingRight: 67,
  },
  imgLogo: {
    height: 40,
  },
  divRoot: {
    background: 'transparent',
  },
  divSpacerMenuAddArtist: {
    width: 34,
  },
  divSpacerMenuAddSong: {
    width: 48,
  },
});

const mapStateToProps = (state) => {
  return {
    userReducer: state.userReducer,
    authReducer: state.authReducer,
  };
};
export default compose(
  withStyles(styles),
  connect(mapStateToProps, { openModalRegister, openModalLogin, authAction, logoutUser, searchSongsAction, clearPlaylist }),
)(nav);
