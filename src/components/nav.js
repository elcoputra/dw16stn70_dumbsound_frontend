import React, { Component } from 'react';
import { AppBar, Box, Toolbar, Button, Grid, Avatar } from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';
import LOGO from '../img/dumbsound.png';
import LoginModal from './loginModal';
import RegisterModal from './registerModal';
import { Link } from 'react-router-dom';
import Segitiga from '../img/decor/segitiga.png';
import { PersonOutline, Payment, ExitToApp, Movie, Receipt } from '@material-ui/icons';
import { compose } from 'recompose';
import { connect } from 'react-redux';
import { openModalRegister, openModalLogin } from '../redux/actions/modal_actions';
import { authAction, logoutUser } from '../redux/actions/auth_action';

const styles = (theme) => ({
  marginAutoItem: {},
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
  divBaseFloatingMenuAdmin: {
    backgroundColor: '#1F1F1F',
    position: 'absolute',
    top: '36px',
    left: '-145%',
    width: '178',
    height: '180px',
    borderRadius: '10px',
  },
  AppBar: {
    background: 'transparent',
    boxShadow: 'none',
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
    width: 220,
    paddingRight: 50,
  },
  buttonMenuPay: {
    width: 220,
    paddingRight: 90,
  },
  borderMenuDropdown: {
    width: 178,
    height: 2,
    backgroundColor: 'gray',
  },
  buttonMenuLogout: {
    width: 220,
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
  imgLogo: {
    height: 40,
  },
  divRoot: {
    background: 'transparent',
  },
});

class nav extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLogin: false,
      isAdmin: false,
      isMenu: false,
    };

    // this.getDataFromModalComponent = this.getDataFromModalComponent.bind(this);
  }
  componentDidMount() {
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
  }

  // loginModalRef = ({ handleOpenLogin }) => {
  //   this.showModalLogin = handleOpenLogin;
  // };
  // RegisterModalRef = ({ handleOpenRegister }) => {
  //   this.showModalRegister = handleOpenRegister;
  // };

  // onLoginClick = () => {
  //   this.showModalLogin();
  // };
  // onRegisterClick = () => {
  //   this.showModalRegister();
  // };
  // getDataFromModalComponent = (isLoginFromLoginModal) => {
  //   this.setState({
  //     isLogin: isLoginFromLoginModal,
  //   });
  // };

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

  render(props) {
    const { classes } = this.props;
    const { isLogin } = this.props.userReducer;
    const { userState, loading } = this.props.authReducer;
    const isLoginUserState = userState ? userState.isLogin : false;
    const isAdminState = userState ? userState.isAdmin : false;
    return (
      <div className={classes.divRoot}>
        <LoginModal sendDataIsLogin={this.getDataFromModalComponent} ref={this.loginModalRef}></LoginModal>
        <RegisterModal ref={this.RegisterModalRef}></RegisterModal>
        <AppBar className={classes.AppBar}>
          <Toolbar className={classes.Toolbar}>
            {/* <Grid container direction='row' justify='flex-start' alignItems='center'>
              <Box className={classes.Box}>
                <Link className={classes.Link} to='/'>
                  Home
                </Link>
              </Box>
              <Box className={classes.Box}>
                <Link className={classes.Link} to='/tv'>
                  TV Shows
                </Link>
              </Box>
              <Box className={classes.Box}>
                <Link className={classes.Link} to='/moviess'>
                  Movies
                </Link>
              </Box>
            </Grid> */}
            <Grid container direction='row' justify='left' alignItems='center'>
              <Link className={classes.Link} to='/'>
                <Button className={classes.ButtonAvatar}>
                  <img src={LOGO} className={classes.imgLogo} alt='Brand' />
                </Button>
              </Link>
            </Grid>
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
                      <div className={classes.divBaseFloatingMenu}>
                        <Link className={classes.Link} to='/profile'>
                          <Button onClick={this.dropdownMenu} className={classes.buttonMenuProfile}>
                            <PersonOutline className={classes.IconMenu} />
                            <b className={classes.LabelMenu}>Profile</b>
                          </Button>
                        </Link>
                        <Link className={classes.Link} to='/upgrade'>
                          <Button onClick={this.dropdownMenu} className={classes.buttonMenuPay}>
                            <Payment className={classes.IconMenu} />
                            <b className={classes.LabelMenu}>Pay</b>
                          </Button>
                        </Link>
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
                  <Button onClick={this.dropdownMenu} className={classes.ButtonAvatar}>
                    <Avatar alt='Lisa Pacar Elco' src='https://i.imgur.com/woAAzCF.jpg' className={classes.Avatar} />
                  </Button>
                  {this.state.isMenu ? (
                    <div className={classes.divBase}>
                      <div className={classes.divBaseFloatingDecor}>
                        <img src={Segitiga} alt='segitiga' />
                      </div>
                      <div className={classes.divBaseFloatingMenuAdmin}>
                        <Link className={classes.Link} to='/movies'>
                          <Button onClick={this.dropdownMenu} className={classes.buttonMenuFilm}>
                            <Movie className={classes.IconMenu} />
                            <b className={classes.LabelMenu}>Film</b>
                          </Button>
                        </Link>
                        <Link className={classes.Link} to='/transactions'>
                          <Button onClick={this.dropdownMenu} className={classes.buttonMenuReceipt}>
                            <Receipt className={classes.IconMenu} />
                            <b className={classes.LabelMenu}>Trans</b>
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
const mapStateToProps = (state) => {
  return {
    userReducer: state.userReducer,
    authReducer: state.authReducer,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    openModalRegister: () => dispatch(openModalRegister()),
    openModalLogin: () => dispatch(openModalLogin()),
    authAction: () => dispatch(authAction()),
    logoutUser: () => dispatch(logoutUser()),
  };
};
export default compose(withStyles(styles), connect(mapStateToProps, mapDispatchToProps))(nav);
