import React, { Component } from 'react';
import Button from '@material-ui/core/Button';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import { sortBy } from '../actions/SortingActions'
import { connect } from 'react-redux';

 class Sorting extends Component {
    state= {
        anchorEl: null,
        sortType: '',
        type1: 'A-Z',
        type2: 'Popularity',
    }
  
    handleClick = event => {
      this.setState({anchorEl: event.currentTarget});
    };

    handleClose = () => {
      this.setState({anchorEl: null})
    }
  
    handleSort = (sortType) => prop =>{
        this.props.sortBy(sortType);
    };

  
    render(){
    return (
      <div>
        <Button aria-controls="simple-menu" aria-haspopup="true" color="primary" variant="outlined" onClick={this.handleClick}>
          Sort by
        </Button>
        <Menu
          id="simple-menu"
          anchorEl={this.state.anchorEl}
          keepMounted
          open={Boolean(this.state.anchorEl)}
          onClose={this.handleClose}
        >
          <MenuItem onClick={this.handleSort(this.state.type1)}> {this.state.type1} </MenuItem>
          <MenuItem onClick={this.handleSort(this.state.type2)}> {this.state.type2} </MenuItem>
        </Menu>
      </div>
    );
    }
  }


  const mapDispatchToProps = (dispatch) => {
    return {
        sortBy: (sortType) => dispatch(sortBy(sortType))
    }
  };


  export default connect(null, mapDispatchToProps)(Sorting);