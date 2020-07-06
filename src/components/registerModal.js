import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import {
  Modal,
  Backdrop,
  Fade,
  Box,
  Grid,
  TextField,
  Button,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
} from '@material-ui/core';
import { closeModalRegister } from '../redux/actions/modal_actions';
import { registerAction, clearError } from '../redux/actions/account_action';
import { compose } from 'recompose';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';

const styles = (theme) => ({
  // DROPDOWN
  formControl: {
    marginTop: 15,
    marginBottom: 10,
    width: 350,
    border: '2px solid white',
    fontColor: 'white',
    color: 'white',
    backgroundColor: 'rgba(210, 210, 210, 0.25)',
    laberColor: 'white',
    borderRadius: 5,
  },

  dropdownStyle: {
    border: '2px solid white',
    backgroundColor: '#353535',
    fontColor: 'white',
    color: 'white',
    laberColor: 'white',
  },
  InputLabel: {
    color: 'white',
  },
  select: {
    '&:before': {
      borderColor: 'white',
      labelColor: 'white',
      fontColor: 'white',
      color: 'white',
    },
    '&:after': {
      borderColor: 'white',
      labelColor: 'white',
      fontColor: 'white',
      color: 'white',
    },
  },
  icon: {
    fontSize: 40,
    color: 'white',
  },
  inputProps: {
    color: 'white',
    '&:before': {
      borderColor: 'white',
      labelColor: 'white',
      fontColor: 'white',
      color: 'white',
    },
    '&:after': {
      borderColor: 'white',
      labelColor: 'white',
      fontColor: 'white',
      color: 'white',
    },
  },
  // DROPDOWN END
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
    height: '680px',
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
  ButtonRegister: {
    height: '50px',
    width: '350px',
    fontSize: '18pxx',
    background: 'white',
    marginTop: '10px',
    color: 'red',
    '&:hover': {
      //you want this to be the same as the backgroundColor above
      backgroundColor: '#870303',
    },
  },
  GridClickHere: {
    marginTop: '25px',
  },
  errorResponse: {
    color: 'white',
  },
});

class registerModal extends Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
      open: false,
      data: {},
      user: { isAdmin: false, gender: 'Male' },
    };
  }
  handleOpenRegister = () => {
    this.setState({ open: true });
  };

  handleCloseRegister = () => {
    this.setState({ open: false });
  };

  handleChangeInput = (event) => {
    const { user } = this.state;
    this.setState({
      user: { ...user, [event.target.name]: event.target.value },
    });
  };

  handleSubmitRegister = async (event) => {
    this.props.registerAction(this.state.user);
    this.setState({
      user: { isAdmin: false, gender: 'Male' },
    });
  };

  render() {
    const { classes } = this.props;
    const { userState, loading } = this.props.authReducer;
    const isSubscribeState = userState ? userState.subscribe : false;
    const isLoginState = userState ? userState.isLogin : false;

    if (!loading && isLoginState && !isSubscribeState) return <Redirect to='/Upgrade' />;
    return (
      <div>
        <Modal
          className={classes.modal}
          open={this.props.modalRegister}
          onClose={this.props.closeModalRegister}
          closeAfterTransition
          BackdropComponent={Backdrop}
          BackdropProps={{
            timeout: 500,
          }}
        >
          <Fade in={this.props.modalRegister}>
            <Box className={classes.Box}>
              <b className={classes.Title}>Register</b>
              <Grid className={classes.GridInput} container direction='column' justify='center' alignItems='center'>
                <Grid item xs={12}>
                  <TextField
                    id='standard-name'
                    label='Email'
                    name='email'
                    type='email'
                    value={this.state.user.email ? this.state.user.email : ''}
                    onChange={this.handleChangeInput}
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
                    id='standard-name'
                    label='Password'
                    name='password'
                    type='password'
                    value={this.state.user.password ? this.state.user.password : ''}
                    onChange={this.handleChangeInput}
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
                    id='standard-name'
                    label='Full Name'
                    name='fullName'
                    type='string'
                    value={this.state.user.fullName ? this.state.user.fullName : ''}
                    onChange={this.handleChangeInput}
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
                  <FormControl variant='outlined' className={classes.formControl}>
                    <InputLabel className={classes.InputLabel} id='demo-simple-select-outlined-label'>
                      Gender
                    </InputLabel>
                    <Select
                      labelId='gender'
                      id='gender'
                      name='gender'
                      value={this.state.user.gender}
                      onChange={this.handleChangeInput}
                      className={classes.select}
                      inputProps={{
                        classes: {
                          icon: classes.icon,
                          root: classes.inputProps,
                        },
                      }}
                      MenuProps={{ classes: { paper: classes.dropdownStyle } }}
                    >
                      <MenuItem value='Male'>Male</MenuItem>
                      <MenuItem value='Female'>Female</MenuItem>
                    </Select>
                  </FormControl>
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    id='standard-name'
                    label='Phone'
                    name='phone'
                    value={this.state.user.phone ? this.state.user.phone : ''}
                    onChange={this.handleChangeInput}
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
                    id='standard-name'
                    label='Address'
                    name='address'
                    value={this.state.user.address ? this.state.user.address : ''}
                    onChange={this.handleChangeInput}
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
                  <Button variant='contained' onClick={this.handleSubmitRegister} className={classes.ButtonRegister}>
                    Register
                  </Button>
                </Grid>
                <Grid item xs className={classes.GridClickHere}>
                  Already have an account ? Klik <b>Here</b>
                </Grid>
              </Grid>
            </Box>
          </Fade>
        </Modal>
      </div>
    );
  }
}
// buat subscribe / ngambil date dari reducer, nama modalloginreducer ada di root di combine reducer
const mapStateToProps = (state) => {
  return {
    modalRegister: state.modalRegisterReducer.registerModalOpen,
    userReducer: state.userReducer,
    authReducer: state.authReducer,
  };
};

export default compose(
  withStyles(styles),
  connect(mapStateToProps, { clearError, closeModalRegister, registerAction }),
)(registerModal);
