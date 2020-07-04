import React, { Component } from 'react';
import { Modal, Fade, Backdrop, Button } from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';
import { connect } from 'react-redux';
import { compose } from 'recompose';

import { getDataSongsAction, closeModalSongUpdateAction, updateSongAction } from '../redux/actions/song_actions';

class updateSongModal extends Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
      upload: {},
      prevReducer: {},
    };
  }
  componentDidUpdate() {
    const { dataSongForUpdate } = this.props.updateSongReducer;
    if (dataSongForUpdate !== this.state.prevReducer) {
      return this.setState({
        prevReducer: dataSongForUpdate,
        upload: dataSongForUpdate,
      });
    }
  }
  handleInputChange = (event) => {
    const { upload } = this.state;
    this.setState({
      upload: { ...upload, [event.target.name]: event.target.value },
    });
  };

  handleUpdateButton = async () => {
    await this.props.updateSongAction(this.state.upload.id, this.state.upload);
    this.props.closeModalSongUpdateAction();
    this.props.getDataSongsAction();
  };
  render() {
    const { classes } = this.props;
    const { openModalUpdate } = this.props.updateSongReducer;

    return (
      <div>
        <Modal
          aria-labelledby='transition-modal-title'
          aria-describedby='transition-modal-description'
          className={classes.modal}
          open={openModalUpdate}
          onClose={this.props.closeModalSongUpdateAction}
          closeAfterTransition
          BackdropComponent={Backdrop}
          BackdropProps={{
            timeout: 500,
          }}
        >
          <Fade in={openModalUpdate}>
            <div className={classes.paper}>
              <h1 className={classes.titleModal}>Update Song</h1>
              <input
                className={classes.input}
                value={this.state.upload.title}
                onChange={this.handleInputChange}
                placeholder='Title'
                type='text'
                id='title'
                name='title'
              />
              <br />
              <br />
              <input
                className={classes.input}
                value={this.state.upload.year}
                onChange={this.handleInputChange}
                placeholder='Year'
                type='text'
                id='year'
                name='year'
              />
              <br />
              <br />
              <textarea
                className={classes.inputTextArea}
                value={this.state.upload.musicLink}
                onChange={this.handleInputChange}
                placeholder='Music Link'
                type='textarea'
                id='musicLink'
                rows='2'
                name='musicLink'
              />
              <br />
              <br />
              <textarea
                className={classes.inputTextArea}
                value={this.state.upload.thumbnailLink}
                onChange={this.handleInputChange}
                placeholder='Thumbnail Link'
                type='text'
                rows='2'
                id='thumbnailLink'
                name='thumbnailLink'
              />
              <br />
              <br />
              <div className={classes.buttonUpdateContainer}>
                <Button onClick={this.handleUpdateButton} className={classes.buttonUpdate} variant='contained'>
                  UPDATE
                </Button>
              </div>
            </div>
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
  },
  paper: {
    backgroundColor: '#1F1F1F',
    alignItems: 'center',
    justifyContent: 'center',
    border: 'transparent',
    borderRadius: 10,
    width: '30%',
    boxShadow: theme.shadows[5],
    paddingLeft: '2%',
    paddingRight: '2%',
    paddingBottom: '2%',
  },
  titleModal: {
    color: 'white',
    fontWeight: 'bold',
  },
  input: {
    height: 50,
    width: '100%',
    borderRadius: 5,
    color: 'white',
    backgroundColor: '#4C4C4C',
    border: '2px solid #FFFFFF',
    paddingLeft: 10,
    paddingRight: 10,
    '&:focus': {
      border: '2px solid #EE4622',
      '&::placeholder': {
        textAlign: 'right',
      },
    },
  },
  inputTextArea: {
    minHeight: 50,
    maxWidth: '100%',
    minWidth: '100%',
    borderRadius: 5,
    color: 'white',
    backgroundColor: '#4C4C4C',
    border: '2px solid #FFFFFF',
    paddingLeft: 10,
    paddingRight: 10,
    '&:focus': {
      border: '2px solid #EE4622',
      '&::placeholder': {
        textAlign: 'right',
      },
    },
  },
  buttonUpdate: {
    backgroundColor: 'white',
    color: '#ee4622',
    height: 50,
  },
  buttonUpdateContainer: {
    display: 'flex',
    float: 'right',
  },
});

const mapStateToProps = (state) => {
  return {
    updateSongReducer: state.updateSongReducer,
  };
};

export default compose(
  withStyles(styles),
  connect(mapStateToProps, { closeModalSongUpdateAction, updateSongAction, getDataSongsAction }),
)(updateSongModal);
