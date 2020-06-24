import React, { Component } from 'react';

import { withStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import Trans from '../data/trans.json';
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';
// import Moment from 'react-moment';
import Moment from 'moment';

import { getDataTransactionsAction, UpdateDataTransactionsAction } from '../redux/actions/transactions_action';
import { compose } from 'recompose';
import { connect } from 'react-redux';

const StyledTableCell = withStyles((theme) => ({
  head: {
    backgroundColor: '#1F1F1F',
    color: 'red',
  },
  body: {
    fontSize: 14,
    backgroundColor: '#1f1f1f',
  },
}))(TableCell);

const StyledTableRow = withStyles((theme) => ({
  root: {
    backgroundColor: '#1f1f1f',
    color: 'white',
    '&:nth-of-type(odd)': {
      backgroundColor: '#2a2a2a',

      color: 'white',
    },
  },
}))(TableRow);
const styles = (theme) => ({
  table: {
    width: 1000,
    background: '#161616',
  },
  divider: {
    height: 100,
  },
  dividerTableBottom: {
    height: 43,
    width: '100%',
    color: 'red',
  },
  tableFontColorWhite: {
    color: 'white',
  },
  tableFontColorGreen: {
    color: 'green',
  },
  tableFontColorRed: {
    color: 'red',
  },
  tableFontColorOrange: {
    color: '#F7941E',
  },
  idCostumize: {
    color: 'white',
    width: 1,
  },
  idCostumizeRed: {
    color: 'red',
    width: 1,
  },
  idCostumizeGreen: {
    color: 'red',
    width: 1,
  },
  ButtonAction: {
    color: '#1C9CD2',
  },
  ButtonActionIcon: {
    color: '#1C9CD2',
    fontSize: 100,
    position: 'relative',
  },
  divBaseDropdown: {
    position: 'absolute',
    background: '#1F1F1F',
    borderRadius: 4,
    top: 34,
    right: 82,
    width: 89,
    height: 74,
    borderStyle: 'solid',
    borderWidth: 1,
    borderColor: 'red',
  },
  tableActionMenu: {
    position: 'relative',
  },
  divBaseRelative: {
    position: 'relative',
  },
  ButtonApproved: {
    color: '#0ACF83',
    fontWeight: 500,
  },
  ButtonCancel: {
    color: '#FF0000',
    fontWeight: 500,
  },
});

class transactionPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dropdownMenuId: 0,
      dataId: 0,
    };
  }

  componentDidMount = () => {
    this.props.getDataTransactionsAction();
  };

  openDropdown(dataID) {
    console.log(dataID);
    if (this.state.dropdownMenuId === 0) {
      this.setState({
        dropdownMenuId: dataID,
      });
    } else {
      this.setState({
        dropdownMenuId: 0,
      });
    }
    this.setState({
      dataID: dataID,
    });
  }

  render() {
    const { classes } = this.props;
    const { dataTransactions, loadingTransactions, errorTransactions } = this.props.transactionsReducer;
    return (
      <div>
        <Grid container direction='column' justify='center' alignItems='center'>
          <div className={classes.divider}></div>
          <TableContainer className={classes.table} component={Paper}>
            <Table aria-label='simple table'>
              <TableHead>
                <TableRow>
                  <StyledTableCell>No</StyledTableCell>
                  <StyledTableCell align='left'>Users</StyledTableCell>
                  <StyledTableCell align='left'>Bukti Transfer</StyledTableCell>
                  <StyledTableCell align='left'>Remaining Active</StyledTableCell>
                  <StyledTableCell align='left'>Status Users</StyledTableCell>
                  <StyledTableCell align='left'>Status Payment</StyledTableCell>
                  <StyledTableCell align='left'>Action</StyledTableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {dataTransactions.reverse().map((row) => (
                  <StyledTableRow key={row.id}>
                    <TableCell className={classes.idCostumize} component='left' scope='row'>
                      {row.id}
                    </TableCell>
                    <TableCell className={classes.tableFontColorWhite} align='left'>
                      {row.user.fullName}
                    </TableCell>
                    <TableCell className={classes.tableFontColorWhite} align='left'>
                      {row.attachment}
                    </TableCell>
                    <TableCell className={classes.tableFontColorWhite} align='left'>
                      {/* {row.remaining} */}
                      {/* <Moment fromNow>{row.dueDate}</Moment> */}
                      {String(Moment(row.dueDate).diff(Date.now(), 'days'))} Days
                    </TableCell>
                    {row.user.subscribe === true ? (
                      <TableCell className={classes.tableFontColorGreen} align='left'>
                        {row.user.subscribe === true ? 'Active' : 'Not active'}
                      </TableCell>
                    ) : (
                      <TableCell className={classes.tableFontColorRed} align='left'>
                        {row.user.subscribe === false ? 'Not active' : 'Active'}
                      </TableCell>
                    )}
                    {row.status === 'Approved' ? (
                      <TableCell className={classes.tableFontColorGreen} align='left'>
                        {row.status}
                      </TableCell>
                    ) : row.status === 'Denied' ? (
                      <TableCell className={classes.tableFontColorRed} align='left'>
                        {row.status}
                      </TableCell>
                    ) : row.status === 'Pending' ? (
                      <TableCell className={classes.tableFontColorOrange} align='left'>
                        {row.status}
                      </TableCell>
                    ) : (
                      <TableCell className={classes.tableFontColorWhite} align='left'>
                        {row.status}
                      </TableCell>
                    )}
                    <TableCell className={classes.tableActionMenu} align='left'>
                      <Button onClick={() => this.openDropdown(row.id)} className={classes.ButtonAction}>
                        <ArrowDropDownIcon classname={classes.ButtonActionIcon} />
                      </Button>
                      {/* Dropdown */}
                      {this.state.dropdownMenuId === row.id ? (
                        <div id={row.id} className={classes.divBaseDropdown}>
                          <Grid container direction='column' justify='center' alignItems='center'>
                            <Button
                              onClick={() => {
                                this.openDropdown(row.id);
                                this.props.UpdateDataTransactionsAction(row.id, { status: 'Approved', userId: row.userId });
                              }}
                              className={classes.ButtonApproved}
                            >
                              Approved
                            </Button>
                            <Button
                              onClick={() => {
                                this.openDropdown(row.id);
                                this.props.UpdateDataTransactionsAction(row.id, { status: 'Denied', userId: row.userId });
                              }}
                              className={classes.ButtonCancel}
                            >
                              Cancel
                            </Button>
                          </Grid>
                        </div>
                      ) : null}

                      {/* dropdown end */}
                    </TableCell>
                  </StyledTableRow>
                ))}
              </TableBody>
            </Table>
            <div className={classes.dividerTableBottom}></div>
          </TableContainer>
        </Grid>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    transactionsReducer: state.transactionsReducer,
    transactionByIdReducer: state.transactionByIdReducer,
  };
};

export default compose(
  withStyles(styles),
  connect(mapStateToProps, { getDataTransactionsAction, UpdateDataTransactionsAction }),
)(transactionPage);
