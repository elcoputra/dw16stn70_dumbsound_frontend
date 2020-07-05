import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import {
  TextareaAutosize,
  Backdrop,
  Fade,
  TextField,
  Grid,
  Button,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
} from '@material-ui/core';
import { compose } from 'recompose';
import { connect } from 'react-redux';
import { getDataTypesAction } from '../redux/actions/types_action';
import { PostDataArtistAction } from '../redux/actions/artist_action';

const styles = (theme) => ({
  // Styling Dropdown
  root: {
    fontColor: 'white',
    color: 'white',
    labelColor: 'white',
  },

  formControl: {
    marginTop: 15,
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
    outline: 0,
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
      outline: 0,
    },
    '&:after': {
      borderColor: 'white',
      labelColor: 'white',
      fontColor: 'white',
      outline: 0,
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
    marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit,
    width: 927,
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
  TextareaAutosize: {
    marginTop: 15,
    marginLeft: 1,
    height: 70,
    width: 1155,
    color: 'white',
    borderRadius: 5,
    backgroundColor: '#353535',
  },
});

class addArtist extends Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
      uploadArtistData: {},
    };
  }
  componentDidMount() {
    this.props.getDataTypesAction();
  }

  handleChangeArtistInputGroup = (event) => {
    const { uploadArtistData } = this.state;
    this.setState({
      uploadArtistData: { ...uploadArtistData, [event.target.name]: event.target.value },
    });
  };
  handleSubmit = () => {
    const { uploadArtistData } = this.state;
    this.props.PostDataArtistAction(uploadArtistData);
    this.setState({
      uploadArtistData: {},
    });
  };

  render(props) {
    const { classes } = this.props;
    const { types, loadingTypes, errorTypes } = this.props.getDataTypesReducer;
    return (
      <div className={classes.divBase}>
        <div className={classes.divider} />
        <Grid container direction='column' justify='center' alignItems='center'>
          <Grid item xs>
            <Grid container direction='row' justify='flex-start' alignItems='flex-start'>
              <Grid item xs>
                <div className={classes.TitlePage}>Add Artist</div>
              </Grid>
            </Grid>
          </Grid>
          <Grid item xs>
            <TextField
              id='standard-name'
              label='Name'
              name='name'
              value={this.state.uploadArtistData.name ? this.state.uploadArtistData.name : ''}
              onChange={this.handleChangeArtistInputGroup}
              className={classes.textField2}
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
            <TextField
              id='standard-name'
              label='Old'
              name='old'
              value={this.state.uploadArtistData.old ? this.state.uploadArtistData.old : ''}
              onChange={this.handleChangeArtistInputGroup}
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
            {loadingTypes ? (
              'Loading....'
            ) : (
              <FormControl variant='outlined' className={classes.formControl}>
                <InputLabel className={classes.InputLabel} id='demo-simple-select-outlined-label'>
                  Type Singer
                </InputLabel>
                <Select
                  labelId='demo-simple-select-outlined-label'
                  id='demo-simple-select-outlined'
                  name='typeId'
                  label='Type'
                  value={this.state.uploadArtistData.typeId ? this.state.uploadArtistData.typeId : ''}
                  onChange={this.handleChangeArtistInputGroup}
                  className={classes.select}
                  inputProps={{
                    classes: {
                      icon: classes.icon,
                    },
                  }}
                  MenuProps={{ classes: { paper: classes.dropdownStyle } }}
                >
                  {loadingTypes
                    ? 'FETCHING...'
                    : types.map((TypesData) => {
                        return <MenuItem value={TypesData.id}>{TypesData.name}</MenuItem>;
                      })}
                </Select>
              </FormControl>
            )}
          </Grid>
          <Grid item xs>
            <TextField
              id='standard-name'
              label='Start A Career'
              name='startAcareer'
              value={this.state.uploadArtistData.startAcareer ? this.state.uploadArtistData.startAcareer : ''}
              onChange={this.handleChangeArtistInputGroup}
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
            <TextareaAutosize
              className={classes.TextareaAutosize}
              aria-label='minimum height'
              rowsMin={4}
              name='bio'
              value={this.state.uploadArtistData.bio}
              onChange={this.handleChangeArtistInputGroup}
              placeholder='Biography'
            />
          </Grid>
          <Grid item xs>
            <TextField
              id='standard-name'
              label='Profile Picture Link'
              name='pic'
              value={this.state.uploadArtistData.pic ? this.state.uploadArtistData.pic : ''}
              onChange={this.handleChangeArtistInputGroup}
              className={classes.textField2}
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
            <TextField
              id='standard-name'
              label='Cover Picture Link'
              name='cover'
              value={this.state.uploadArtistData.cover ? this.state.uploadArtistData.cover : ''}
              onChange={this.handleChangeArtistInputGroup}
              className={classes.textField2}
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
            <Grid item>
              <Button variant='contained' onClick={this.handleSubmit} className={classes.ButtonSave}>
                Add Artist
              </Button>
            </Grid>
          </Grid>
        </Grid>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    getDataTypesReducer: state.getDataTypesReducer,
    PostDataArtistReducer: state.PostDataArtistReducer,
  };
};

export default compose(withStyles(styles), connect(mapStateToProps, { getDataTypesAction, PostDataArtistAction }))(addArtist);
