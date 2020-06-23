import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import { Modal, Backdrop, Fade, Box, Grid, TextField, Button } from '@material-ui/core';
import { AttachFile } from '@material-ui/icons';
import { compose } from 'recompose';
import { connect } from 'react-redux';
import { closeModalAddEpisode } from '../redux/actions/modal_actions';
import { addEpisode } from '../redux/actions/movie_action';
const styles = (theme) => ({
  modal: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    outline: 'none',
  },
  modal2: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  Box: {
    backgroundColor: '#353535',
    opacity: '100%',
    // height: "408px",
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
  textFieldLinkFilm: {
    background: 'rgba(210, 210, 210, 0.25)',
    marginLeft: 5,
    width: 425,
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
  ButtonAdd: {
    height: '50px',
    width: '150px',
    marginLeft: 200,
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
  ButtonAttatch: {
    textTransform: 'none',
    fontSize: 15,
    marginTop: 5,
    height: 53,
    background: 'rgba(210, 210, 210, 0.25)',
    color: '#B1B1B1',
    borderStyle: 'solid',
    borderColor: 'white',
    borderWidth: 2,
    '&:hover': {
      //you want this to be the same as the backgroundColor above
      backgroundColor: '#E50914',
      color: 'white',
    },
  },
  paper2: {
    backgroundColor: '#1f1f1f',
    border: '2px solid #000',
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  },
  fontModalTitle2: {
    color: 'white',
    fontSize: 24,
  },
});

class modalAddEpisode extends Component {
  constructor(props, context) {
    super(props, context);

    this.state = {
      open: false,
      upload: {},
    };
  }

  handleInputChange = (event) => {
    const { upload } = this.state;
    this.setState({
      upload: { ...upload, [event.target.name]: event.target.value },
    });
  };

  handleButtonConfirmAttatch = () => {
    this.setState({
      open: false,
    });
  };
  handleButtonAttatch = () => {
    this.setState({
      open: true,
    });
  };
  handleCloseModalAttatch = () => {
    this.setState({
      open: false,
    });
  };

  handleButtonKirim = () => {
    const { dataDetailMovie } = this.props.detailMovieReducer;
    const { upload } = this.state;
    // this.setState({
    //   upload: { movieId: dataDetailMovie.id },
    // });
    console.log(this.state.upload);
    this.props.addEpisode(dataDetailMovie.id, { ...upload, movieId: dataDetailMovie.id });
  };

  render() {
    const { classes } = this.props;
    const { addEpisodeModalOpen } = this.props.modalAddEpisodeReducer;
    return (
      <div>
        <Modal
          className={classes.modal}
          open={addEpisodeModalOpen}
          onClose={this.props.closeModalAddEpisode}
          closeAfterTransition
          BackdropComponent={Backdrop}
          BackdropProps={{
            timeout: 500,
          }}
        >
          <Fade in={addEpisodeModalOpen}>
            <Box className={classes.Box}>
              <b className={classes.Title}>Add Episode</b>
              <Grid className={classes.GridInput} container direction='column' justify='center' alignItems='center'>
                <Grid item xs={12}>
                  <Grid container direction='row' justify='center' alignItems='center'>
                    <Grid item xs>
                      <TextField
                        id='standard-name'
                        label='Title Episode'
                        name='title'
                        value={this.state.upload.title}
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
                    <Grid item xs>
                      <Button variant='contained' onClick={this.handleButtonAttatch} className={classes.ButtonAttatch}>
                        <AttachFile className={classes.icon} />
                      </Button>
                    </Grid>
                  </Grid>
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    id='standard-name'
                    label='Link Episode'
                    name='linkEpisode'
                    value={this.state.upload.linkEpisode}
                    onChange={this.handleInputChange}
                    className={classes.textFieldLinkFilm}
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
                  <Button variant='contained' onClick={this.handleButtonKirim} className={classes.ButtonAdd}>
                    ADD
                  </Button>
                </Grid>
              </Grid>
            </Box>
          </Fade>
        </Modal>
        {/* MODAL ATTATCH THUMBNAIL EPISODE */}
        <Modal
          aria-labelledby='transition-modal-title'
          aria-describedby='transition-modal-description'
          className={classes.modal2}
          open={this.state.open}
          onClose={this.handleCloseModalAttatch}
          closeAfterTransition
          BackdropComponent={Backdrop}
          BackdropProps={{
            timeout: 500,
          }}
        >
          <Fade in={this.state.open}>
            <div className={classes.paper2}>
              {/* INPUT */}
              <b className={classes.fontModalTitle2}>Link Thumbnail Episode</b>
              <br />
              <br />
              <TextField
                id='standard-name'
                label='Thumbnail Link'
                name='thumbnailEpisode'
                value={this.state.upload.thumbnailEpisode}
                onChange={this.handleInputChange}
                className={classes.textField2}
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
                <Button variant='contained' onClick={this.handleCloseModalAttatch} className={classes.Kirim}>
                  <div>Attatch</div>
                </Button>
              </Grid>
            </div>
          </Fade>
        </Modal>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    modalAddEpisodeReducer: state.modalAddEpisodeReducer,
    detailMovieReducer: state.detailMovieReducer,
  };
};

export default compose(withStyles(styles), connect(mapStateToProps, { closeModalAddEpisode, addEpisode }))(modalAddEpisode);

//     "movieId": 2,
//     "title": "test add episode1",
//     "linkEpisode": "https://www49.uptostream.com/25124oo4fc8/720/0/video.mp4",
//     "thumbnailEpisode":""
