import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import { AppBar, Toolbar } from '@material-ui/core';
import { compose } from 'recompose';
import { connect } from 'react-redux';

const styles = (theme) => ({
  appBar: {
    width: '100%',
    height: 85,
    backgroundColor: '#2e2d2d',
    position: 'fixed',
    top: 'auto',
    bottom: 0,
  },
});

class musicPlayer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      musicPlayerShow: false,
    };
  }
  render() {
    const { classes } = this.props;
    return (
      <div>
        {this.state.musicPlayerShow && (
          <AppBar position='fixed' color='primary' className={classes.appBar}>
            <Toolbar></Toolbar>
          </AppBar>
        )}
      </div>
    );
  }
}
export default compose(withStyles(styles), connect(null, null))(musicPlayer);
