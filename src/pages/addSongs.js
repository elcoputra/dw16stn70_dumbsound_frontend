import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import { Modal, Backdrop, Fade, TextField, Grid, Button, FormControl, InputLabel, Select, MenuItem } from '@material-ui/core';
import { compose } from 'recompose';
import { connect } from 'react-redux';
import { getDataArtistAction } from '../redux/actions/artist_action';
import { postDataSongsAction } from '../redux/actions/song_actions';
import { AttachFile } from '@material-ui/icons';

class addSong extends Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
      uplodSongData: {},
      openSongAttatchment: false,
      open: false,
    };
  }
  componentDidMount() {
    this.props.getDataArtistAction();
  }

  handleChangeSongInputGroup = (event) => {
    const { uplodSongData } = this.state;
    this.setState({
      uplodSongData: { ...uplodSongData, [event.target.name]: event.target.value },
    });
  };

  // Buat buka tutup modal add thumbnail music
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
    this.setState({
      open: false,
    });
  };
  ////////////////////////////////////////////

  // Buat buka tutup modal add song
  handleCloseModalAttatchSong = () => {
    this.setState({
      openSongAttatchment: false,
    });
  };
  handleButtonOpenAttatchSong = () => {
    this.setState({
      openSongAttatchment: true,
    });
  };
  handleButtonConfirmAttatchSong = () => {
    this.setState({
      openSongAttatchment: false,
    });
  };
  ///////////////////////////////////////

  handleChange(i, e) {
    const { name, value } = e.target;
    let uploadEpisodes = [...this.state.uploadEpisodes];
    uploadEpisodes[i] = { ...uploadEpisodes[i], [name]: value };
    this.setState({ uploadEpisodes });
  }
  addClick() {
    this.setState((prevState) => ({
      uploadEpisodes: [...prevState.uploadEpisodes, { title: '', linkEpisode: '', thumbnailEpisode: '', movieId: 0 }],
    }));
  }
  handleSubmit = () => {
    const { uplodSongData } = this.state;
    this.props.postDataSongsAction(uplodSongData);
  };

  // REUSABLE ADD EPISODE COMPONENT END

  render(props) {
    const { classes } = this.props;
    const { artistData, loadingGetArtist } = this.props.getDataArtistReducer;
    const { messageAddSong, loadingAddSong, errorAddSong } = this.props.postDataSongsReducer;
    return (
      <div className={classes.divBase}>
        <div className={classes.divider} />
        <Grid container direction='column' justify='center' alignItems='center'>
          <Grid item xs>
            <Grid container direction='row' justify='flex-start' alignItems='flex-start'>
              <Grid item xs>
                <div className={classes.TitlePage}>Add Song</div>
              </Grid>
            </Grid>
          </Grid>
          <Grid item xs>
            {loadingAddSong ? (
              <div className={classes.succsessMessage}>Loading. . .</div>
            ) : (
              <div className={classes.succsessMessage}>{messageAddSong}</div>
            )}
          </Grid>
          <Grid item xs>
            <div className={classes.errorMessage}>{errorAddSong}</div>
          </Grid>
          <Grid item xs>
            <Grid container direction='row' justify='flex-start' alignItems='center'>
              <Grid item xs>
                <TextField
                  id='standard-name'
                  label='Title'
                  name='title'
                  value={this.state.uplodSongData.title}
                  onChange={this.handleChangeSongInputGroup}
                  className={classes.textField}
                  margin='normal'
                  variant='outlined'
                  InputLabelProps={{
                    classes: {
                      root: classes.cssLabel,
                      focused: classes.cssFocused,
                      FormHelperTextProps: classes.floatingLabelFocusStyle,
                    },
                  }}
                  InputProps={{
                    classes: {
                      root: classes.cssOutlinedInput,
                      focused: classes.cssFocused,
                      notchedOutline: classes.notchedOutline,
                      FormHelperTextProps: classes.floatingLabelFocusStyle,
                    },
                  }}
                />
              </Grid>
              <Grid item xs>
                <Button variant='contained' onClick={this.handleButtonAttatch} className={classes.ButtonAttatch}>
                  <Grid container direction='row' justify='space-between' alignItems='center'>
                    <Grid item xs={9}>
                      <b className={classes.attatchText}>Attatch Thumbnail</b>
                    </Grid>
                    <Grid className={classes.attatchIcon} item xs>
                      <AttachFile className={classes.icon} />
                    </Grid>
                  </Grid>
                </Button>
              </Grid>
            </Grid>
          </Grid>

          <Grid item xs>
            <TextField
              id='standard-name'
              label='Year'
              name='year'
              value={this.state.uplodSongData.year}
              onChange={this.handleChangeSongInputGroup}
              type='number'
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
          </Grid>
          <Grid item xs>
            {loadingGetArtist ? (
              'Loading....'
            ) : (
              <FormControl variant='outlined' className={classes.formControl}>
                <InputLabel className={classes.InputLabel} id='demo-simple-select-outlined-label'>
                  Singer
                </InputLabel>
                <Select
                  labelId='demo-simple-select-outlined-label'
                  id='demo-simple-select-outlined'
                  name='artistId'
                  label='Type'
                  value={this.state.uplodSongData.artistId}
                  onChange={this.handleChangeSongInputGroup}
                  className={classes.select}
                  inputProps={{
                    classes: {
                      icon: classes.icon,
                    },
                  }}
                  MenuProps={{ classes: { paper: classes.dropdownStyle } }}
                >
                  {loadingGetArtist
                    ? 'FETCHING...'
                    : artistData.map((dataFromReducer) => {
                        return <MenuItem value={dataFromReducer.id}>{dataFromReducer.name}</MenuItem>;
                      })}
                </Select>
              </FormControl>
            )}
          </Grid>
          <Grid item xs>
            <Button variant='contained' onClick={this.handleButtonOpenAttatchSong} className={classes.ButtonAttatchSong}>
              <Grid container direction='row' justify='space-between' alignItems='center'>
                <Grid item xs={9}>
                  <b className={classes.attatchText}>Attatch Song</b>
                </Grid>
                <Grid className={classes.attatchIcon} item xs>
                  <AttachFile className={classes.icon} />
                </Grid>
              </Grid>
            </Button>
          </Grid>
          <Grid item xs>
            <Grid item>
              <Button variant='contained' onClick={this.handleSubmit} className={classes.ButtonSave}>
                Add Song
              </Button>
            </Grid>
          </Grid>
        </Grid>
        {/* MODAL ADD ATTACHMENT THUMBNAIL */}
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
              <b className={classes.fontModalTitle}>Cover Song</b>
              <br />
              <br />
              <TextField
                id='standard-name'
                label='Cover Music'
                name='thumbnailLink'
                value={this.state.uplodSongData.thumbnailLink}
                onChange={this.handleChangeSongInputGroup}
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
        {/* MODAL ADD ATTACHMENT THUMBNAIL END*/}

        {/* MODAL ADD ATTACHMENT SONG */}
        <Modal
          aria-labelledby='transition-modal-title'
          aria-describedby='transition-modal-description'
          className={classes.modal}
          open={this.state.openSongAttatchment}
          onClose={this.handleCloseModalAttatchSong}
          closeAfterTransition
          BackdropComponent={Backdrop}
          BackdropProps={{
            timeout: 500,
          }}
        >
          <Fade in={this.state.openSongAttatchment}>
            <div className={classes.paper}>
              {/* INPUT */}
              <b className={classes.fontModalTitle}>Song Link</b>
              <br />
              <br />
              <TextField
                id='standard-name'
                label='Song Link'
                name='musicLink'
                value={this.state.uplodSongData.musicLink}
                onChange={this.handleChangeSongInputGroup}
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
                <Button variant='contained' onClick={this.handleButtonConfirmAttatchSong} className={classes.Kirim}>
                  <div>Attatch</div>
                </Button>
              </Grid>
            </div>
          </Fade>
        </Modal>
        {/* MODAL ADD ATTACHMENT SONG END*/}
      </div>
    );
  }
}

const styles = (theme) => ({
  // Styling Dropdown
  root: {
    fontColor: 'white',
    color: 'white',
    labelColor: 'white',
  },

  formControl: {
    marginTop: 15,
    marginBottom: 15,
    marginLeft: 5,
    height: 50,
    width: 1161,
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
  select: {
    '&:before': {
      borderColor: 'white',
      labelColor: 'white',
      fontColor: 'white',
    },
    '&:after': {
      borderColor: 'white',
      labelColor: 'white',
      fontColor: 'white',
    },
  },
  iconDropdown: {
    fill: 'white',
  },
  // End Styling Dropdown

  divGrid: {
    width: 1150,
    height: 2222,
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
    color: 'white',
    fontColor: 'white',
  },
  divider: {
    height: 50,
  },
  divWarping: {
    backgroundColor: 'green',
    color: 'white',
  },
  textField: {
    background: 'rgba(210, 210, 210, 0.25)',
    marginLeft: 4,
    marginRight: theme.spacing.unit,
    width: 935,
    height: 50,
  },
  textFieldInsertLinkThumbnailEpisode: {
    background: 'rgba(210, 210, 210, 0.25)',
    width: 211,
    height: 50,
  },
  textField3: {
    background: 'rgba(210, 210, 210, 0.25)',
    marginTop: 20,
    marginBottom: 20,
    marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit,
    width: 927,
    height: 50,
  },
  textField2: {
    background: 'rgba(210, 210, 210, 0.25)',
    width: 1157,
    height: 50,
    marginLeft: 4,
  },
  cssLabel: {
    color: '#B1B1B1',
  },

  cssOutlinedInput: {
    '&$cssFocused $notchedOutline': {
      borderColor: `red !important`,
      color: `white !important`,
    },
  },

  cssFocused: {
    color: 'white',
    textColor: 'white',
  },

  notchedOutline: {
    borderWidth: '2px',
    borderColor: 'white !important',
  },
  floatingLabelFocusStyle: {
    color: 'white',
  },
  ButtonAttatch: {
    textTransform: 'none',
    marginTop: 13,
    height: 55,
    width: 213,
    fontSize: '14px',
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
  ButtonAttatchSong: {
    textTransform: 'none',
    marginRight: 943,
    height: 55,
    width: 213,
    fontSize: '14px',
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
  ButtonAddForm: {
    textTransform: 'none',
    marginTop: 13,
    marginLeft: 9,
    height: 30,
    width: 1150,
    fontSize: '14px',
    background: 'rgba(210, 210, 210, 0.25)',
    color: 'red',
    borderStyle: 'solid',
    borderColor: 'white',
    borderWidth: 2,
    '&:hover': {
      //you want this to be the same as the backgroundColor above
      backgroundColor: '#E50914',
      color: 'white',
    },
  },
  ButtonSave: {
    textTransform: 'none',
    marginTop: 34,
    height: 40,
    width: 350,
    fontSize: '14px',
    background: '#F58033',
    color: 'white',
    borderStyle: 'solid',
    borderColor: 'white',
    borderWidth: 2,
    '&:hover': {
      //you want this to be the same as the backgroundColor above
      backgroundColor: '#rgba(210, 210, 210, 0.25)',
      color: 'red',
    },
  },
  attatchText: {},
  attatchIcon: {
    paddingLeft: 4,
    paddingTop: 11,
  },
  icon: {
    fontSize: 40,
  },
  iconAddForm: {
    fontSize: 40,
  },
  TextareaAutosize: {
    marginTop: 5,
    marginLeft: 1,
    marginBottom: 30,
    width: 1145,
    color: 'white',
    borderRadius: 5,
    backgroundColor: '#353535',
  },
  InputLabel: {
    color: 'white',
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
  cheatMargin: {
    width: 218,
  },
  succsessMessage: {
    color: 'green',
  },
  errorMessage: {
    color: 'green',
  },
  TitlePage: {
    color: 'white',
    fontSize: 24,
    fontWeight: '900',
    marginRight: 1036,
    marginTop: 45,
  },
});

const mapStateToProps = (state) => {
  return {
    getDataArtistReducer: state.getDataArtistReducer,
    postDataSongsReducer: state.postDataSongsReducer,
  };
};

export default compose(withStyles(styles), connect(mapStateToProps, { getDataArtistAction, postDataSongsAction }))(addSong);
