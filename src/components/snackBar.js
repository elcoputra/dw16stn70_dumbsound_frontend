import React, { Component } from 'react';
import { Snackbar } from '@material-ui/core';
import { Alert } from '@material-ui/lab';
import { clearError, clearMessage } from '../redux/actions/account_action';
import { clearErrorArtist, clearMessageArtist } from '../redux/actions/artist_action';
import { connect } from 'react-redux';

class snackBar extends Component {
  constructor(props, context) {
    super(props, context);
    this.state = {};
  }
  render() {
    const { classes } = this.props;
    const vertical = 'top';
    const horizontal = 'center';
    const { error, errorBool, message, messageBool } = this.props.userReducer;
    const errorRegister =
      error.data && error.data.error ? error.data.error : error.data && error.data.message ? error.data.message : null;
    const messageRegister = message ? message : null;

    const { messageBoolArtist, errorBoolArtist, artistsMessage, errorArtist } = this.props.PostDataArtistReducer;
    return (
      <div>
        {/* REGISTER SNACK*/}
        {/* ERROR */}
        <Snackbar
          open={errorBool}
          anchorOrigin={{ vertical, horizontal }}
          autoHideDuration={6000}
          onClose={this.props.clearError}
        >
          <Alert onClose={this.props.clearError} severity='error'>
            {errorRegister}
          </Alert>
        </Snackbar>
        {/* SUCCESS */}
        <Snackbar
          open={messageBool}
          anchorOrigin={{ vertical, horizontal }}
          autoHideDuration={6000}
          onClose={this.props.clearMessage}
        >
          <Alert onClose={this.props.clearMessage} severity='success'>
            {messageRegister}
          </Alert>
        </Snackbar>
        {/* REGISTER SNACK*/}
        {/* ////////////////////////////////////////////////////////////////// */}
        {/* ARTIST SNACK*/}
        {/* SUCCESS */}
        <Snackbar
          open={messageBoolArtist}
          anchorOrigin={{ vertical, horizontal }}
          autoHideDuration={6000}
          onClose={this.props.clearMessageArtist}
        >
          <Alert onClose={this.props.clearMessageArtist} severity='success'>
            {artistsMessage ? artistsMessage : ''}
          </Alert>
        </Snackbar>
        {/* ERROR */}
        <Snackbar
          open={errorBoolArtist}
          anchorOrigin={{ vertical, horizontal }}
          autoHideDuration={6000}
          onClose={this.props.clearErrorArtist}
        >
          <Alert onClose={this.props.clearErrorArtist} severity='error'>
            {errorArtist ? errorArtist : artistsMessage ? artistsMessage : 'null'}
          </Alert>
        </Snackbar>
        {/* ARTIST SNACK*/}
      </div>
    );
  }
}
// buat subscribe / ngambil date dari reducer, nama modalloginreducer ada di root di combine reducer
const mapStateToProps = (state) => {
  return {
    userReducer: state.userReducer,
    PostDataArtistReducer: state.PostDataArtistReducer,
  };
};

export default connect(mapStateToProps, { clearError, clearMessage, clearErrorArtist, clearMessageArtist })(snackBar);
