import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import { Grid, Button } from '@material-ui/core';
import { AccountCircle, Email, ConfirmationNumber as Status, Wc as Gender, Phone, Room as Map } from '@material-ui/icons';
import { compose } from 'recompose';
import { connect } from 'react-redux';

const styles = (theme) => ({
  div: {
    width: '100%',
    height: '100%',
  },
  divTopSpacer: {
    height: 70,
  },
  divProfile: {
    marginLeft: 'auto',
    marginRight: 'auto',
    marginTop: '5%',
    width: 785,
    height: 489,
    color: 'white',
    backgroundColor: '#1F1F1F',
    borderRadius: '8px',
  },
  divIconWarper: {
    // backgroundColor: "green",
  },
  gridParrent: {
    paddingTop: 30,
    paddingBottom: 30,
    paddingLeft: 30,
    paddingRight: 30,
  },
  divDetailWarper: {
    // backgroundColor: "green",
    marginTop: 2,
    marginRight: -1,
  },
  divTitle: {
    fontWeight: '800',
    fontSize: 20,
    color: 'white',
  },
  data: {
    fontWeight: 900,
    fontSize: 14,
  },
  info: {
    fontSize: 12,
    color: '#8A8C90',
  },

  iconStyle: {
    fontSize: 40,
    color: 'red',
  },
  imgProfile: {
    borderRadius: '5px',
    maxWidth: '288px',
    minWidth: '288px',
    maxHeight: '345',
    minHeight: '345',
    objectFit: 'cover',
    objectPosition: 'center',
  },
  ButtonWatchNow: {
    height: '42px',
    width: '288px',
    fontSize: '18px',
    background: '#E50914',
    color: 'white',
    '&:hover': {
      //you want this to be the same as the backgroundColor above
      backgroundColor: 'white',
      color: '#E50914',
    },
  },
});

class profilePage extends Component {
  render() {
    const { classes } = this.props;
    const { loading, userState } = this.props.authReducer;
    return (
      <div className={classes.div}>
        <div className={classes.divTopSpacer}></div>
        <div className={classes.divProfile}>
          {/* Kontent di sini */}
          {/* Grid parrent */}
          <Grid className={classes.gridParrent} container direction='row' justify='flex-satart' alignItems='flex-start'>
            {/* Grid Info */}
            <Grid item xs>
              {/* Grid List */}
              <Grid container spacing={2} justify='flex-start' direction='column'>
                {/* TITLE */}
                <Grid item xs>
                  <div className={classes.divTitle}>Personal Info</div>
                </Grid>

                {/* FULL NAME */}
                {/* ITEM */}
                <Grid item xs>
                  {/* CONTAINER ROW */}
                  <Grid container direction='row' justify='flex-start' alignItems='flex-start'>
                    {/* ITEM ROW */}
                    <Grid item xs={2}>
                      <div className={classes.divIconWarper}>
                        <AccountCircle className={classes.iconStyle} />
                      </div>
                    </Grid>
                    <div className={classes.divDetailWarper}>
                      <Grid item xs>
                        {/* CONTAINER COLUMN BUAT TEXT */}
                        <Grid container justify='flex-start' direction='column'>
                          <Grid item xs>
                            {loading ? 'Loading . . .' : <div className={classes.data}>{userState.fullName}</div>}
                          </Grid>
                          <Grid item xs className={classes.info}>
                            Full Name
                          </Grid>
                        </Grid>
                      </Grid>
                    </div>
                  </Grid>
                </Grid>

                {/* Email */}
                {/* ITEM */}
                <Grid item xs>
                  {/* CONTAINER ROW */}
                  <Grid container direction='row' justify='flex-start' alignItems='flex-start'>
                    {/* ITEM ROW */}
                    <Grid item xs={2}>
                      <div className={classes.divIconWarper}>
                        <Email className={classes.iconStyle} />
                      </div>
                    </Grid>
                    <div className={classes.divDetailWarper}>
                      <Grid item xs>
                        {/* CONTAINER COLUMN BUAT TEXT */}
                        <Grid container justify='flex-start' direction='column'>
                          <Grid item xs>
                            {loading ? 'Loading . . .' : <div className={classes.data}>{userState.email}</div>}
                          </Grid>
                          <Grid item xs className={classes.info}>
                            Email
                          </Grid>
                        </Grid>
                      </Grid>
                    </div>
                  </Grid>
                </Grid>

                {/* STATUS */}
                {/* ITEM */}
                <Grid item xs>
                  {/* CONTAINER ROW */}
                  <Grid container direction='row' justify='flex-start' alignItems='flex-start'>
                    {/* ITEM ROW */}
                    <Grid item xs={2}>
                      <div className={classes.divIconWarper}>
                        <Status className={classes.iconStyle} />
                      </div>
                    </Grid>
                    <div className={classes.divDetailWarper}>
                      <Grid item xs>
                        {/* CONTAINER COLUMN BUAT TEXT */}
                        <Grid container justify='flex-start' direction='column'>
                          <Grid item xs>
                            {loading ? (
                              'loading . . .'
                            ) : (
                              <div className={classes.data}>{userState.subscribe ? 'Active' : 'Not Active'}</div>
                            )}
                          </Grid>
                          <Grid item xs className={classes.info}>
                            Subscribe
                          </Grid>
                        </Grid>
                      </Grid>
                    </div>
                  </Grid>
                </Grid>

                {/* GENDER */}
                {/* ITEM */}
                <Grid item xs>
                  {/* CONTAINER ROW */}
                  <Grid container direction='row' justify='flex-start' alignItems='flex-start'>
                    {/* ITEM ROW */}
                    <Grid item xs={2}>
                      <div className={classes.divIconWarper}>
                        <Gender className={classes.iconStyle} />
                      </div>
                    </Grid>
                    <div className={classes.divDetailWarper}>
                      <Grid item xs>
                        {/* CONTAINER COLUMN BUAT TEXT */}
                        <Grid container justify='flex-start' direction='column'>
                          <Grid item xs>
                            {loading ? 'Loading . . . ' : <div className={classes.data}>{userState.gender}</div>}
                          </Grid>
                          <Grid item xs className={classes.info}>
                            Gender
                          </Grid>
                        </Grid>
                      </Grid>
                    </div>
                  </Grid>
                </Grid>

                {/* MOBILE PHONE */}
                {/* ITEM */}
                <Grid item xs>
                  {/* CONTAINER ROW */}
                  <Grid container direction='row' justify='flex-start' alignItems='flex-start'>
                    {/* ITEM ROW */}
                    <Grid item xs={2}>
                      <div className={classes.divIconWarper}>
                        <Phone className={classes.iconStyle} />
                      </div>
                    </Grid>
                    <div className={classes.divDetailWarper}>
                      <Grid item xs>
                        {/* CONTAINER COLUMN BUAT TEXT */}
                        <Grid container justify='flex-start' direction='column'>
                          <Grid item xs>
                            {loading ? 'Loading . . .' : <div className={classes.data}>{userState.phone}</div>}
                          </Grid>
                          <Grid item xs className={classes.info}>
                            Mobile Number
                          </Grid>
                        </Grid>
                      </Grid>
                    </div>
                  </Grid>
                </Grid>

                {/* ALAMAT */}
                {/* ITEM */}
                <Grid item xs>
                  {/* CONTAINER ROW */}
                  <Grid container direction='row' justify='flex-start' alignItems='flex-start'>
                    {/* ITEM ROW */}
                    <Grid item xs={2}>
                      <div className={classes.divIconWarper}>
                        <Map className={classes.iconStyle} />
                      </div>
                    </Grid>
                    <div className={classes.divDetailWarper}>
                      <Grid item xs>
                        {/* CONTAINER COLUMN BUAT TEXT */}
                        <Grid container justify='flex-start' direction='column'>
                          <Grid item xs>
                            {loading ? 'Loading . . .' : <div className={classes.data}>{userState.address}</div>}
                          </Grid>
                          <Grid item xs className={classes.info}>
                            Address
                          </Grid>
                        </Grid>
                      </Grid>
                    </div>
                  </Grid>
                </Grid>
              </Grid>
            </Grid>

            {/* Grid foto profile dan button */}
            <Grid item xs>
              <Grid container direction='column' justify='flex-start' alignItems='flex-end'>
                <Grid item xs>
                  <img className={classes.imgProfile} src='https://i.imgur.com/1vHpdTM.png' alt='' />
                </Grid>
                <Grid item xs>
                  <Button variant='contained' className={classes.ButtonWatchNow}>
                    Change Photo Profile
                  </Button>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </div>
      </div>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    authReducer: state.authReducer,
  };
};

export default compose(withStyles(styles), connect(mapStateToProps, null))(profilePage);
