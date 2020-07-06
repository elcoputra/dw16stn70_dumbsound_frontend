import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import { Modal, Backdrop, Fade, Box, Grid, TextField, Button, Link } from '@material-ui/core';
import RegisterModal from './registerModal';
import { closeModalLogin } from '../redux/actions/modal_actions';
import { loginAction } from '../redux/actions/account_action';
import { compose } from 'recompose';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';

class loginModal extends Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
      isLogin: false,
      open: false,
      email: '',
      password: '',
      token: '',
      user: {},
    };
  }
  componentDidMount() {}
  handleButtonLogin = () => {
    this.props.loginAction(this.state.user);
    this.setState({
      user: {},
    });
  };
  handleInputChange = (event) => {
    const { user } = this.state;
    this.setState({
      user: { ...user, [event.target.name]: event.target.value },
    });
  };

  render() {
    const { classes } = this.props;
    const { error } = this.props.userReducer;
    const { userState, loading } = this.props.authReducer;

    const errorHandling = error && error.data ? error.data.error : null;
    const errorMessageHandling = error && error.data ? error.data.message : null;
    const isSubscribeState = userState ? userState.subscribe : false;
    const isLoginState = userState ? userState.isLogin : false;

    if (!loading && isLoginState && !isSubscribeState) return <Redirect to='/Upgrade' />;

    return (
      <div>
        <RegisterModal ref={this.RegisterModalRef}></RegisterModal>
        <Modal
          className={classes.modal}
          open={this.props.modalLogin}
          onClose={this.props.closeModalLogin}
          closeAfterTransition
          BackdropComponent={Backdrop}
          BackdropProps={{
            timeout: 500,
          }}
        >
          <Fade in={this.props.modalLogin}>
            <Box className={classes.Box}>
              <form>
                <b className={classes.Title}>Login</b>
                <div className={classes.errorResponse}>
                  {errorHandling}
                  <br />
                  {errorMessageHandling}
                </div>
                <Grid className={classes.GridInput} container direction='column' justify='center' alignItems='center'>
                  <Grid item xs={12}>
                    <TextField
                      id='email-login'
                      label='Email'
                      type='email'
                      name='email'
                      value={this.state.user.email}
                      onChange={this.handleInputChange}
                      className={classes.textField}
                      margin='normal'
                      variant='outlined'
                      InputLabelProps={{
                        classes: {
                          root: classes.cssLabel,
                          focused: classes.cssFocused,
                        },
                      }}
                      InputProps={{
                        classes: {
                          root: classes.cssOutlinedInput,
                          focused: classes.cssFocused,
                          notchedOutline: classes.notchedOutline,
                        },
                      }}
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <TextField
                      id='password-login'
                      label='Password'
                      type='password'
                      name='password'
                      value={this.state.user.password}
                      onChange={this.handleInputChange}
                      className={classes.textField}
                      margin='normal'
                      variant='outlined'
                      InputLabelProps={{
                        classes: {
                          root: classes.cssLabel,
                          focused: classes.cssFocused,
                        },
                      }}
                      InputProps={{
                        classes: {
                          root: classes.cssOutlinedInput,
                          focused: classes.cssFocused,
                          notchedOutline: classes.notchedOutline,
                        },
                      }}
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <Button onClick={this.handleButtonLogin} variant='contained' className={classes.ButtonLogin}>
                      Login
                    </Button>
                  </Grid>
                  <Grid item xs className={classes.GridClickHere}>
                    Don't have an account ? Klik
                    <Link className={classes.LinkCliclHere} href='#' onClick={this.openRegister}>
                      <b> Here</b>
                    </Link>
                  </Grid>
                </Grid>
              </form>
            </Box>
          </Fade>
        </Modal>
      </div>
    );
  }
}
const styles = (theme) => ({
  modal: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    outline: 'none',
  },
  Box: {
    backgroundColor: 'black',
    opacity: '100%',
    width: '416px',
    height: '408px',
    borderRadius: '10px',

    paddingTop: '30px',
    paddingBottom: '30px',
    paddingLeft: '25px',
    paddingRight: '25px',
  },
  Title: {
    color: '#FFFFFF',
    fontSize: '36px',
  },
  GridInput: {
    color: '#B1B1B1',
  },
  textField: {
    background: 'rgba(210, 210, 210, 0.25)',
    marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit,
    width: 350,
  },

  cssLabel: {
    color: '#B1B1B1',
  },

  cssOutlinedInput: {
    '&$cssFocused $notchedOutline': {
      borderColor: `red !important`,
    },
  },

  cssFocused: {
    color: 'white',
  },

  notchedOutline: {
    borderWidth: '2px',
    borderColor: 'white !important',
  },
  ButtonLogin: {
    height: '50px',
    width: '350px',
    fontSize: '18pxx',
    background: '#E50914',
    marginTop: '10px',
    color: 'white',
    '&:hover': {
      //you want this to be the same as the backgroundColor above
      backgroundColor: '#870303',
    },
  },
  GridClickHere: {
    marginTop: '50px',
  },
  LinkCliclHere: {
    color: 'red',
  },
  errorResponse: {
    color: 'white',
  },
});

const mapStateToProps = (state) => {
  return {
    modalLogin: state.modalLoginReducer.loginModalOpen,
    userReducer: state.userReducer,
    authReducer: state.authReducer,
  };
};

export default compose(withStyles(styles), connect(mapStateToProps, { closeModalLogin, loginAction }))(loginModal);
