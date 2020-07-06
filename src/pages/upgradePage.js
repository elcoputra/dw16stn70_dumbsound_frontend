import React, { Component } from 'react';
import { Grid, TextField, Button, Modal, Backdrop, Fade } from '@material-ui/core';
import { AttachFile } from '@material-ui/icons';
import { withStyles } from '@material-ui/core/styles';
import { compose } from 'recompose';
import { connect } from 'react-redux';
import { upgradeAction } from '../redux/actions/upgrade_action';
import 'react-jinke-music-player/assets/index.css';

const styles = (theme) => ({
  divBase: {
    marginTop: 150,
  },
  premiumText: {
    fontWeight: 800,
    fontSize: 36,
    color: 'white',
  },
  deskripsi: {
    marginTop: 40,
    fontSize: 18,
    color: 'white',
  },
  dumbflix: {
    fontSize: 18,
    color: 'red',
  },
  rekening: {
    fontSize: 18,
    color: 'white',
  },
  textField: {
    background: 'rgba(210, 210, 210, 0.25)',
    marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit,
    width: 350,
    height: 50,
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
  ButtonAttatch: {
    textTransform: 'none',
    marginTop: 10,
    height: 50,
    width: 350,
    fontSize: '18px',
    background: 'white',
    color: '#E50914',
    '&:hover': {
      //you want this to be the same as the backgroundColor above
      backgroundColor: '#E50914',
      color: 'white',
    },
  },
  Kirim: {
    textTransform: 'none',
    marginTop: 65,
    height: 40,
    width: 350,
    fontSize: '18px',
    background: '#E50914',
    color: 'white',
    '&:hover': {
      //you want this to be the same as the backgroundColor above
      backgroundColor: 'white',
      color: '#E50914',
    },
  },
  attatchText: {
    paddingRight: 16,
  },
  attatchIcon: {
    paddingLeft: 39,
    paddingTop: 11,
  },
  icon: {
    fontSize: 40,
  },
  modal: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  paper: {
    backgroundColor: '#1f1f1f',
    border: '2px solid #000',
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  },
  fontModalTitle: {
    color: 'white',
    fontSize: 24,
  },
  errorResponse: {
    color: 'white',
  },
});
class upgradePage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      upload: {},
      open: false,
    };
  }

  componentDidMount = () => {
    const { userState } = this.props.authReducer;
    const { upload } = this.state;
    this.setState({
      upload: { ...upload, userId: userState.id },
    });
  };

  handleInputChange = (event) => {
    const { upload } = this.state;
    this.setState({
      upload: { ...upload, [event.target.name]: event.target.value },
    });
  };
  handleButtonKirim = () => {
    console.log(this.state.upload);
    this.props.upgradeAction(this.state.upload);
  };
  handleCloseModalAttatch = () => {
    this.setState({
      open: false,
    });
  };
  handleButtonAttatch = () => {
    this.setState({
      open: true,
    });
  };
  handleButtonConfirmAttatch = () => {
    console.log(this.state.upload.attachment);
    this.setState({
      open: false,
    });
  };

  render() {
    const { classes } = this.props;
    const { error } = this.props.upgradeReducer;
    const errorHandling = error && error.data ? error.data.error : null;
    const errorMessageHandling = error && error.data ? error.data.message : null;
    return (
      <div className={classes.divBase}>
        <Grid container direction='column' justify='center' alignItems='center'>
          <Grid item xs>
            <div className={classes.premiumText}>Premium</div>
          </Grid>
          <Grid item xs>
            <div className={classes.errorResponse}>
              <br />
              {errorHandling}
              <br />
              {errorMessageHandling}
            </div>
          </Grid>
          <Grid item xs>
            <div className={classes.deskripsi}>
              Bayar sekarang dan nikmati streaming music yang kekinian dari <b className={classes.dumbflix}>DUMBSOUND</b>
            </div>
          </Grid>
          <Grid item xs>
            <div>
              <b className={classes.dumbflix}>DUMBSOUND</b>
              <b className={classes.rekening}> : 0981312323</b>
            </div>
          </Grid>
          <Grid item xs>
            <TextField
              id='standard-name'
              label='Input Your Account Number'
              name='bankAccount'
              value={this.state.upload.bankAccount}
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
                inputMode: 'numeric',
              }}
            />
          </Grid>
          <Grid item xs>
            <Button variant='contained' onClick={this.handleButtonAttatch} className={classes.ButtonAttatch}>
              <Grid container direction='row' justify='space-between' alignItems='center'>
                <Grid item xs={9}>
                  <b className={classes.attatchText}>Attatch Proof Of Transfer</b>
                </Grid>
                <Grid className={classes.attatchIcon} item xs>
                  <AttachFile className={classes.icon} />
                </Grid>
              </Grid>
            </Button>
          </Grid>
          <Grid item xs>
            <Button variant='contained' onClick={this.handleButtonKirim} className={classes.Kirim}>
              <div>Kirim</div>
            </Button>
          </Grid>
        </Grid>
        {/* MODAL ADD ATTACHMENT STRING */}
        <Modal
          aria-labelledby='transition-modal-title'
          aria-describedby='transition-modal-description'
          className={classes.modal}
          open={this.state.open}
          onClose={this.handleCloseModalAttatch}
          closeAfterTransition
          BackdropComponent={Backdrop}
          BackdropProps={{
            timeout: 500,
          }}
        >
          <Fade in={this.state.open}>
            <div className={classes.paper}>
              {/* INPUT */}
              <b className={classes.fontModalTitle}>Input your attatch</b>
              <br />
              <br />
              <TextField
                id='standard-name'
                label='Input your Attatch'
                name='attachment'
                value={this.state.upload.attachment}
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
              <Grid item xs>
                <Button variant='contained' onClick={this.handleButtonConfirmAttatch} className={classes.Kirim}>
                  <div>Attatch</div>
                </Button>
              </Grid>
            </div>
          </Fade>
        </Modal>
        {/* MODAL ADD ATTACHMENT STRING END*/}
      </div>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    authReducer: state.authReducer,
    upgradeReducer: state.upgradeReducer,
  };
};

export default compose(withStyles(styles), connect(mapStateToProps, { upgradeAction }))(upgradePage);
